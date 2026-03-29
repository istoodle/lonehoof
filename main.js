/* ============================================================
 *  LONE HOOF — main.js v8
 * ============================================================ */

// ── CONFIG — change email here and it updates everywhere ──
// Also update CONTACT_EMAIL in contact.html <script> block
// (search for CONTACT_EMAIL in both files if you ever change it)
const CONTACT_EMAIL = 'lone_hoof@outlook.com';

// ── 1. HEADER HEIGHT ──────────────────────────────────────
function setHeaderOffset() {
  const header    = document.querySelector('header');
  const mainEl    = document.querySelector('main');
  const mobileNav = document.getElementById('mobileNav');
  if (!header) return;
  const h = Math.ceil(header.getBoundingClientRect().height);
  if (mainEl)    mainEl.style.paddingTop = h + 'px';
  if (mobileNav) mobileNav.style.top     = h + 'px';
  document.documentElement.style.setProperty('--header-h', h + 'px');
}
setHeaderOffset();
window.addEventListener('resize', setHeaderOffset);


// ── 2. BUILD THE GRID ─────────────────────────────────────
const grid = document.getElementById('artGrid');

if (grid && typeof ARTWORK !== 'undefined') {
  ARTWORK.forEach((piece, idx) => {
    const item = document.createElement('div');
    item.className = 'art-item' + (piece.price ? '' : ' gallery-only');
    item.dataset.index = idx;

    const shopRow = piece.price
      ? `<div class="art-shop-row">
           <span class="art-price">${piece.price}</span>
           <a href="contact.html?item=${slugify(piece.title)}" class="enquire-btn">enquire to order</a>
         </div>`
      : '';

    item.innerHTML = `
      <div class="art-img-wrap">
        <img src="images/${piece.img}" alt="${escHtml(piece.title)}" loading="lazy" />
      </div>
      <div class="art-info">
        <p class="art-title">${escHtml(piece.title)}</p>
        ${shopRow}
      </div>`;

    grid.appendChild(item);
  });

  // Open detail on click (but not on enquire-btn click)
  grid.addEventListener('click', e => {
    if (e.target.closest('.enquire-btn')) return;
    const item = e.target.closest('.art-item');
    if (item) openDetail(parseInt(item.dataset.index, 10), true);
  });
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}


// ── 3. DETAIL OVERLAY ─────────────────────────────────────
const overlay = document.createElement('div');
overlay.className = 'detail-overlay';
overlay.id = 'detailOverlay';
overlay.innerHTML = `
  <button class="detail-close" id="detailClose" aria-label="Close">&#x2715;</button>
  <button class="detail-prev"  id="detailPrev"  aria-label="Previous">&#8249;</button>
  <button class="detail-next"  id="detailNext"  aria-label="Next">&#8250;</button>
  <div class="detail-inner">
    <div class="detail-img-panel" id="detailImgPanel">
      <img src="" alt="" id="detailImg" />
      <div class="detail-img2-wrap" id="detailImg2Wrap" style="display:none">
        <img src="" alt="" id="detailImg2" />
      </div>
      <div class="detail-zoom-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>
        </svg>
        click to zoom
      </div>
    </div>
    <div class="detail-info-panel">
      <div class="detail-title"   id="detailTitle"></div>
      <div class="detail-meta"    id="detailMeta"></div>
      <div class="detail-price"   id="detailPrice"></div>
      <a   class="detail-enquire" id="detailEnquire" href="#">enquire to order</a>
      <a   class="detail-print-link" id="detailPrintLink" href="how-to-buy.html">about the prints &amp; how to order &#8594;</a>
      <div class="detail-notes"   id="detailNotes"></div>
    </div>
  </div>`;
document.body.appendChild(overlay);

const detailImg       = document.getElementById('detailImg');
const detailImg2Wrap  = document.getElementById('detailImg2Wrap');
const detailImg2      = document.getElementById('detailImg2');
const detailTitle     = document.getElementById('detailTitle');
const detailMeta      = document.getElementById('detailMeta');
const detailPrice     = document.getElementById('detailPrice');
const detailEnquire   = document.getElementById('detailEnquire');
const detailPrintLink = document.getElementById('detailPrintLink');
const detailNotes     = document.getElementById('detailNotes');
const detailClose     = document.getElementById('detailClose');
const detailPrev      = document.getElementById('detailPrev');
const detailNext      = document.getElementById('detailNext');

let currentIdx = -1;

