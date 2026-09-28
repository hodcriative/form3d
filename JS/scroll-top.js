// O header é "position: sticky", então a âncora nativa "#top"
// acha que ele já está no topo e não rola a página. Forçamos
// o scroll manualmente nos links da logo (nav e footer).
document.querySelectorAll('a[href="#top"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
