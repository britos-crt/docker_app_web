/**
 * TechCourses — Main JavaScript
 * Handles: course data, rendering, filters, search, counters, mobile nav, toast
 */

// ============================================================
// COURSE DATA
// ============================================================

const COURSES = [
  // Programação
  {
    id: 1,
    title: "Python do Zero ao Avançado",
    description: "Aprenda Python do zero com projetos reais: automação, web scraping, APIs e muito mais.",
    category: "programacao",
    level: "iniciante",
    duration: "40h",
    lessons: 120,
    rating: 4.9,
    students: 12400,
    price: "Grátis",
    emoji: "🐍",
    color1: "#1e293b",
    color2: "#3b4f6e",
  },
  {
    id: 2,
    title: "JavaScript Moderno (ES6+)",
    description: "Domine JavaScript moderno, Promises, Async/Await, módulos e as melhores práticas do mercado.",
    category: "programacao",
    level: "intermediario",
    duration: "35h",
    lessons: 98,
    rating: 4.8,
    students: 9800,
    price: "R$ 79",
    emoji: "⚡",
    color1: "#1a1a00",
    color2: "#3d3700",
  },
  {
    id: 3,
    title: "React & Next.js na Prática",
    description: "Crie aplicações web modernas com React 18 e Next.js 14, incluindo SSR e App Router.",
    category: "programacao",
    level: "intermediario",
    duration: "50h",
    lessons: 145,
    rating: 4.9,
    students: 8700,
    price: "R$ 99",
    emoji: "⚛️",
    color1: "#001a2e",
    color2: "#003a5e",
  },
  {
    id: 4,
    title: "Java & Spring Boot",
    description: "Backend robusto com Java 21, Spring Boot 3, JPA, segurança e deploy em produção.",
    category: "programacao",
    level: "avancado",
    duration: "60h",
    lessons: 180,
    rating: 4.7,
    students: 6300,
    price: "R$ 119",
    emoji: "☕",
    color1: "#1a0a00",
    color2: "#3d1f00",
  },
  // Cloud & DevOps
  {
    id: 5,
    title: "Docker & Kubernetes",
    description: "Containerize suas aplicações com Docker, orquestre com Kubernetes e domine CI/CD.",
    category: "cloud",
    level: "intermediario",
    duration: "45h",
    lessons: 132,
    rating: 4.9,
    students: 11200,
    price: "Grátis",
    emoji: "🐳",
    color1: "#001a3e",
    color2: "#00316e",
  },
  {
    id: 6,
    title: "AWS Certified Solutions Architect",
    description: "Prepare-se para a certificação AWS SAA-C03 com laboratórios práticos e simulados.",
    category: "cloud",
    level: "avancado",
    duration: "55h",
    lessons: 160,
    rating: 4.8,
    students: 7600,
    price: "R$ 149",
    emoji: "☁️",
    color1: "#0d0a00",
    color2: "#2a1f00",
  },
  {
    id: 7,
    title: "CI/CD com GitHub Actions",
    description: "Automatize builds, testes e deploys com GitHub Actions, ArgoCD e GitOps.",
    category: "cloud",
    level: "intermediario",
    duration: "28h",
    lessons: 76,
    rating: 4.7,
    students: 5400,
    price: "R$ 69",
    emoji: "🔄",
    color1: "#0d1117",
    color2: "#161b22",
  },
  // Data Science
  {
    id: 8,
    title: "Python para Data Science",
    description: "Pandas, NumPy, Matplotlib e Scikit-learn para análise de dados do zero ao modelo preditivo.",
    category: "data",
    level: "iniciante",
    duration: "48h",
    lessons: 140,
    rating: 4.9,
    students: 13100,
    price: "Grátis",
    emoji: "📊",
    color1: "#0a1a00",
    color2: "#1a3600",
  },
  {
    id: 9,
    title: "Machine Learning com Python",
    description: "Algoritmos supervisionados, não supervisionados e deep learning com TensorFlow e PyTorch.",
    category: "data",
    level: "avancado",
    duration: "70h",
    lessons: 200,
    rating: 4.8,
    students: 8200,
    price: "R$ 139",
    emoji: "🤖",
    color1: "#0a001a",
    color2: "#1e0036",
  },
  {
    id: 10,
    title: "SQL e Bancos de Dados",
    description: "Domine SQL do básico ao avançado: queries complexas, otimização e NoSQL (MongoDB, Redis).",
    category: "data",
    level: "iniciante",
    duration: "32h",
    lessons: 90,
    rating: 4.7,
    students: 9900,
    price: "R$ 59",
    emoji: "🗄️",
    color1: "#001a1a",
    color2: "#003636",
  },
  // Segurança
  {
    id: 11,
    title: "Ethical Hacking & Pentest",
    description: "Aprenda segurança ofensiva: reconhecimento, exploração, pós-exploração e relatórios.",
    category: "seguranca",
    level: "avancado",
    duration: "65h",
    lessons: 185,
    rating: 4.9,
    students: 6700,
    price: "R$ 129",
    emoji: "🔒",
    color1: "#1a0000",
    color2: "#3a0000",
  },
  {
    id: 12,
    title: "Segurança em Cloud & LGPD",
    description: "Boas práticas de segurança em cloud, conformidade com LGPD e gestão de identidade.",
    category: "seguranca",
    level: "intermediario",
    duration: "30h",
    lessons: 84,
    rating: 4.6,
    students: 4100,
    price: "R$ 89",
    emoji: "🛡️",
    color1: "#001a0a",
    color2: "#00361a",
  },
  // Mobile
  {
    id: 13,
    title: "React Native do Zero",
    description: "Crie apps iOS e Android com React Native, Expo, navegação e integração com APIs.",
    category: "mobile",
    level: "intermediario",
    duration: "42h",
    lessons: 118,
    rating: 4.8,
    students: 7300,
    price: "R$ 89",
    emoji: "📱",
    color1: "#001a2e",
    color2: "#003a5e",
  },
  {
    id: 14,
    title: "Flutter & Dart",
    description: "Desenvolva apps multiplataforma bonitos com Flutter 3, Dart e Material Design 3.",
    category: "mobile",
    level: "iniciante",
    duration: "38h",
    lessons: 108,
    rating: 4.7,
    students: 5800,
    price: "R$ 79",
    emoji: "🦋",
    color1: "#001a3a",
    color2: "#003a7a",
  },
];

