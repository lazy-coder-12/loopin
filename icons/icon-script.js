/* =========================================================
   Loopin Iconography — icon library + interactions
   24x24 grid, 1.5px stroke, round caps/joins, currentColor
   ========================================================= */

const ICON_INNERS = {
  // ---- System / UI ----
  'arrow-right': '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  'arrow-left': '<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>',
  'chevron-down': '<path d="M6 9l6 6 6-6"/>',
  'chevron-right': '<path d="M9 18l6-6-6-6"/>',
  'close': '<path d="M18 6L6 18"/><path d="M6 6l12 12"/>',
  'check': '<path d="M20 6L9 17l-5-5"/>',
  'plus': '<path d="M12 5v14"/><path d="M5 12h14"/>',
  'search': '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
  'filter': '<path d="M4 5h16"/><path d="M7 12h10"/><path d="M10 19h4"/>',
  'settings': '<path d="M4 6h10"/><circle cx="17" cy="6" r="2"/><path d="M4 12h4"/><circle cx="11" cy="12" r="2"/><path d="M4 18h10"/><circle cx="17" cy="18" r="2"/>',
  'more-horizontal': '<circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/>',
  'calendar': '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/>',
  'bell': '<path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>',
  'info': '<circle cx="12" cy="12" r="9"/><path d="M12 16v-5"/><path d="M12 8h.01"/>',
  'alert-triangle': '<path d="M12 3l10 18H2L12 3z"/><path d="M12 10v4"/><path d="M12 17h.01"/>',
  'edit-2': '<path d="M17 3a2.83 2.83 0 014 4L7 21l-4 1 1-4L17 3z"/>',
  'trash-2': '<path d="M3 6h18"/><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/>',
  'lock': '<rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>',
  'refresh-cw': '<path d="M21 12a9 9 0 01-15.36 6.36L3 15"/><path d="M3 12a9 9 0 0115.36-6.36L21 9"/><path d="M21 3v6h-6"/><path d="M3 21v-6h6"/>',

  // ---- Bottom navigation ----
  'home': '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  'list': '<path d="M9 6h12"/><path d="M9 12h12"/><path d="M9 18h12"/><circle cx="4" cy="6" r="1.2"/><circle cx="4" cy="12" r="1.2"/><circle cx="4" cy="18" r="1.2"/>',
  'plus-circle': '<circle cx="12" cy="12" r="9"/><path d="M12 8v8"/><path d="M8 12h8"/>',
  'pie-chart': '<path d="M12 3a9 9 0 109 9h-9V3z"/><path d="M20 9a7 7 0 00-7-6v6h7z"/>',
  'user': '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',

  // ---- Subscription status ----
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 5-5"/>',
  'pause-circle': '<circle cx="12" cy="12" r="9"/><path d="M10 9v6"/><path d="M14 9v6"/>',
  'x-circle': '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5l5 5"/><path d="M14.5 9.5l-5 5"/>',
  'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  'trending-up': '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',

  // ---- Category glyphs ----
  'film': '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 8h4"/><path d="M3 16h4"/><path d="M17 8h4"/><path d="M17 16h4"/>',
  'music': '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  'cloud': '<path d="M17.5 19a4.5 4.5 0 000-9 6 6 0 00-11.4 1.8A4 4 0 006 19h11.5z"/>',
  'activity': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'newspaper': '<rect x="3" y="5" width="14" height="16" rx="1"/><path d="M17 8h4v11a2 2 0 01-2 2h-2"/><path d="M7 9h6"/><path d="M7 12h6"/><path d="M7 15h4"/>',
  'gamepad-2': '<rect x="2" y="7" width="20" height="10" rx="4"/><path d="M7 10v4"/><path d="M5 12h4"/><circle cx="16" cy="10.5" r="1"/><circle cx="18.5" cy="13" r="1"/>',
  'briefcase': '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/>',
  'credit-card': '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
  'utensils': '<path d="M6 3v7a2 2 0 002 2v9"/><path d="M6 3v7"/><path d="M9 3v7"/><path d="M18 3c-1.5 2-2 4-2 6a2 2 0 002 2v9"/>',
  'book-open': '<path d="M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2z"/>',

  // ---- Trust & privacy ----
  'shield-check': '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/>',
  'smartphone': '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  'wifi-off': '<path d="M2 8.82a15 15 0 0120-.1"/><path d="M5 12.5a10 10 0 0114 .1"/><path d="M8.5 16a5 5 0 017 0"/><path d="M12 20h.01"/><path d="M2 2l20 20"/>',
  'database': '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
};

