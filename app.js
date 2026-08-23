// ==========================================
// DATA CONFIGURATION (Centralized State)
// ==========================================

const PROCESS_DATA = [
  { icon: '🔍', num: '01', title: 'Discover', desc: 'I start with behavior — interviews, analytics, and competitive scans — to find the real friction, not just the stated problem.' },
  { icon: '🎯', num: '02', title: 'Decide', desc: 'I turn research into a point of view: what to build, who it\'s for, and why it beats the status quo.' },
  { icon: '🖱', num: '03', title: 'Design', desc: 'From sitemaps to hi-fi prototypes, I design interfaces that feel obvious in hindsight and hold up under accessibility scrutiny.' },
  { icon: '📈', num: '04', title: 'Measure', desc: 'I close the loop with metrics — conversion, engagement, task success — so the next iteration is sharper than the last.' }
];

const PROJECTS_DATA = [
  {
    title: 'WeMo Nexus',
    category: 'strategy',
    tagClass: 'cat-strategy',
    tagLabel: 'Product Strategy · 2023',
    link: 'wemo-nexus.html',
    icon: '🌏',
    metricNum: '20%',
    metricLabel: 'conversion',
    hook: 'A bilingual enterprise site that turned a scooter-fleet product into a credible pitch — still live today.'
  },
  {
    title: 'When AI Misleads: Human Decision Failures in Hiring',
    category: 'research',
    tagClass: 'cat-research',
    tagLabel: 'Decision Science & AI Ethics · 2025–2026',
    link: 'ai-hiring-bias.html',
    icon: '⚖️',
    metricNum: '90%',
    metricLabel: 'AI Deferral Rate',
    hook: 'Analyzed why human evaluators defer to biased AI hiring tools and designed mechanism-targeted interventions to protect human autonomy.'
  },
  {
    title: 'ImproveMyself: AI Personal Logistics Assistant',
    category: 'design',
    tagClass: 'cat-design',
    tagLabel: 'AI Concept & Product Strategy · 2026',
    link: 'improve-myself.html',
    icon: '⚡',
    metricNum: '0→1',
    metricLabel: 'Product Concept',
    hook: 'An AI assistant that unifies to-do lists, habit tracking, and errand routing into one low-friction "Brain Dump" system.'
  }
];

const EXPERIENCE_DATA = [
  {
    role: 'HMI Research Intern',
    org: 'AUO Corporation',
    date: 'Jun – Aug 2026',
    location: 'Taipei, Taiwan',
    summary: 'Benchmarked 50+ global automotive brands\' AI-HMI and display experiences to shape future in-vehicle product strategy.',
    bullets: [
      'Benchmarked 50+ global automotive brands on AI-powered HMI features, vehicle ecosystems, and display technologies.',
      'Built large-scale Figma research repositories documenting vehicle UX patterns, feature landscapes, and user journeys.',
      'Evaluated emerging display, sensor, and AI-assistant technologies for intuitive, context-aware in-vehicle experiences.'
    ]
  },
  {
    role: 'Digital Consultant Intern',
    org: 'Google Community Leaders Program',
    date: 'Aug 2024 – May 2026',
    location: 'Ann Arbor, MI',
    summary: 'Ran research-driven consulting engagements for 150+ nonprofits and SMBs, turning analytics into growth roadmaps.',
    bullets: [
      'Ran discovery interviews and needs assessments with 150+ nonprofits and SMBs to find usability gaps and engagement drop-offs.',
      'Facilitated 30+ workshops turning Google Analytics data, SEO heuristics, and GBP insights into audience strategies.',
      'Led 3 end-to-end consulting engagements with usability audits, navigation restructures, and annotated recommendations.'
    ]
  },
  {
    role: 'Product Management Intern',
    org: 'WeMo Scooters',
    date: 'Jun – Aug 2023',
    location: 'Taipei, Taiwan',
    summary: 'Designed and launched a bilingual enterprise site that helped convert 20% of demos into paid pilots. <a href="wemo-nexus.html" class="text-coral">View case study →</a>',
    bullets: [
      'Designed and launched WeMoNexus (wemonexus.com) in WordPress, defining sitemap, content hierarchy, and component reuse.',
      'Produced client-facing pitch decks with hi-fidelity layouts aligned to enterprise stakeholder mental models.',
      'Built and managed a 250+ ICP prospect pipeline, ran 30+ demos, and achieved a 20% demo-to-pilot conversion.'
    ]
  },
  {
    role: 'Risk Advisory Intern',
    org: 'Deloitte',
    date: 'Jun – Aug 2024',
    location: 'Taipei, Taiwan',
    summary: 'Built ESG compliance frameworks across 7 industries, translating global regulation into board-ready recommendations.',
    bullets: [
      'Designed 5 client-facing ESG compliance frameworks across 7 industries (EU CSRD, TCFD, SEC climate rules).',
      'Benchmarked environmental disclosures across 30+ global telecoms and co-developed a tailored ESG improvement roadmap.',
      'Restructured 200+ SigmaPro product entries with standardized taxonomy to support Scope 3 emissions audits.'
    ]
  },
  {
    role: 'Market Strategy Intern',
    org: 'Amphenol Communication Solutions',
    date: 'Aug 2022 – Jun 2023',
    location: 'Taipei, Taiwan',
    summary: 'Analyzed CRM data and built a GTM playbook that lifted reply rates 15% and new client acquisition 30%.',
    bullets: [
      'Analyzed Salesforce CRM data to identify top-performing contact segments and inform outreach strategy.',
      'Ran message testing that lifted email reply rates 15% and drove a 30% increase in new client acquisition.',
      'Built a GTM playbook covering product positioning, pricing tiers, and competitive differentiation for two hardware lines.'
    ]
  }
];

