#!/usr/bin/env node
/* =========================================================
   FORJ3D — monta a versão de produção do site em _producao/
   ---------------------------------------------------------
   Copia só o que o site realmente usa:
     - páginas, CSS, JS, fontes, Three.js, modelos 3D, logos
     - fotos de produtos APENAS nas versões .webp (as originais,
       que somam ~2 GB, ficam só no repositório)
   Também:
     - troca o endereço do site pelo de deploy/site-url.txt
       (card do WhatsApp, canonical, sitemap)
     - gera .htaccess, robots.txt e sitemap.xml
     - para com erro se algum produto apontar para uma foto sem .webp

   Roda automaticamente pelo GitHub Actions a cada push no main
   (.github/workflows/producao.yml), que publica o resultado no
   branch "producao" — é esse branch que a Hostinger usa.

   Para testar localmente:  node scripts/build-producao.js
========================================================= */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, '_producao');
const DEV_URL = 'https://hodcriative.github.io/form3d/';

const PAGES = ['index.html', 'produtos.html', 'privacidade.html'];
const DIRS = ['CSS', 'JS', 'fonts', 'vendor', 'GLB'];
const PRODUCT_DIR = path.join('IMG', 'produtos');

function readSiteUrl() {
  const file = path.join(ROOT, 'deploy', 'site-url.txt');
  const line = fs.readFileSync(file, 'utf8')
    .split('\n').map(l => l.trim())
    .find(l => l && !l.startsWith('#'));
  if (!line || !/^https:\/\/[^\s]+$/.test(line)) {
    throw new Error(`deploy/site-url.txt inválido: "${line || ''}" (use https://seudominio/ )`);
  }
  return line.endsWith('/') ? line : line + '/';
}

function copyFile(rel) {
  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.join(ROOT, rel), dest);
}

function walk(dir, list = []) {
  for (const entry of fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(rel, list);
    else list.push(rel);
  }
  return list;
}

function loadProducts() {
  const sandbox = { window: {}, localStorage: { getItem: () => null },
    document: { addEventListener() {}, querySelectorAll: () => [] } };
  const code = fs.readFileSync(path.join(ROOT, 'JS', 'products-data.js'), 'utf8');
  new Function('window', 'localStorage', 'document', code)(sandbox.window, sandbox.localStorage, sandbox.document);
  return sandbox.window;
}

(function build() {
  const siteUrl = readSiteUrl();
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  // 1. Valida as fotos dos produtos
  const w = loadProducts();
  const missing = [];
  for (const p of w.FORJ3D_PRODUCTS) {
    for (const src of p.images || []) {
      for (const v of [w.forj3dToFullSrc(src), w.forj3dToThumbSrc(src)]) {
        if (!fs.existsSync(path.join(ROOT, v))) missing.push(`#${p.id} ${v}`);
      }
    }
  }
  if (missing.length) {
    console.error('Fotos sem versão .webp (rode npm run optimize-images):\n  ' + missing.join('\n  '));
    process.exit(1);
  }

  // 2. Copia páginas e pastas do site
  PAGES.forEach(copyFile);
  DIRS.forEach(d => walk(d).forEach(copyFile));

  // 3. Imagens: tudo fora de IMG/produtos; em IMG/produtos só .webp
  let webpCount = 0;
  walk('IMG').forEach(rel => {
    if (/readme/i.test(rel)) return;
    if (rel.startsWith(PRODUCT_DIR + path.sep)) {
      if (!rel.endsWith('.webp')) return;
      webpCount++;
    }
    copyFile(rel);
  });

  // 4. Endereço definitivo nas páginas
  PAGES.forEach(page => {
    const file = path.join(OUT, page);
    const html = fs.readFileSync(file, 'utf8').split(DEV_URL).join(siteUrl);
    fs.writeFileSync(file, html);
  });

  // 5. Arquivos de servidor e SEO
  fs.copyFileSync(path.join(ROOT, 'deploy', 'htaccess'), path.join(OUT, '.htaccess'));
  fs.writeFileSync(path.join(OUT, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`);
  const today = new Date().toISOString().slice(0, 10);
  const urls = [['', '1.0'], ['produtos.html', '0.9'], ['privacidade.html', '0.3']]
    .map(([p, pr]) => `  <url><loc>${siteUrl}${p}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`)
    .join('\n');
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

  // Resumo
  let bytes = 0, files = 0;
  (function size(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const f = path.join(dir, e.name);
      if (e.isDirectory()) size(f); else { bytes += fs.statSync(f).size; files++; }
    }
  })(OUT);
  console.log(`Produção montada em _producao/`);
  console.log(`  Endereço do site: ${siteUrl}`);
  console.log(`  Produtos: ${w.FORJ3D_PRODUCTS.length} | fotos .webp: ${webpCount}`);
  console.log(`  Total: ${files} arquivos, ${(bytes / 1024 / 1024).toFixed(1)} MB`);
})();
