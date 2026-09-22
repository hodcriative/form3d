/* =========================================================
   FORJ3D — ripple de clique para o efeito "liquid metal"
   (CSS/liquid-metal-button.css). Um único listener delegado
   cobre também botões criados depois (cards de filtro,
   linhas do carrinho, banner de cookies), sem precisar mexer
   em produtos.js / cart.js / cookie-consent.js.
========================================================= */
(function () {
  const SELECTOR = [
    '.btn', '.cta-form-submit', '.cookie-accept', '.cookie-reject',
    '.cbtn', '.cart-trigger', '.cart-close', '.navlinks-mobile-btn',
    '.qty-btn', '.modal-close', '.search-clear', '.filter-btn',
    '.thumb', '.card-cta',
  ].join(', ');

  function ripplePoint(event) {
    if (event.type === 'touchstart') {
      const touch = event.touches[0];
      return touch ? { x: touch.clientX, y: touch.clientY } : null;
    }
    return { x: event.clientX, y: event.clientY };
  }

  function spawnRipple(el, point) {
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    let layer = el.querySelector(':scope > .lm-ripple-layer');
    if (!layer) {
      layer = document.createElement('span');
      layer.className = 'lm-ripple-layer';
      layer.setAttribute('aria-hidden', 'true');
      el.appendChild(layer);
    }

    const size = Math.max(rect.width, rect.height) * 1.3;
    const span = document.createElement('span');
    span.className = 'lm-ripple';
    span.style.width = `${size}px`;
    span.style.height = `${size}px`;
    span.style.left = `${point.x - rect.left}px`;
    span.style.top = `${point.y - rect.top}px`;
    layer.appendChild(span);

    span.addEventListener('animationend', () => span.remove());
    setTimeout(() => span.remove(), 700); // rede de segurança
  }

  function handlePress(event) {
    const el = event.target.closest(SELECTOR);
    if (!el || el.disabled) return;

    const point = ripplePoint(event);
    if (point) spawnRipple(el, point);
  }

  document.addEventListener('pointerdown', handlePress, { passive: true });
})();