const SKILLS_DATA = [
  { title: 'Analytical', tags: ['Competitive Benchmarking', 'User Research', 'Data Synthesis', 'Google Analytics', 'SPSS'] },
  { title: 'Strategy & Comms', tags: ['Stakeholder Presentations', 'GTM Strategy', 'Client Advisory', 'Figma', 'Journey Mapping'] },
  { title: 'Development', tags: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'RWD', 'WordPress', 'Webflow', 'Python'] },
  { title: 'Languages', tags: ['Native English', 'Native Mandarin'] }
];

const EDUCATION_DATA = [
  {
    role: 'Master of Human-Computer Interaction',
    org: 'Carnegie Mellon University',
    date: 'Expected May 2027'
  },
  {
    role: 'B.S. Honors Cognitive Science (Decision Track) & Honors Psychology',
    org: 'University of Michigan — Minor in User Experience',
    date: 'Aug 2023 – May 2026',
    note: 'GPA: 3.9/4.0 · Distinction · University Honors · James B. Angell Scholar · Donna Wessel Walker Award'
  }
];

const LIKES_DATA = [
  {
    img: 'pilates.png', alt: 'Pilates workout setup', badge: '☕',
    title: 'Pilates (with matcha)', subtitle: 'Movement keeps me grounded; matcha keeps it enjoyable.',
    whyTitle: 'Why I Love It',
    whyDesc: 'I love the way my body and posture change after my morning workouts! It sets a structured, focused baseline before diving into complex interaction design mapping sessions.'
  },
  {
    img: 'cake.png', alt: 'a cake I baked', badge: '💗',
    title: 'Baking!!', subtitle: 'I love the iteration that happens in the kitchen!',
    whyTitle: 'Why I Love It',
    whyDesc: 'Research, prototype, taste, iterate. My best culinary variations come from functional improvisation, matching ingredients the same way I structure interface patterns.'
  },
  {
    img: 'photos.JPG', alt: 'picture of mount fuji', badge: '💬',
    title: 'Photos', subtitle: 'I love to take photos.',
    whyTitle: 'Why I Love It',
    whyDesc: 'I love taking photos of different scenaries as well getting taken photo of -- could you tell from me being a model?'
  },
  {
    img: 'modeling.png', alt: 'Exhibition spatial layouts', badge: '🎵',
    title: 'Modelings', subtitle: 'I love modeling - building confidence from being a good community is everything!!',
    whyTitle: 'Why I Love It',
    whyDesc: 'I used to have low self-confidence because I had severe acnes. Through modeling, I started appreciating the other features and skills that I have and learned to not dwell on some of the flaws I may have!'
  },
  {
    img: 'iceland.JPG', alt: 'Anita next to an ice cave in Iceland', badge: '🧭',
    title: 'Travel & observation', subtitle: 'Moving between global places reminds me that context is absolutely everything.',
    whyTitle: 'Why I Love It',
    whyDesc: 'I love going to new places and trying new activities! In the photo was me after a 7 hour ice cave hike!! It was super tiring but super rewarding to see. I would love to go to Switzerland next!'
  },
  {
    img: 'modern_family.png', alt: 'Modern Family', badge: '🧠',
    title: 'Shows', subtitle: 'My favorite way to relax after a long day is watching a show -- specifically sitcom if it is a bad day!',
    whyTitle: 'My favorite shows',
    whyDesc: 'Fun fact: when you binge-watch a 20-minute show, you experience a character\'s entire arc of conflict and resolution in a compressed timeframe. This triggers a neurological reward system, providing a safe, satisfying sense of completion and life progress.'
  }
];

