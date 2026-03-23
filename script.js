/* ── script.js ── */

// ── Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ── Mobile drawer
const menuBtn      = document.getElementById('menuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerClose  = document.getElementById('drawerClose');
const drawerOverlay= document.getElementById('drawerOverlay');

function openDrawer() {
  mobileDrawer.classList.add('open');
  drawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  mobileDrawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

document.querySelectorAll('.drawer-link').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// ── Scroll-reveal (Intersection Observer)
const revealEls = document.querySelectorAll(
  '.timeline-item, .project-card, .edu-card, .fade-in, .about-grid, .pub-teaser, .contact-form'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings slightly
      const siblings = entry.target.parentElement.querySelectorAll(
        '.timeline-item, .project-card, .edu-card'
      );
      const idx = Array.from(siblings).indexOf(entry.target);
      const delay = idx >= 0 ? idx * 80 : 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ── Nav active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top    = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { passive: true });

// ── Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Contact form (Formspree — update action URL in index.html)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    const action = contactForm.getAttribute('action');
    if (action.includes('YOUR_FORM_ID')) {
      // Formspree not set up yet — just log a note
      e.preventDefault();
      alert('Contact form not yet configured. See the README for setup instructions.');
      return;
    }
    // If Formspree action is real, let native submit handle it
  });
}