const CATEGORIES = [
  {
    id: 'system',
    title: 'System Icons',
    tag: 'system_ui',
    description: "Core glyphs used everywhere in the interface \u2014 navigation, form controls, and everyday actions.",
    icons: ['arrow-right','arrow-left','chevron-down','chevron-right','close','check','plus','search','filter','settings','more-horizontal','calendar','bell','info','alert-triangle','edit-2','trash-2','lock','refresh-cw'],
  },
  {
    id: 'bottom-nav',
    title: 'Bottom Navigation',
    tag: 'bottom_nav',
    description: 'The five destinations in the tab bar, so people can move through the app without thinking about it.',
    icons: ['home','list','plus-circle','pie-chart','user'],
  },
  {
    id: 'status',
    title: 'Subscription Status',
    tag: 'sub_status',
    description: 'Lifecycle states for a tracked subscription \u2014 shown as a small mark on each card in the list.',
    icons: ['check-circle','pause-circle','x-circle','clock','trending-up'],
  },
  {
    id: 'category',
    title: 'Category Glyphs',
    tag: 'category',
    description: 'One glyph per spending category, used when a merchant can\u2019t be resolved to a brand mark.',
    icons: ['film','music','cloud','activity','newspaper','gamepad-2','briefcase','credit-card','utensils','book-open'],
  },
  {
    id: 'trust',
    title: 'Trust & Privacy',
    tag: 'trust_privacy',
    description: 'Reinforces the on-device, local-first promise at the exact moments people are asked to trust it.',
    icons: ['shield-check','smartphone','wifi-off','database'],
  },
];

const SVG_HEAD = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">';
const SVG_TAIL = '</svg>';

function buildSvg(name) {
  return SVG_HEAD + (ICON_INNERS[name] || '') + SVG_TAIL;
}

function copyIconMarkup() {
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15V5a2 2 0 012-2h10"></path></svg>';
}

function checkIconMarkup() {
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>';
}

function renderSections() {
  const root = document.getElementById('icon-sections');
  root.innerHTML = '';

  CATEGORIES.forEach((section) => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'icon-section';
    sectionEl.dataset.sectionId = section.id;

    const banner = document.createElement('div');
    banner.className = 'section-banner';
    banner.innerHTML = `
      <span class="section-banner__title">${section.title}</span>
      <span class="section-banner__desc">${section.description}</span>
    `;
    sectionEl.appendChild(banner);

    const grid = document.createElement('div');
    grid.className = 'icon-grid';

    section.icons.forEach((iconName) => {
      grid.appendChild(buildCard(iconName, section.tag));
    });

    sectionEl.appendChild(grid);
    root.appendChild(sectionEl);
  });

  const emptyState = document.createElement('div');
  emptyState.className = 'empty-state is-hidden';
  emptyState.id = 'empty-state';
  emptyState.textContent = 'No icons match that search.';
  root.appendChild(emptyState);

  updateCount();
}

function buildCard(iconName, tag) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'icon-card';
  card.dataset.name = iconName;
  card.setAttribute('aria-label', `Copy SVG for ${iconName}`);

  card.innerHTML = `
    <div class="card-top">
      <span class="card-label">Loopin Icon-Set</span>
      <span class="card-version">#1</span>
    </div>
    <div class="icon-preview">${buildSvg(iconName)}</div>
    <span class="icon-badge">
      <span class="badge-copy-icon">${copyIconMarkup()}</span>
      <span class="badge-text">${iconName}</span>
    </span>
    <div class="card-tag">${tag}</div>
  `;

  card.addEventListener('click', () => handleCopy(card, iconName));
  return card;
}

function handleCopy(card, iconName) {
  const markup = buildSvg(iconName);
  const badge = card.querySelector('.icon-badge');
  const iconSlot = badge.querySelector('.badge-copy-icon');
  const textSlot = badge.querySelector('.badge-text');

  const writeToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(markup);
    }
    const tmp = document.createElement('textarea');
    tmp.value = markup;
    tmp.style.position = 'fixed';
    tmp.style.opacity = '0';
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
    return Promise.resolve();
  };

  writeToClipboard().then(() => {
    showToast(`Copied <${iconName}> SVG to clipboard`);

    badge.classList.add('is-copied');
    const prevIcon = iconSlot.innerHTML;
    const prevText = textSlot.textContent;
    iconSlot.innerHTML = checkIconMarkup();
    textSlot.textContent = 'Copied';

    setTimeout(() => {
      badge.classList.remove('is-copied');
      iconSlot.innerHTML = prevIcon;
      textSlot.textContent = prevText;
    }, 1400);
  });
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-message');
  msg.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1800);
}

function updateCount(visible) {
  const countEl = document.getElementById('icon-count');
  const total = Object.keys(ICON_INNERS).length;
  if (visible === undefined || visible === total) {
    countEl.textContent = `${total} icons`;
  } else {
    countEl.textContent = `${visible} of ${total} icons`;
  }
}

function initSearch() {
  const input = document.getElementById('icon-search');
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.icon-card');
    const sections = document.querySelectorAll('.icon-section');
    let visibleCount = 0;

    cards.forEach((card) => {
      const matches = card.dataset.name.includes(query);
      card.classList.toggle('is-hidden', !matches);
      if (matches) visibleCount++;
    });

    sections.forEach((section) => {
      const anyVisible = section.querySelectorAll('.icon-card:not(.is-hidden)').length > 0;
      section.classList.toggle('is-hidden', !anyVisible);
    });

    document.getElementById('empty-state').classList.toggle('is-hidden', visibleCount !== 0 || query === '');
    updateCount(visibleCount);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderSections();
  initSearch();
});