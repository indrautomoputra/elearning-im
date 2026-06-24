:root {
  --pmi-red: #d71920;
  --ifrc-red: #ed1b2e;
  --dark: #1f2933;
  --muted: #5f6b7a;
  --light: #f7f7f8;
  --border: #e5e7eb;
  --white: #ffffff;
  --blue-dark: #17324d;
  --yellow-soft: #fff8e1;
  --red-soft: #fff5f5;
}

body {
  color: var(--dark);
  line-height: 1.6;
}

h1,
h2,
h3 {
  color: var(--blue-dark);
}

h1 {
  border-bottom: 4px solid var(--pmi-red);
  padding-bottom: 0.4rem;
}

h2 {
  margin-top: 2rem;
}

a {
  color: var(--pmi-red);
}

a:hover {
  color: #a80f16;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
  margin: 1.5rem 0;
}

.card {
  background: var(--white);
  border: 1px solid var(--border);
  border-top: 5px solid var(--pmi-red);
  border-radius: 14px;
  padding: 1.2rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.card h3 {
  margin-top: 0;
  color: var(--blue-dark);
}

.card p {
  color: var(--dark);
}

.card ul,
.card ol {
  padding-left: 1.2rem;
}

.topic-card {
  border-top-color: var(--pmi-red);
}

.rule-card {
  border-top-color: var(--blue-dark);
}

.tag {
  display: inline-block;
  background: var(--pmi-red);
  color: var(--white);
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
}

.button {
  display: inline-block;
  background: var(--pmi-red);
  color: var(--white) !important;
  text-decoration: none;
  padding: 0.55rem 0.9rem;
  border-radius: 8px;
  font-weight: 700;
  margin-top: 0.5rem;
}

.button:hover {
  background: #a80f16;
  text-decoration: none;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
  margin: 1.5rem 0;
}

.visual-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
}

.visual-card img {
  width: 100%;
  height: auto;
  display: block;
  background: var(--light);
}

.visual-card h3 {
  margin: 1rem 1rem 0.3rem;
}

.visual-card p {
  margin: 0 1rem 1rem;
  color: var(--muted);
}

.start-box {
  background: var(--red-soft);
  border-left: 6px solid var(--pmi-red);
  padding: 1.2rem;
  border-radius: 12px;
  margin: 1.5rem 0;
}

.note-box {
  background: var(--yellow-soft);
  border-left: 6px solid #f59e0b;
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
}

.warning-box {
  background: var(--red-soft);
  border-left: 6px solid var(--pmi-red);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
}

blockquote {
  border-left: 5px solid var(--pmi-red);
  background: var(--red-soft);
  padding: 0.9rem 1rem;
  color: var(--dark);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

table th,
table td {
  border: 1px solid var(--border);
  padding: 0.6rem;
  vertical-align: top;
}

table th {
  background: var(--blue-dark);
  color: var(--white);
}

code {
  background: #f3f4f6;
  padding: 0.15rem 0.3rem;
  border-radius: 4px;
}

pre {
  background: #111827;
  color: #f9fafb;
  padding: 1rem;
  border-radius: 10px;
  overflow-x: auto;
}

.checklist {
  background: var(--light);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem;
}

.footer-nav {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  color: var(--muted);
}

@media (max-width: 640px) {
  .card-grid,
  .visual-grid {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 1rem;
  }

  table {
    font-size: 0.9rem;
  }
}