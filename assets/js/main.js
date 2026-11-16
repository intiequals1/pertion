// ── Navigation Toggle (Mobile) ──
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ── Fade-in on scroll ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.pillar-card, .chapter-item, .glossar-card, .excerpt-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});

// ── Datenschutzhinweis ──
// Informiert und fragt keine Einwilligung ab, weil pertion.io keine Cookies, kein Tracking und keine
// externen Dienste nutzt. Gespeichert wird nur, dass der Hinweis geschlossen wurde (Schlüssel
// NOTICE_KEY, beschrieben in datenschutz.html; § 165 Abs. 3 TKG 2021).
const NOTICE_KEY = 'pertion.datenschutzhinweis.v1';
(() => {
  let closed = null;
  try { closed = window.localStorage.getItem(NOTICE_KEY); } catch { closed = null; }
  if (closed === 'geschlossen') return;
  const box = document.createElement('aside');
  box.className = 'privacy-notice';
  box.setAttribute('aria-label', 'Datenschutzhinweis');
  box.innerHTML = '<p>pertion.io setzt keine Cookies und kein Tracking ein und lädt keine externen Dienste. '
    + 'Wenn Sie diesen Hinweis schließen, wird nur das in Ihrem Browser vermerkt.</p>'
    + '<div class="privacy-notice-actions"><a href="datenschutz.html">Datenschutz</a>'
    + '<button type="button">Verstanden</button></div>';
  document.body.appendChild(box);
  document.body.style.paddingBottom = `${box.offsetHeight + 24}px`;
  box.querySelector('button').addEventListener('click', () => {
    try { window.localStorage.setItem(NOTICE_KEY, 'geschlossen'); } catch { /* nur für diesen Aufruf */ }
    box.remove();
    document.body.style.paddingBottom = '';
  });
})();