// ============================================================
// RENDER HELPERS
// ============================================================

/**
 * Generates the SVG background for a course thumbnail
 */
function makeSVGThumb(color1, color2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 160">
    <defs>
      <linearGradient id="g${Math.random().toString(36).slice(2)}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${color1}"/>
        <stop offset="100%" stop-color="${color2}"/>
      </linearGradient>
    </defs>
    <rect width="300" height="160" fill="${color1}"/>
    <circle cx="260" cy="20" r="80" fill="${color2}" opacity="0.4"/>
    <circle cx="40" cy="140" r="60" fill="${color2}" opacity="0.2"/>
    <rect x="20" y="70" width="120" height="8" rx="4" fill="rgba(255,255,255,0.08)"/>
    <rect x="20" y="88" width="80" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
  </svg>`;
}

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5 ? 1 : 0;
  return `${'★'.repeat(full)}${'½'.repeat(half)} <span style="color:var(--muted);margin-left:4px">${rating}</span>`;
}

function formatStudents(n) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace('.', ',') + 'k' : n;
}

function buildCourseCard(course) {
  const levelLabel = { iniciante: 'Iniciante', intermediario: 'Intermediário', avancado: 'Avançado' }[course.level] || course.level;
  const isFree = course.price === 'Grátis';
  return `
    <article class="course-card" data-category="${course.category}" data-title="${course.title.toLowerCase()}">
      <div class="course-thumb">
        ${makeSVGThumb(course.color1, course.color2)}
        <span class="thumb-emoji">${course.emoji}</span>
      </div>
      <div class="course-body">
        <div class="course-meta">
          <span class="tag tag-${course.category}">${course.category === 'programacao' ? 'Programação' : course.category === 'cloud' ? 'Cloud & DevOps' : course.category === 'data' ? 'Data Science' : course.category === 'seguranca' ? 'Segurança' : 'Mobile'}</span>
          <span class="tag tag-${course.level}">${levelLabel}</span>
        </div>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-footer">
          <div>
            <div class="stars">${starsHTML(course.rating)}</div>
            <div class="course-info">
              <span>📚 ${course.lessons} aulas</span>
              <span>⏱ ${course.duration}</span>
              <span>👥 ${formatStudents(course.students)}</span>
            </div>
          </div>
          <span class="course-price ${isFree ? 'free' : ''}">${course.price}</span>
        </div>
      </div>
    </article>`;
}

// ============================================================
// PAGE INIT — HOME (index.html)
// ============================================================

function initHome() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;

  const featured = COURSES.filter(c => c.rating >= 4.8 && c.price === 'Grátis')
    .concat(COURSES.filter(c => c.rating >= 4.9 && c.price !== 'Grátis'))
    .slice(0, 6);

  grid.innerHTML = featured.map(buildCourseCard).join('');

  // Animated counters
  animateCounter('countStudents', 50000, 1800, v => (v / 1000).toFixed(0) + 'k+');
  animateCounter('countCourses', 120, 1400, v => v + '+');
  animateCounter('countInst', 35, 1200, v => v + '+');
}

// ============================================================
// PAGE INIT — CURSOS (cursos.html)
// ============================================================

let currentFilter = 'all';
let currentSearch = '';

function renderAllCourses() {
  const grid = document.getElementById('allCoursesGrid');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  const filtered = COURSES.filter(c => {
    const matchFilter = currentFilter === 'all' || c.category === currentFilter;
    const matchSearch = c.title.toLowerCase().includes(currentSearch) ||
                        c.description.toLowerCase().includes(currentSearch);
    return matchFilter && matchSearch;
  });

  grid.innerHTML = filtered.length
    ? filtered.map(buildCourseCard).join('')
    : '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px">Nenhum curso encontrado. Tente outro filtro ou busca.</p>';

  if (countEl) countEl.textContent = `${filtered.length} curso${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;
}

function initCursos() {
  if (!document.getElementById('allCoursesGrid')) return;

  renderAllCourses();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderAllCourses();
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderAllCourses();
    });
  }
}

// ============================================================
// ANIMATED COUNTER
// ============================================================

function animateCounter(id, target, duration, format) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = format(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ============================================================
// MOBILE NAV TOGGLE
// ============================================================

function initMobileNav() {
  const toggle = document.getElementById('menuToggle');
  const navInner = document.querySelector('.nav-inner');
  if (!toggle || !navInner) return;
  toggle.addEventListener('click', () => {
    navInner.classList.toggle('mobile-open');
  });
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// COURSE CARD CLICK — toast feedback
// ============================================================

function initCardClicks() {
  document.addEventListener('click', e => {
    const card = e.target.closest('.course-card');
    if (card) {
      const title = card.querySelector('h3')?.textContent;
      showToast(`✅ "${title}" adicionado à sua lista!`);
    }
  });
}

// ============================================================
// BOOT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initHome();
  initCursos();
  initMobileNav();
  initCardClicks();
});
