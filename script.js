const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

const closeMenu = () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });
header.classList.toggle('scrolled', window.scrollY > 24);

const progress = document.querySelector('.scroll-progress');
const updateProgress = () => {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const value = distance > 0 ? window.scrollY / distance : 0;
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, value))})`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('p');
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  const image = item.querySelector('img');
  dialogImage.src = item.dataset.full;
  dialogImage.alt = image.alt;
  dialogCaption.textContent = item.querySelector('span').textContent;
  dialog.showModal();
}));
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && dialog.open) dialog.close(); });
