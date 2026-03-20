/* =====================================================
   script.js — Segurança Digital
   Autor: Carlos Lavigne
   Descrição: Toda a interatividade do site:
     - Alternância de idioma (PT | EN)
     - Alternância de tema (claro | escuro)
     - Navegação entre seções (SPA-like)
     - Menu hamburger (mobile)
     - Checklist interativo com barra de progresso
     - Animação de entrada por scroll (Reveal)
===================================================== */

/* ─────────────────────────────────────────
   1. ESTADO GLOBAL
───────────────────────────────────────── */

// Idioma atual: 'pt' ou 'en'
let currentLang = 'pt';


/* ─────────────────────────────────────────
   2. ALTERNÂNCIA DE IDIOMA
   Todos os elementos com [data-pt] e [data-en]
   têm seu innerHTML trocado ao mudar o idioma.
───────────────────────────────────────── */

/**
 * Alterna entre português e inglês.
 * Chamada pelo botão PT | EN na navbar.
 */
function toggleLang() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyLang();
}

/**
 * Aplica o idioma atual a todos os elementos
 * que possuem os atributos data-pt / data-en.
 */
function applyLang() {
  document.querySelectorAll('[data-pt]').forEach(el => {
    const value = el.getAttribute('data-' + currentLang);
    if (value) el.innerHTML = value;
  });

  // Atualiza o texto do botão de idioma
  document.getElementById('langBtn').textContent =
    currentLang === 'pt' ? 'EN' : 'PT';

  // Atualiza o atributo lang do HTML para acessibilidade
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

  // Atualiza o label do checklist no idioma correto
  updateProgress();
}


/* ─────────────────────────────────────────
   3. ALTERNÂNCIA DE TEMA (claro / escuro)
   Modifica o atributo data-theme no <html>.
   As cores mudam automaticamente via CSS.
───────────────────────────────────────── */

const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  const html    = document.documentElement;
  const isDark  = html.getAttribute('data-theme') === 'dark';

  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeBtn.textContent = isDark ? '🌙' : '☀️';
});


/* ─────────────────────────────────────────
   4. NAVEGAÇÃO ENTRE SEÇÕES (SPA-like)
   Ao clicar nos links da navbar, mostra apenas
   a seção correspondente e atualiza o link ativo.
───────────────────────────────────────── */

/**
 * Exibe a seção com o ID informado e
 * oculta todas as outras.
 * @param {string} id - ID da seção a exibir
 */
function showSection(id) {
  // Oculta todas as seções
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
  });

  // Mostra a seção selecionada
  document.getElementById(id).classList.add('active');

  // Atualiza o link ativo na navbar
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(a => a.classList.remove('active'));

  // Mapa de seção → índice do link na navbar
  const navIndexMap = {
    home:      0,
    ataques:   1,
    dicas:     2,
    checklist: 3,
    sobre:     4,
  };

  if (navLinks[navIndexMap[id]]) {
    navLinks[navIndexMap[id]].classList.add('active');
  }

  // Volta ao topo da página
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fecha o menu mobile se estiver aberto
  closeMenu();

  // Reinicia as animações de reveal para a nova seção
  setTimeout(initReveal, 60);
}


/* ─────────────────────────────────────────
   5. MENU HAMBURGER (mobile)
───────────────────────────────────────── */

const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});

/** Fecha o menu mobile */
function closeMenu() {
  navLinksEl.classList.remove('open');
}


/* ─────────────────────────────────────────
   6. CHECKLIST INTERATIVO
   Clique em um item alterna entre feito/não feito.
   A barra de progresso e o label são atualizados.
───────────────────────────────────────── */

/**
 * Marca ou desmarca um item do checklist.
 * @param {HTMLElement} item - O elemento .check-item clicado
 */
function toggleCheck(item) {
  item.classList.toggle('done');

  // Atualiza o ícone dentro da caixa de marcação
  const box = item.querySelector('.check-box');
  box.textContent = item.classList.contains('done') ? '✓' : '';

  updateProgress();
}

/**
 * Atualiza a barra de progresso e o texto contador.
 */
function updateProgress() {
  const allItems  = document.querySelectorAll('.check-item');
  const doneItems = document.querySelectorAll('.check-item.done');
  const total     = allItems.length;
  const done      = doneItems.length;
  const percent   = total > 0 ? Math.round((done / total) * 100) : 0;

  // Atualiza a barra
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = percent + '%';

  // Atualiza o texto no idioma correto
  const label = document.getElementById('progress-label');
  if (label) {
    label.textContent = currentLang === 'en'
      ? `${done} of ${total} completed`
      : `${done} de ${total} concluídos`;
  }
}


/* ─────────────────────────────────────────
   7. ANIMAÇÃO DE ENTRADA (Scroll Reveal)
   Elementos com a classe .reveal ficam
   invisíveis até entrar na viewport, quando
   recebem .visible e animam para dentro.
───────────────────────────────────────── */

/**
 * Inicializa o IntersectionObserver para
 * animar os elementos .reveal da seção ativa.
 */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Anima só uma vez
        }
      });
    },
    { threshold: 0.08 }
  );

  // Remove .visible e re-observa todos os elementos .reveal
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    observer.observe(el);
  });
}


/* ─────────────────────────────────────────
   8. INICIALIZAÇÃO
   Roda quando o DOM está pronto.
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});
