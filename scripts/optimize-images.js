#!/usr/bin/env node
/* =========================================================
   FORJ3D — Otimizador de imagens de produtos
   ---------------------------------------------------------
   Gera, para cada foto original em IMG/produtos/**:
     nome.jpeg  ->  nome.webp         (versão "cheia": galeria/zoom)
                    nome-thumb.webp   (versão pequena: cards/miniaturas)

   As fotos originais NÃO são apagadas nem alteradas — ficam
   como estão no repositório, apenas como matéria-prima. O site
   passa a carregar as versões .webp, que são MUITO mais leves.

   USO:
     npm install         (só na primeira vez, instala o sharp)
     npm run optimize-images

   Rode isso sempre que adicionar fotos novas de produtos, antes
   de publicar o site.
========================================================= */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'IMG', 'produtos');

const FULL_MAX = 1800;    // lado maior da versão grande (galeria + zoom)
const FULL_QUALITY = 80;
const THUMB_MAX = 480;    // lado maior da miniatura (cards/grade)
const THUMB_QUALITY = 70;

const SOURCE_EXT = /\.(jpe?g|png)$/i;
const CONCURRENCY = 4; // processa N imagens em paralelo (evita estourar memória)

let processed = 0;
let skipped = 0;
let originalBytes = 0;
let newBytes = 0;

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (SOURCE_EXT.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function processFile(srcPath) {
  const fullOut = srcPath.replace(SOURCE_EXT, '.webp');
  const thumbOut = srcPath.replace(SOURCE_EXT, '-thumb.webp');
  const srcStat = fs.statSync(srcPath);

  const needsFull = !fs.existsSync(fullOut) || fs.statSync(fullOut).mtimeMs < srcStat.mtimeMs;
  const needsThumb = !fs.existsSync(thumbOut) || fs.statSync(thumbOut).mtimeMs < srcStat.mtimeMs;

  if (!needsFull && !needsThumb) {
    skipped++;
    return;
  }

  try {
    if (needsFull) {
      await sharp(srcPath)
        .rotate() // respeita a orientação EXIF (fotos de celular)
        .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: FULL_QUALITY })
        .toFile(fullOut);
    }
    if (needsThumb) {
      await sharp(srcPath)
        .rotate()
        .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY })
        .toFile(thumbOut);
    }

    originalBytes += srcStat.size;
    newBytes += (fs.existsSync(fullOut) ? fs.statSync(fullOut).size : 0)
              + (fs.existsSync(thumbOut) ? fs.statSync(thumbOut).size : 0);
    processed++;
    process.stdout.write(`\rProcessadas: ${processed}  |  Puladas (já otimizadas): ${skipped}   `);
  } catch (err) {
    console.error(`\nErro ao processar ${srcPath}:`, err.message);
  }
}

async function runQueue(files) {
  let index = 0;
  async function worker() {
    while (index < files.length) {
      const current = files[index++];
      await processFile(current);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
}

function formatMB(bytes) {
  return (bytes / 1024 / 1024).toFixed(1) + ' MB';
}

(async () => {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`Pasta não encontrada: ${SRC_DIR}`);
    process.exit(1);
  }

  console.log('Procurando fotos de produtos...');
  const files = walk(SRC_DIR);
  console.log(`Encontradas ${files.length} fotos (jpg/jpeg/png).\n`);

  await runQueue(files);

  console.log('\n\n=========================================');
  console.log(`Concluído!`);
  console.log(`Imagens novas/atualizadas: ${processed}`);
  console.log(`Imagens já otimizadas (puladas): ${skipped}`);
  if (processed > 0) {
    console.log(`Tamanho original (dessas ${processed}): ${formatMB(originalBytes)}`);
    console.log(`Tamanho novo (.webp full+thumb):        ${formatMB(newBytes)}`);
    console.log(`Economia: ${(100 - (newBytes / originalBytes * 100)).toFixed(1)}%`);
  }
  console.log('=========================================');
})();
