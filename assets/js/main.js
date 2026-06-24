// === Konfigurasi base path ===
// Menentukan BASE_PATH berdasarkan lokasi file HTML (untuk relative path ke assets)
const scriptSrc = document.querySelector('script[src$="main.js"]')?.src || '';
const baseUrl = scriptSrc.replace(/\/assets\/js\/main\.js.*$/, '');
const relativePath = location.href.replace(/[?#].*/, '').substring(baseUrl.length).replace(/^\//, '');
const BASE_PATH = relativePath.includes('/') ? '../' : './';

// === Inisialisasi marked.js ===
// Konfigurasi Markdown renderer: GFM, tanpa line break
const markedLib = window.marked;
if (markedLib) {
  markedLib.use({
    gfm: true,
    breaks: false,
  });
}

// === Sidebar Navigasi ===
// Membangun menu sidebar dari daftar halaman
function initSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  const currentFile = location.pathname.split('/').pop();
  const isActive = (href) => currentFile === href.split('/').pop() ? 'active' : '';
  nav.innerHTML = `
    <li class="${isActive('index.html')}"><a href="${BASE_PATH}index.html">Beranda</a></li>
    <li class="${isActive('01-memahami-im.html')}"><a href="${BASE_PATH}topics/01-memahami-im.html">1. Memahami IM</a></li>
    <li class="${isActive('02-setup-orientasi-sistem.html')}"><a href="${BASE_PATH}topics/02-setup-orientasi-sistem.html">2. Setup &amp; Orientasi Sistem</a></li>
    <li class="${isActive('03-tools-operasional.html')}"><a href="${BASE_PATH}topics/03-tools-operasional.html">3. Tools Operasional</a></li>
    <li class="sub ${isActive('tools-kobotoolbox.html')}"><a href="${BASE_PATH}topics/tools-kobotoolbox.html">KoboToolbox</a></li>
    <li class="sub ${isActive('tools-excel.html')}"><a href="${BASE_PATH}topics/tools-excel.html">Excel</a></li>
    <li class="sub ${isActive('tools-qgis.html')}"><a href="${BASE_PATH}topics/tools-qgis.html">QGIS</a></li>
    <li class="sub ${isActive('tools-powerbi.html')}"><a href="${BASE_PATH}topics/tools-powerbi.html">Power BI</a></li>
    <li class="${isActive('04-analisis-kebutuhan.html')}"><a href="${BASE_PATH}topics/04-analisis-kebutuhan.html">4. Analisis Kebutuhan</a></li>
    <li class="${isActive('05-pin-prioritas.html')}"><a href="${BASE_PATH}topics/05-pin-prioritas.html">5. PIN &amp; Prioritas</a></li>
    <li class="${isActive('06-produk-im.html')}"><a href="${BASE_PATH}topics/06-produk-im.html">6. Produk IM</a></li>
    <li class="${isActive('07-paket-data-renops.html')}"><a href="${BASE_PATH}topics/07-paket-data-renops.html">7. Paket Data &amp; RenOps</a></li>
    <li class="${isActive('08-relawan-lokal.html')}"><a href="${BASE_PATH}topics/08-relawan-lokal.html">8. Peran Relawan Lokal</a></li>
    <li class="sep"><span>Panduan</span></li>
    <li class="${isActive('ojt-di-posko.html')}"><a href="${BASE_PATH}topics/ojt-di-posko.html">OJT di Posko</a></li>
  `;
}

// === Resolver path Markdown ===
// Mencari file .md berdasarkan slug halaman
const SLUG_PATHS = {};

function resolveMdPath(slug) {
  if (SLUG_PATHS[slug]) return BASE_PATH + SLUG_PATHS[slug];
  if (slug.startsWith('content/')) return BASE_PATH + slug + '.md';
  if (slug.includes('/')) return BASE_PATH + slug;
  if (slug === 'index') return BASE_PATH + 'index.md';
  return BASE_PATH + 'topics/' + slug + '.md';
}

// === Render Halaman ===
// Fungsi utama: fetch markdown -> render marked.js -> TOC, breadcrumb, topic nav
async function renderPage() {
  const body = document.getElementById('content-body');
  if (!body) return;

  const currentPath = location.pathname;
  let slug = '';

  if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
    slug = 'index';
  } else {
    const match = currentPath.match(/\/([^/]+)\.html/);
    if (match) slug = match[1]; // slug diambil dari nama file HTML
  }

  if (!slug) {
    body.innerHTML = '<p>Halaman tidak ditemukan. <a href="' + BASE_PATH + 'index.html">Kembali ke Beranda</a>.</p>';
    return;
  }

  // fallback ke konten inline di <script type="text/markdown">
  const fallbackEl = document.querySelector('script[type="text/markdown"][data-slug="' + slug + '"]');
  let md = '';

  try {
    const mdPath = resolveMdPath(slug);
    const res = await fetch(mdPath);
    if (res.ok) {
      md = await res.text();
    } else {
      throw new Error('fetch failed');
    }
  } catch {
    if (fallbackEl) {
      md = fallbackEl.textContent || '';
    }
  }

  if (!md && fallbackEl) {
    md = fallbackEl.textContent || '';
  }

  if (!md) {
    body.innerHTML = '<p>Konten tidak tersedia. <a href="' + BASE_PATH + 'index.html">Kembali ke Beranda</a>.</p>';
    return;
  }

  const rendered = markedLib.parse(md).replace(/\u2014/g, '');
  body.innerHTML = rendered;
  body.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.removeAttribute('disabled'));
  renderToc();
  renderBreadcrumb(slug);
  highlightCurrentNav();
  renderTopicNav(slug);
}

