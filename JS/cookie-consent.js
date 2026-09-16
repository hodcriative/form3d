/* =========================================================
   BANNER DE COOKIES
   Enquanto o visitante não aceita, fotos de produto e os
   visualizadores 3D ficam bloqueados (ver forj3dMediaAttrs em
   products-data.js e o gate em hero/spider-fluid-viewer.js).
   ========================================================= */
(function () {
  const KEY = window.FORJ3D_CONSENT_KEY || 'forj3d_cookie_consent';

  function getStored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function setStored(value) {
    try { localStorage.setItem(KEY, value); } catch (e) { /* ambiente sem storage — segue sem persistir */ }
  }

  function buildBanner() {
    const banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Aviso de cookies');
    banner.innerHTML = `
      <div class="cookie-banner-text">
        <span class="cookie-banner-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a9 9 0 1 1-9-9c0 2 1 3 3 3s3 1 3 3 1 3 3 3Z"/>
            <circle cx="8.5" cy="12.5" r="1"/>
            <circle cx="12" cy="16" r="1"/>
            <circle cx="15" cy="10" r="1"/>
          </svg>
        </span>
        <p>
          Usamos cookies só para lembrar sua preferência e liberar as fotos e os modelos 3D do site. Leia nossa
          <a href="privacidade.html" target="_blank" rel="noopener">Política de Privacidade</a>.
        </p>
      </div>
      <div class="cookie-banner-actions">
        <button type="button" class="cookie-reject">Rejeitar</button>
        <button type="button" class="cookie-accept">Aceitar cookies</button>
      </div>
    `;
    document.body.appendChild(banner);
    return banner;
  }

  function hideBanner(banner) {
    banner.setAttribute('hidden', '');
  }

  function init() {
    const consent = getStored();

    // já respondeu antes — não mostra o banner de novo.
    // (se aceitou, forj3dMediaAttrs já libera direto na primeira montagem
    // das imagens; nada mais a fazer aqui.)
    if (consent === 'accepted' || consent === 'rejected') return;

    const banner = buildBanner();

    banner.querySelector('.cookie-accept').addEventListener('click', () => {
      setStored('accepted');
      if (window.forj3dReleaseMedia) window.forj3dReleaseMedia();
      hideBanner(banner);
    });

    banner.querySelector('.cookie-reject').addEventListener('click', () => {
      setStored('rejected');
      hideBanner(banner);
    });
  }

  // permite reabrir o banner (ex.: link "Preferências de cookies" no rodapé)
  window.forj3dOpenCookiePrefs = function () {
    const existing = document.querySelector('.cookie-banner');
    if (existing) { existing.removeAttribute('hidden'); return; }
    init();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
