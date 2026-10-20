const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const themeToggle = document.getElementById('themeToggle');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Light/dark toggle. The initial theme is set by the inline script in <head>.
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Underline the nav link for whichever section is currently being read.
if ('IntersectionObserver' in window) {
  const links = new Map();
  siteNav.querySelectorAll('a[href^="#"]').forEach((link) => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section) links.set(section, link);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      siteNav.querySelectorAll('a.active').forEach((a) => a.classList.remove('active'));
      links.get(entry.target).classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  links.forEach((_, section) => observer.observe(section));
}