// === Daftar Isi (TOC) ===
// Membuat collapsible daftar isi dari heading h2/h3
function renderToc() {
  const body = document.getElementById('content-body');
  if (!body) return;

  const headings = body.querySelectorAll('h2, h3');
  if (headings.length < 3) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'toc';

  let html = '<details><summary><strong>Daftar Isi</strong></summary><ul>';
  headings.forEach((h) => {
    if (!h.id) {
      h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    const cls = h.tagName === 'H3' ? ' class="toc-sub"' : '';
    html += `<li${cls}><a href="#${h.id}">${h.textContent}</a></li>`;
  });
  html += '</ul></details>';

  wrapper.innerHTML = html;
  body.insertBefore(wrapper, body.firstChild);
}

// === Breadcrumb ===
// Menampilkan navigasi hirarki: Beranda > Nama Halaman
function renderBreadcrumb(slug) {
  const el = document.getElementById('breadcrumb');
  if (!el) return;
  const labels = {
    index: 'Beranda',
    '01-memahami-im': 'Memahami IM',
    '02-setup-orientasi-sistem': 'Setup & Orientasi Sistem',
    '03-tools-operasional': 'Tools Operasional',
    '04-analisis-kebutuhan': 'Analisis Kebutuhan',
    '05-pin-prioritas': 'PIN & Prioritas',
    '06-produk-im': 'Produk IM',
    '07-paket-data-renops': 'Paket Data & RenOps',
    'ojt-di-posko': 'OJT di Posko',
  };
  const crumbs = [{ href: BASE_PATH + 'index.html', label: 'Beranda' }];
  if (slug !== 'index' && labels[slug]) {
    crumbs.push({ label: labels[slug] });
  }
  el.innerHTML = crumbs
    .map((c, i) =>
      i < crumbs.length - 1
        ? `<a href="${c.href}">${c.label}</a> <span class="breadcrumb-sep">/</span> `
        : `<span>${c.label}</span>`
    )
    .join('');
}

// === Highlight Nav Aktif ===
// Menandai halaman aktif di sidebar
function highlightCurrentNav() {
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('#sidebar-nav a').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href')?.includes(current));
  });
}

