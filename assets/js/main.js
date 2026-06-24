const BASE_PATH = (location.pathname.includes('/topics/') || location.pathname.includes('/checklists/') || location.pathname.includes('/templates/')) ? '../' : './';

const markedLib = window.marked;
if (markedLib) {
  markedLib.use({
    gfm: true,
    breaks: false,
  });
}

function initSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  const items = [
    { label: 'Beranda', href: BASE_PATH + 'index.html', icon: '#' },
    { label: '1. Memahami IM', href: BASE_PATH + 'topics/01-memahami-im.html', icon: '1' },
    { label: '2. Setup & Orientasi Sistem', href: BASE_PATH + 'topics/02-setup-orientasi-sistem.html', icon: '2' },
    { label: '3. Tools Operasional', href: BASE_PATH + 'topics/03-tools-operasional.html', icon: '3' },
    { label: '4. Analisis Kebutuhan', href: BASE_PATH + 'topics/04-analisis-kebutuhan.html', icon: '4' },
    { label: '5. PIN & Prioritas', href: BASE_PATH + 'topics/05-pin-prioritas.html', icon: '5' },
    { label: '6. Produk IM', href: BASE_PATH + 'topics/06-produk-im.html', icon: '6' },
    { label: '7. Paket Data & RenOps', href: BASE_PATH + 'topics/07-paket-data-renops.html', icon: '7' },
  ];
  nav.innerHTML = items
    .map(
      (item) =>
        `<li><a href="${item.href}" ${location.pathname.includes(item.href.split('/').pop()) ? 'class="active"' : ''}><span class="nav-icon">${item.icon}</span>${item.label}</a></li>`
    )
    .join('');
}

const SLUG_PATHS = {
  'checklists-index': 'checklists/checklists-index.md',
  'templates-index': 'templates/templates-index.md',
};

function resolveMdPath(slug) {
  if (SLUG_PATHS[slug]) return BASE_PATH + SLUG_PATHS[slug];
  if (slug.startsWith('content/')) return BASE_PATH + slug + '.md';
  if (slug.includes('/')) return BASE_PATH + slug;
  if (slug === 'index') return BASE_PATH + 'index.md';
  return BASE_PATH + 'topics/' + slug + '.md';
}

let allMarkdownCache = null;

async function loadAllMarkdown() {
  if (allMarkdownCache) return allMarkdownCache;
  const slugs = [
    'index',
    '01-memahami-im',
    '02-setup-orientasi-sistem',
    '03-tools-operasional',
    '04-analisis-kebutuhan',
    '05-pin-prioritas',
    '06-produk-im',
    '07-paket-data-renops',
    'tools-kobotoolbox',
    'tools-excel',
    'tools-powerbi',
    'tools-qgis',
    'checklists-index',
    'templates-index',
    'content/setup-orientasi-sistem',
    'content/memahami-im',
    'content/kerangka-analisis-kajian',
    'content/menghitung-pin-prioritas',
    'content/model-pelaporan',
    'content/paket-data-renops',
    'content/panduan-tools-operasional',
  ];
  const cache = {};
  const results = await Promise.allSettled(
    slugs.map(async (slug) => {
      const path = resolveMdPath(slug);
      const res = await fetch(path);
      if (!res.ok) throw new Error(`fetch ${path} failed: ${res.status}`);
      cache[slug] = await res.text();
    })
  );
  for (const r of results) {
    if (r.status === 'rejected') console.warn(r.reason);
  }
  allMarkdownCache = cache;
  return cache;
}

async function renderPage() {
  const body = document.getElementById('content-body');
  if (!body) return;

  const currentPath = location.pathname;
  let slug = '';

  if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
    slug = 'index';
  } else {
    const match = currentPath.match(/\/([^/]+)\.html/);
    if (match) slug = match[1];
  }

  if (!slug) {
    body.innerHTML = '<p>Halaman tidak ditemukan. <a href="' + BASE_PATH + 'index.html">Kembali ke Beranda</a>.</p>';
    return;
  }

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
}

function renderToc() {
  const body = document.getElementById('content-body');
  if (!body) return;

  const headings = body.querySelectorAll('h2, h3');
  if (headings.length < 3) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'toc';

  let html = '<details open><summary><strong>Daftar Isi</strong></summary><ul>';
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

function highlightCurrentNav() {
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('#sidebar-nav a').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href')?.includes(current));
  });
}

function initSearch() {
  const input = document.getElementById('global-search');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      const q = input.value.trim().toLowerCase();
      if (!q || q.length < 2) {
        results.innerHTML = '';
        results.classList.remove('visible');
        return;
      }

      try {
        const cache = await loadAllMarkdown();
        const hits = [];
        for (const [slug, text] of Object.entries(cache)) {
          if (!text) continue;
          const lines = text.split('\n');
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].toLowerCase().includes(q)) {
              const label = slug.replace(/^(topics\/|content\/)/, '').replace(/[_-]/g, ' ');
              const href = SLUG_PATHS[slug] ? BASE_PATH + SLUG_PATHS[slug].replace('.md', '.html') : slug === 'index' ? BASE_PATH + 'index.html' : slug.startsWith('content/') ? BASE_PATH + slug.replace('content/', '') + '.html' : BASE_PATH + 'topics/' + slug + '.html';
              hits.push({ label, href, line: lines[i].trim(), lineNum: i + 1 });
              if (hits.length >= 10) break;
            }
          }
          if (hits.length >= 10) break;
        }

        if (hits.length === 0) {
          results.innerHTML = '<div class="search-empty">Tidak ditemukan</div>';
        } else {
          results.innerHTML = hits
            .map(
              (h) =>
                `<a href="${h.href}" class="search-item"><strong>${h.label}</strong> <small>baris ${h.lineNum}</small><br><span>${h.line.slice(0, 100)}</span></a>`
            )
            .join('');
        }
        results.classList.add('visible');
      } catch (e) {
        console.warn('Search error:', e);
      }
    }, 300);
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('visible');
    }
  });
}

function initTheme() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  const stored = localStorage.getItem('theme');
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

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initNavToggle();
  renderPage();
  initSearch();
});
