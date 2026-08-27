(() => {
  const header = document.getElementById('site-header');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Navbar shadow on scroll
  const updateHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Hero "layer counter" ambient animation
  const totalLayers = 312;
  let layer = 0;
  const layerLabel = document.getElementById('layer-count');
  const layerFill = document.getElementById('layer-fill');

  if (layerLabel && layerFill) {
    if (!prefersReduced) {
      setInterval(() => {
        layer = (layer + 7) % (totalLayers + 1);
        layerLabel.textContent = 'camada ' + String(layer).padStart(3, '0') + '/' + totalLayers;
        layerFill.style.width = (layer / totalLayers * 100) + '%';
      }, 220);
    } else {
      layerLabel.textContent = 'camada 312/312';
      layerFill.style.width = '100%';
    }
  }

  // Featured products — mesma fonte de dados do catálogo.
  const carousel = document.getElementById('carousel');
  const products = window.FORJ3D_PRODUCTS || [];
  const icons = window.FORJ3D_ICONS || {};
  const whatsappNumber = window.FORJ3D_CONFIG?.whatsappNumber || '5527997941766';

  const featuredIds = [1, 2, 3, 4, 5];
  const featuredProducts = featuredIds
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  const getImages = product => Array.isArray(product.images)
    ? product.images.filter(Boolean)
    : [];

  const productVisual = product => {
    const images = getImages(product);
    if (images.length) {
      const hover = images.length > 1
        ? `<img class="card-img-hover" src="${images[1]}" alt="" aria-hidden="true" loading="lazy" draggable="false">`
        : '';
      return `<img src="${images[0]}" alt="${product.name}" loading="lazy" draggable="false">${hover}`;
    }
    return icons[product.icon] || '';
  };

  const productUrl = product => `produtos.html#produto/${product.id}`;

  const cardHTML = product => `
    <a class="card" href="${productUrl(product)}" aria-label="Ver detalhes de ${product.name}">
      <div class="card-img">
        ${productVisual(product)}
        <div class="card-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
      </div>
      <span class="card-cat mono">${product.category}</span>
      <div class="card-name">${product.name}</div>
      <div class="card-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
      <span class="card-cta">Ver produto</span>
    </a>`;

  if (carousel) {
    carousel.innerHTML = featuredProducts.map(cardHTML).join('');
  }

  // Carousel controls
  const scrollCarousel = direction => {
    if (!carousel) return;
    const firstCard = carousel.querySelector('.card');
    const gap = parseFloat(getComputedStyle(carousel).gap || '20') || 20;
    const amount = firstCard ? firstCard.getBoundingClientRect().width + gap : 260;
    carousel.scrollBy({
      left: direction * amount,
      behavior: prefersReduced ? 'auto' : 'smooth'
    });
  };

  document.getElementById('nextBtn')?.addEventListener('click', () => scrollCarousel(1));
  document.getElementById('prevBtn')?.addEventListener('click', () => scrollCarousel(-1));

  // Keyboard support for the carousel controls.
  ['prevBtn', 'nextBtn'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        document.getElementById(id).click();
      }
    });
  });

  // Mantém a navegação para WhatsApp centralizada caso algum destaque precise usar CTA no futuro.
  window.FORJ3D_WHATSAPP_URL = number => `https://wa.me/${number || whatsappNumber}`;

  // Scroll reveal da estrutura da Home.
  if (!prefersReduced) {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  }
})();