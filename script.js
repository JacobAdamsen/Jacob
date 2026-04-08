const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('mobileDrawer');
const drawerClose = document.getElementById('drawerClose');
const overlay = document.getElementById('drawerOverlay');
const drawerLinks = document.querySelectorAll('.drawer-link');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');
const revealSections = document.querySelectorAll('.section-reveal');

const setDrawerState = (isOpen) => {
  drawer.classList.toggle('open', isOpen);
  overlay.classList.toggle('open', isOpen);
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  drawer.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

menuBtn?.addEventListener('click', () => setDrawerState(true));
drawerClose?.addEventListener('click', () => setDrawerState(false));
overlay?.addEventListener('click', () => setDrawerState(false));

for (const link of drawerLinks) {
  link.addEventListener('click', () => setDrawerState(false));
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setDrawerState(false);
  }
});

const updateNav = () => {
  nav?.classList.toggle('is-scrolled', window.scrollY > 16);

  const y = window.scrollY + 160;
  for (const section of sections) {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if (y >= top && y < bottom) {
      for (const link of navLinks) {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
      }
    }
  }
};

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

for (const el of revealSections) {
  revealObserver.observe(el);
}

document.getElementById('year').textContent = new Date().getFullYear();