function openDetail(idx, pushState) {
  if (typeof ARTWORK === 'undefined' || idx < 0 || idx >= ARTWORK.length) return;
  currentIdx = idx;
  const d = ARTWORK[idx];

  // Primary image
  detailImg.src = 'images/' + d.img;
  detailImg.alt = d.title;
  detailImg.classList.remove('zoomed');

  // Secondary image
  if (d.img2) {
    detailImg2.src = 'images/' + d.img2;
    detailImg2.alt = d.title + ' (detail)';
    detailImg2Wrap.style.display = '';
  } else {
    detailImg2Wrap.style.display = 'none';
  }

  detailTitle.textContent = d.title;

  // Meta rows
  let meta = '';
  if (d.size)   meta += `<div class="detail-meta-row">size &nbsp;<span>${escHtml(d.size)}</span></div>`;
  if (d.medium) meta += `<div class="detail-meta-row">medium &nbsp;<span>${escHtml(d.medium)}</span></div>`;
  if (d.paper)  meta += `<div class="detail-meta-row">paper &nbsp;<span>${escHtml(d.paper)}</span></div>`;
  detailMeta.innerHTML = meta;

  // Price / buy / print link
  if (d.price) {
    detailPrice.textContent        = d.price;
    detailPrice.style.display      = '';
    detailEnquire.href             = 'contact.html?item=' + slugify(d.title);
    detailEnquire.style.display    = '';
    detailPrintLink.style.display  = '';
  } else {
    detailPrice.style.display      = 'none';
    detailEnquire.style.display    = 'none';
    detailPrintLink.style.display  = 'none';
  }

  // Notes
  if (d.notes) {
    detailNotes.textContent   = d.notes;
    detailNotes.style.display = '';
  } else {
    detailNotes.style.display = 'none';
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  detailPrev.style.visibility = idx > 0                  ? 'visible' : 'hidden';
  detailNext.style.visibility = idx < ARTWORK.length - 1 ? 'visible' : 'hidden';

  // Push a hash so the browser back button works
  if (pushState) {
    history.pushState({ artIdx: idx }, '', '#art-' + idx);
  }
}

function closeDetail() {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  currentIdx = -1;
  // Always snap straight back to the grid, clearing any art-N hash entries
  // replaceState removes the hash without adding a history entry
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

// Browser back/forward button
window.addEventListener('popstate', e => {
  if (e.state && typeof e.state.artIdx === 'number') {
    // Forward into a specific image
    openDetail(e.state.artIdx, false);
  } else {
    // Back to grid — close overlay cleanly (no further history manipulation)
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentIdx = -1;
  }
});

// If page loads with a hash (e.g. browser forward after back)
window.addEventListener('DOMContentLoaded', () => {
  const m = window.location.hash.match(/^#art-(\d+)$/);
  if (m && typeof ARTWORK !== 'undefined') {
    const idx = parseInt(m[1], 10);
    if (idx < ARTWORK.length) openDetail(idx, false);
  }
});

// Zoom toggle on primary image
detailImg.addEventListener('click', () => detailImg.classList.toggle('zoomed'));

// Close button — always go straight back to grid, skip image history
detailClose.addEventListener('click', () => {
  closeDetail();
});

// Prev / next navigate within the overlay, each push a new history entry
detailPrev.addEventListener('click', () => {
  if (currentIdx > 0) openDetail(currentIdx - 1, true);
});
detailNext.addEventListener('click', () => {
  if (currentIdx < ARTWORK.length - 1) openDetail(currentIdx + 1, true);
});

// Click outside panels — same as close button: straight back to grid
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeDetail();
});

// Keyboard
document.addEventListener('keydown', e => {
  if (!overlay.classList.contains('active')) return;
  if (e.key === 'Escape')     closeDetail();
  if (e.key === 'ArrowLeft')  detailPrev.click();
  if (e.key === 'ArrowRight') detailNext.click();
});


// ── 4. MOBILE NAV ─────────────────────────────────────────
const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
  });
  mobileNav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      menuToggle.classList.remove('open');
    })
  );
}


// ── 5. CONTACT FORM ───────────────────────────────────────
window.handleContact = function () {
  const name    = document.getElementById('name')?.value.trim()    || '';
  const email   = document.getElementById('email')?.value.trim()   || '';
  const subject = document.getElementById('subject')?.value.trim() || 'Message from lonehoof.com';
  const message = document.getElementById('message')?.value.trim() || '';
  if (!email || !message) { alert('Please fill in your email and message.'); return; }
  const body = encodeURIComponent(
    (name ? 'From: ' + name + '\nReply to: ' + email + '\n\n' : '') + message
  );
  window.location.href =
    'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + body;
};

window.addEventListener('DOMContentLoaded', () => {
  const params       = new URLSearchParams(window.location.search);
  const item         = params.get('item');
  const subjectField = document.getElementById('subject');
  if (item && subjectField) {
    subjectField.value = 'Order enquiry: ' + item.replace(/-/g, ' ');
  }
});