// ==========================================
// RENDERERS
// ==========================================

function renderProcess() {
  const container = document.getElementById('process-grid');
  if (!container) return;
  container.innerHTML = PROCESS_DATA.map(p => `
    <div class="glass-card lift process-card">
      <div class="row"><div class="process-icon">${p.icon}</div><span class="process-num">${p.num}</span></div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `).join('');
}

function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-bento');
  const emptyMsg = document.getElementById('filter-empty-msg');
  if (!container) return;

  const filtered = PROJECTS_DATA.filter(p => filter === 'all' || p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';

  container.innerHTML = filtered.map(p => `
    <a class="case-tile ${p.tagClass}" data-category="${p.category}" href="${p.link}">
      <div class="case-thumb">
        <span class="case-thumb-icon">${p.icon}</span>
        <span class="case-metric-badge">${p.metricNum} <small>${p.metricLabel}</small></span>
      </div>
      <div class="case-tile-body">
        <p class="case-tile-tag">${p.tagLabel}</p>
        <h3>${p.title}</h3>
        ${p.hook ? `<p class="case-tile-hook">${p.hook}</p>` : ''}
      </div>
    </a>
  `).join('');
}

function renderFilters() {
  const container = document.getElementById('filter-container');
  if (!container) return;

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'design', label: 'Product Design', color: 'var(--coral)' },
    { id: 'strategy', label: 'Strategy & Business', color: 'var(--warm-3)' },
    { id: 'research', label: 'Research & Behavioral Science', color: 'var(--sage)' }
  ];

  container.innerHTML = filters.map((f, index) => `
    <button class="filter-pill ${index === 0 ? 'active' : ''}" data-filter="${f.id}" type="button">
      ${f.color ? `<span class="dot-ind" style="background: ${f.color};"></span>` : ''}
      ${f.label}
    </button>
  `).join('');

  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