// === Navigasi Previous/Next ===
// Tombol navigasi antar topik
function renderTopicNav(slug) {
  const nav = document.getElementById('topic-nav');
  if (!nav) return;
  const topics = [
    '01-memahami-im', '02-setup-orientasi-sistem', '03-tools-operasional',
    '04-analisis-kebutuhan', '05-pin-prioritas', '06-produk-im',
    '07-paket-data-renops', '08-relawan-lokal',
  ];
  const idx = topics.indexOf(slug);
  if (idx < 0) { nav.innerHTML = ''; nav.style.display = 'none'; return; }
  const labels = {
    '01-memahami-im': 'Memahami IM', '02-setup-orientasi-sistem': 'Setup & Orientasi Sistem',
    '03-tools-operasional': 'Tools Operasional', '04-analisis-kebutuhan': 'Analisis Kebutuhan',
    '05-pin-prioritas': 'PIN & Prioritas', '06-produk-im': 'Produk IM',
    '07-paket-data-renops': 'Paket Data & RenOps', '08-relawan-lokal': 'Peran Relawan Lokal',
  };
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx < topics.length - 1 ? topics[idx + 1] : null;
  const p = prev ? `<a href="${BASE_PATH}topics/${prev}.html" class="nav-prev">&larr; ${labels[prev]}</a>` : '';
  const n = next ? `<a href="${BASE_PATH}topics/${next}.html" class="nav-next">${labels[next]} &rarr;</a>` : '';
  nav.innerHTML = p + n;
  nav.style.display = 'flex';
}

// === Pencarian Global (client-side) ===
// Search seluruh halaman dengan debounce input, dropdown hasil
function initSearch() {
  const input = document.getElementById('global-search');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  const pages = [
    { label: 'Beranda', href: BASE_PATH + 'index.html' },
    { label: 'Memahami IM', href: BASE_PATH + 'topics/01-memahami-im.html' },
    { label: 'Setup & Orientasi Sistem', href: BASE_PATH + 'topics/02-setup-orientasi-sistem.html' },
    { label: 'Tools Operasional', href: BASE_PATH + 'topics/03-tools-operasional.html' },
    { label: 'Analisis Kebutuhan', href: BASE_PATH + 'topics/04-analisis-kebutuhan.html' },
    { label: 'PIN & Prioritas', href: BASE_PATH + 'topics/05-pin-prioritas.html' },
    { label: 'Produk IM', href: BASE_PATH + 'topics/06-produk-im.html' },
    { label: 'Paket Data & RenOps', href: BASE_PATH + 'topics/07-paket-data-renops.html' },
    { label: 'Peran Relawan Lokal', href: BASE_PATH + 'topics/08-relawan-lokal.html' },
    { label: 'KoboToolbox', href: BASE_PATH + 'topics/tools-kobotoolbox.html' },
    { label: 'Excel', href: BASE_PATH + 'topics/tools-excel.html' },
    { label: 'Power BI', href: BASE_PATH + 'topics/tools-powerbi.html' },
    { label: 'QGIS', href: BASE_PATH + 'topics/tools-qgis.html' },

    { label: 'OJT di Posko', href: BASE_PATH + 'topics/ojt-di-posko.html' },
  ];

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        results.innerHTML = '';
        results.classList.remove('visible');
        return;
      }

      const hits = pages.filter(p => p.label.toLowerCase().includes(q));
      if (hits.length === 0) {
        results.innerHTML = '<div class="search-empty">Tidak ditemukan</div>';
      } else {
        results.innerHTML = hits.map(h =>
          `<a href="${h.href}" class="search-item"><strong>${h.label}</strong></a>`
        ).join('');
      }
      results.classList.add('visible');
    }, 150); // debounce 150ms agar tidak terlalu sering query
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const first = results.querySelector('.search-item');
      if (first) { first.click(); e.preventDefault(); }
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const items = [...results.querySelectorAll('.search-item')];
      const idx = items.indexOf(document.activeElement?.closest('.search-item'));
      const next = e.key === 'ArrowDown' ? idx + 1 : idx - 1;
      if (items[next]) items[next].focus();
      e.preventDefault();
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('visible');
    }
  });
}

// === Toggle Tema (dark/light) ===
// Simpan preferensi ke localStorage
function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const stored = localStorage.getItem('theme');
  // simpan preferensi tema
  if (stored === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

  btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
}

// === Mobile Nav Toggle ===
// Slide sidebar + backdrop overlay di layar kecil
function initNavToggle() {
  const btn = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !btn.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// === Inisialisasi ===
// DOMContentLoaded: tema, sidebar, search, render
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initNavToggle();
  renderPage();
  initSearch();
});
