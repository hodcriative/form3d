// Carregado logo depois do #pageTransition, antes de qualquer outro
// script — evita "piscar" a página nova sem a cobertura quando se chega
// aqui vindo de uma transição. (Antes ficava inline no HTML; foi para
// arquivo próprio por causa da Content-Security-Policy.)
(function () {
  try {
    if (sessionStorage.getItem('forj3d_transition') === '1') {
      var cover = document.getElementById('pageTransition');
      if (cover) cover.classList.add('is-covered');
    }
  } catch (e) { /* sem sessionStorage disponível — segue normal */ }
})();