function renderExperience() {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = EXPERIENCE_DATA.map(e => `
    <article class="glass-card exp-card">
      <div class="exp-head">
        <div>
          <h3 class="exp-role">${e.role}</h3>
          <p class="exp-org">${e.org}</p>
        </div>
        <div>
          <p class="exp-date">${e.date}</p>
          <p class="exp-location">${e.location}</p>
        </div>
      </div>
      <p class="exp-summary">${e.summary}</p>
      <details class="data-toggle exp-details">
        <summary>Show details</summary>
        <ul class="exp-bullets">
          ${e.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </details>
    </article>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = SKILLS_DATA.map(s => `
    <div class="glass-card lift skill-card">
      <h3>${s.title}</h3>
      <ul class="skill-tags">
        ${s.tags.map(t => `<li class="skill-tag">${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container) return;

  container.innerHTML = EDUCATION_DATA.map(ed => `
    <div class="glass-card edu-card">
      <div class="exp-head">
        <div>
          <h3 class="exp-role">${ed.role}</h3>
          <p class="exp-org">${ed.org}</p>
        </div>
        <p class="exp-date">${ed.date}</p>
      </div>
      ${ed.note ? `<p class="edu-note">${ed.note}</p>` : ''}
    </div>
  `).join('');
}

function renderLikes() {
  const container = document.getElementById('likes-grid');
  if (!container) return;

  container.innerHTML = LIKES_DATA.map(item => `
    <div class="flip-card reveal">
      <div class="flip-card-inner">
        <div class="flip-card-front glass-card">
          <div class="flip-image-area">
            <img src="${item.img}" alt="${item.alt}" />
            <div class="flip-icon-badge">${item.badge}</div>
          </div>
          <div class="flip-front-content">
            <h3>${item.title}</h3>
            <p>${item.subtitle}</p>
          </div>
        </div>
        <div class="flip-card-back glass-card">
          <span class="back-accent-icon">${item.badge}</span>
          <h3>${item.whyTitle}</h3>
          <p>${item.whyDesc}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// CONTROLLER & INTERACTIVITY
// ==========================================

const pages = {
  work: document.getElementById('page-work'),
  about: document.getElementById('page-about'),
};

function showPage(name) {
  Object.entries(pages).forEach(([k, el]) => { if (el) el.hidden = (k !== name); });
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === name);
  });
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  observeReveal();
}

// Scroll reveal
let io;
function observeReveal() {
  if (io) io.disconnect();
  io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => {
    if (!el.closest('[hidden]')) io.observe(el);
  });
}

// Phrase chips dynamic panel interactivity
const PHRASES = {
  feel: {
    color: 'var(--coral)', icon: '💗', label: 'What people feel',
    body: "Emotion drives behavior long before logic does. I lean on interviews, ethnography, and behavioral research to understand the messy human side — what people trust, what frustrates them, what they'll actually do (not just what they say)."
  },
  systems: {
    color: 'var(--sage)', icon: '🧭', label: 'What systems allow',
    body: "Great design respects constraints — technical, organizational, cultural. I work closely with engineers, PMs, and stakeholders to design solutions that ship, scale, and hold up in the real world."
  },
  business: {
    color: '#5b6bd6', icon: '🧠', label: 'What business needs',
    body: "Design without strategy is decoration. I anchor every project in a business point of view — market signals, competitive positioning, and metrics that matter — so craft translates into outcomes."
  }
};

function setupPhraseChips() {
  const chips = document.querySelectorAll('.phrase-chip');
  const panel = document.getElementById('detail-panel');
  const iconEl = document.getElementById('detail-icon');
  const labelEl = document.getElementById('detail-label');
  const bodyEl = document.getElementById('detail-body');

  if (!panel) return;

  function activatePhrase(key) {
    const p = PHRASES[key]; if (!p) return;
    chips.forEach(c => {
      const active = c.dataset.phrase === key;
      c.dataset.active = active;
      c.style.setProperty('--phrase-color', PHRASES[c.dataset.phrase].color);
    });
    iconEl.textContent = p.icon;
    iconEl.style.background = `color-mix(in oklab, ${p.color} 18%, transparent)`;
    iconEl.style.color = p.color;
    labelEl.textContent = p.label;
    labelEl.style.color = p.color;
    bodyEl.textContent = p.body;
    panel.style.borderColor = `color-mix(in oklab, ${p.color} 40%, var(--border))`;
  }

  chips.forEach(chip => {
    chip.style.setProperty('--phrase-color', PHRASES[chip.dataset.phrase].color);
    ['mouseenter', 'focus', 'click'].forEach(ev =>
      chip.addEventListener(ev, () => activatePhrase(chip.dataset.phrase))
    );
  });
}

// Initialization Entrypoint
document.addEventListener('DOMContentLoaded', () => {
  renderProcess();
  renderFilters();
  renderProjects();
  renderExperience();
  renderSkills();
  renderEducation();
  renderLikes();
  setupPhraseChips();

  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(btn.dataset.nav);
    });
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get('page') === 'about') {
    showPage('about');
  } else {
    observeReveal();
  }
});

