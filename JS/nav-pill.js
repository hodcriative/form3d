// navbar em pílula — ativa o item clicado e sincroniza a versão
// desktop com a versão dentro do menu mobile (hambúrguer)
(function () {
  const groups = document.querySelectorAll('.pill-nav');
  if (!groups.length) return;

  groups.forEach((group) => {
    const groupKey = group.getAttribute('data-pill-group');

    group.querySelectorAll('.pill-link').forEach((link) => {
      link.addEventListener('click', () => {
        const pillKey = link.getAttribute('data-pill');
        if (!pillKey) return;

        document
          .querySelectorAll(`.pill-nav[data-pill-group="${groupKey}"] .pill-link`)
          .forEach((el) => {
            el.classList.toggle('active', el.getAttribute('data-pill') === pillKey);
          });
      });
    });
  });
})();

// compensa a altura do header fixo/sticky nos links âncora (#sobre,
// #produtos, #contato, #catalogo...), senão o scroll nativo alinha o
// topo da seção com o topo da tela e o header cobre o começo dela —
// dando a impressão de que o link aponta pro meio do conteúdo.
(function () {
  const header = document.querySelector('header');
  if (!header) return;

  function updateHeaderOffset() {
    const height = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-scroll-offset', `${height + 16}px`);
  }

  updateHeaderOffset();
  window.addEventListener('resize', updateHeaderOffset);
  window.addEventListener('load', updateHeaderOffset);
})();
