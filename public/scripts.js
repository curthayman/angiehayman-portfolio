// Typing Effect for Tagline
const phrases = [
  "I wear a lot of hats… and sometimes I make them too.",
  "Creative soul. Plant lover. Macrame maker.",
  "Family, food, and floppy-eared dogs."
];
let typingIndex = 0, charIndex = 0, deleting = false;
const typingElement = document.querySelector('.typing-effect');

function typeLoop() {
  if (!typingElement) return;
  const currentPhrase = phrases[typingIndex];
  if (!deleting) {
    typingElement.textContent = currentPhrase.slice(0, ++charIndex);
    if (charIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typingElement.textContent = currentPhrase.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      typingIndex = (typingIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 80);
}
typeLoop();

// Soft Scroll Fade-Ins
function handleFadeIn() {
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleFadeIn);
window.addEventListener('DOMContentLoaded', handleFadeIn);

// Plant Vine SVG Animation
document.querySelectorAll('.vine-svg').forEach(svg => {
  svg.innerHTML = `<path class="vine-path" d="M10,50 Q60,10 110,50" />`;
  // Animation is handled by CSS
});

// Bouncy Icon Row (on load and hover)
document.querySelectorAll('.icon-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.animation = 'bounceIn 0.7s';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.animation = '';
  });
});

// Macrame Hanger Drop (handled by CSS on load)

// Dog Tail Wag (SVG or GIF should have .dog-tail class for animation)

// Sewing Needle Trail (handled by CSS on load)

// Optional: Re-trigger vine animation on scroll into view
function animateVinesOnScroll() {
  document.querySelectorAll('.plant-vine .vine-svg').forEach(svg => {
    const rect = svg.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      svg.querySelector('.vine-path').style.animation = 'vineGrow 2s forwards';
    }
  });
}
window.addEventListener('scroll', animateVinesOnScroll);
window.addEventListener('DOMContentLoaded', animateVinesOnScroll);
document.addEventListener("DOMContentLoaded", function() {
  const vine = document.getElementById('header-vine-path');
  if (!vine) return;
  const duration = 2500; // 2.5 seconds
  const pause = 800;     // 0.8 second pause

  function animateVine() {
    vine.style.transition = 'none';
    vine.style.strokeDashoffset = 400;
    // Force reflow
    void vine.offsetWidth;
    // Animate to 0
    vine.style.transition = `stroke-dashoffset ${duration}ms ease-out`;
    vine.style.strokeDashoffset = 0;
  }

  animateVine();
  setInterval(animateVine, duration + pause);
});
function getSeasonalEmojis() {
  // Example: Spring/Summer/Fall/Winter
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) { // March-May: Spring
    return ['🌸', '🌱', '🐣', '🌷', '🐝'];
  } else if (month >= 5 && month <= 7) { // June-Aug: Summer
    return ['🌻', '🌞', '🍉', '🪴', '🦙'];
  } else if (month >= 8 && month <= 10) { // Sept-Nov: Fall
    return ['🍂', '🍁', '🎃', '🦃', '🌰'];
  } else { // Dec-Feb: Winter
    return ['❄️', '⛄', '🌨️', '🎄', '🧣'];
  }
}

function createSeasonalItem() {
  const decor = document.getElementById('seasonalDecor');
  if (!decor) return;
  const emojis = getSeasonalEmojis();
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const item = document.createElement('span');
  item.className = 'seasonal-item';
  item.textContent = emoji;
  item.style.left = Math.random() * 98 + 'vw';
  item.style.fontSize = (1.5 + Math.random() * 2) + 'em';
  item.style.top = '-40px';
  decor.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, 8000);
}
setInterval(createSeasonalItem, 1200);
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.flyer-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);
});
// Flyer Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Carousel code (if you have it) ...

  // Modal code:
  const flyerModal = document.getElementById('flyer-modal');
  const flyerModalImg = document.getElementById('flyer-modal-img');
  const flyerModalClose = document.querySelector('.flyer-modal-close');
  const flyerModalBackdrop = document.querySelector('.flyer-modal-backdrop');

  // Open modal on flyer click
  document.querySelectorAll('.flyer-frame img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      flyerModalImg.src = this.src;
      flyerModalImg.alt = this.alt || 'Flyer enlarged';
      flyerModal.style.display = 'flex';
      flyerModal.focus();
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    });
  });

  // Close modal on close button or backdrop click
  function closeFlyerModal() {
    flyerModal.style.display = 'none';
    flyerModalImg.src = '';
    document.body.style.overflow = '';
  }
  flyerModalClose.addEventListener('click', closeFlyerModal);
  flyerModalBackdrop.addEventListener('click', closeFlyerModal);

  // Close modal on ESC key
  document.addEventListener('keydown', function(e) {
    if (flyerModal.style.display === 'flex' && (e.key === 'Escape' || e.key === 'Esc')) {
      closeFlyerModal();
    }
  });
});
// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
// Minimum loader display time in milliseconds
const MIN_LOADER_TIME = 1200;

const loader = document.getElementById('site-loader');
const loaderStart = Date.now();

window.addEventListener('load', function() {
  const elapsed = Date.now() - loaderStart;
  const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => loader.style.display = 'none', 600);
    }
  }, remaining);
});
