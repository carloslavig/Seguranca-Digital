/* =====================================================
   script.js — Segurança Digital
   Autor: Carlos Lavigne
===================================================== */

let currentLang = 'pt';

/* ─── NAVEGAÇÃO ─────────────────────────────────── */
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  document.querySelectorAll('a[data-nav]').forEach(a => {
    a.classList.toggle('active', a.getAttribute('data-nav') === id);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('nav-links').classList.remove('open');
  setTimeout(initReveal, 60);
}

/* ─── IDIOMA ─────────────────────────────────────── */
function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';

  document.querySelectorAll('span.i18n').forEach(el => {
    const val = el.getAttribute('data-' + currentLang);
    if (val !== null) el.innerHTML = val;
  });

  document.getElementById('langBtn').textContent = currentLang === 'pt' ? 'EN' : 'PT';
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
  updateProgress();
}

/* ─── CHECKLIST ──────────────────────────────────── */
function updateProgress() {
  const total   = document.querySelectorAll('.check-item').length;
  const done    = document.querySelectorAll('.check-item.done').length;
  const percent = total > 0 ? Math.round((done / total) * 100) : 0;

  const bar   = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');

  if (bar)   bar.style.width = percent + '%';
  if (label) label.textContent = currentLang === 'en'
    ? `${done} of ${total} completed`
    : `${done} de ${total} concluídos`;
}

/* ─── SCROLL REVEAL ──────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    obs.observe(el);
  });
}

/* ─── INICIALIZAÇÃO ──────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  /* Todos os links e botões de navegação (data-nav) */
  document.querySelectorAll('[data-nav]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showSection(el.getAttribute('data-nav'));
    });
  });

  /* Tema */
  document.getElementById('themeBtn').addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
  });

  /* Idioma */
  document.getElementById('langBtn').addEventListener('click', toggleLang);

  /* Hamburger */
  document.getElementById('hamburger').addEventListener('click', function () {
    document.getElementById('nav-links').classList.toggle('open');
  });

  /* Checklist — listener direto em cada item */
  document.querySelectorAll('.check-item').forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle('done');
      item.querySelector('.check-box').textContent =
        item.classList.contains('done') ? '✓' : '';
      updateProgress();
    });
  });

  initReveal();
});
