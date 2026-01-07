/* =========================================================
   Local Catalog — app.js (без fullscreen)
   Комментарий: удалён весь код полноэкранного режима, остальная логика сохранена.
   ========================================================= */

/* --------------------------
   1) ДАННЫЕ КАТАЛОГА
-------------------------- */
const CATALOG = {
  brandName: "LOCAL",
  brandTag: "виртуальный каталог",
  shopUrl: "https://example.com",
  pages: [
    {
      id: "cover-1",
      type: "layout",
      title: { text: "CATALOG\nLOCAL", x: 50, y: 20, size: 55, weight: 800, letterSpacing: 1.5, align: "left" },
      subtitle: { text: "Листайте как журнал.\nДобавлю описание потом", x: 50, y: 40, size: 18, opacity: 0.7, align: "left", maxW: 360 },
      elements: [
        {
          type: "image",
          src: "assets/1.png",
          x: 52, y: 63, w: 76, h: 46, radius: 15, shadow: true,
          product: {
            title: "Local — Каталог",
            text: "Добро пожаловать в виртуальный каталог.\nНажимайте на товары на страницах, чтобы открыть карточку.",
            price: "",
            image: "assets/1.png",
            url: "https://example.com"
          }
        },
        { type: "text", text: "www.local.store", x: 50, y: 94, size: 11, opacity: 0.55, letterSpacing: 0.8 }
      ]
    },
    {
      id: "tubes-1",
      type: "layout",
      title: { text: "TUBES", x: 50, y: 14, size: 46, letterSpacing: 1.4, align: "center" },
      product: {
        title: "Hotel Shampoo — Tube",
        text: "Мягкое очищение.\nПодходит для ежедневного использования.\nПремиальный аромат.\n\nОбъём: 30 мл • Упаковка: 300 шт",
        price: "1000 RUB",
        image: "assets/2.png",
        url: "https://example.com"
      },
      elements: [
        { type: "image", src: "assets/2.png", x: 50, y: 46, w: 74, h: 48, radius: 18, shadow: true },
        { type: "line", x: 50, y: 73, w: 64, opacity: 0.18 },
        { type: "text", text: "Hotel Shampoo — Tube", x: 50, y: 80, size: 14, weight: 800, letterSpacing: 0.8, opacity: 0.88 },
        { type: "text", text: "Мягкое очищение.\nПодходит для ежедневного использования.\nПремиальный аромат.", x: 50, y: 86, size: 12, opacity: 0.65, maxW: 520 },
        { type: "text", text: "Объём: 30 мл  •  Упаковка: 300 шт", x: 50, y: 92, size: 11, opacity: 0.55, letterSpacing: 0.2, maxW: 520 },
        { type: "text", text: "1000 RUB", x: 50, y: 96, size: 12, weight: 700, opacity: 0.80, letterSpacing: 0.2 }
      ]
    },
    {
      id: "tubes-2",
      type: "layout",
      title: { text: "TUBES", x: 50, y: 14, size: 46, letterSpacing: 1.4, align: "center" },
      product: {
        title: "Hotel Conditioner — Tube",
        text: "Смягчает и облегчает расчёсывание.\nБез утяжеления.\nПодходит для всех типов волос.\n\nОбъём: 30 мл • Упаковка: 300 шт",
        price: "1000 RUB",
        image: "assets/3.png",
        url: "https://example.com"
      },
      elements: [
        { type: "image", src: "assets/3.png", x: 50, y: 46, w: 74, h: 48, radius: 18, shadow: true },
        { type: "line", x: 50, y: 73, w: 64, opacity: 0.18 },
        { type: "text", text: "Hotel Conditioner — Tube", x: 50, y: 80, size: 14, weight: 800, letterSpacing: 0.8, opacity: 0.88 },
        { type: "text", text: "Смягчает и облегчает расчёсывание.\nБез утяжеления.\nПодходит для всех типов волос.", x: 50, y: 86, size: 12, opacity: 0.65, maxW: 520 },
        { type: "text", text: "Объём: 30 мл  •  Упаковка: 300 шт", x: 50, y: 92, size: 11, opacity: 0.55, letterSpacing: 0.2, maxW: 520 },
        { type: "text", text: "1000 RUB", x: 50, y: 96, size: 12, weight: 700, opacity: 0.80, letterSpacing: 0.2 }
      ]
    },
    {
      id: "tubes-3",
      type: "layout",
      title: { text: "TUBES", x: 50, y: 14, size: 46, letterSpacing: 1.4, align: "center" },
      product: {
        title: "Hotel Conditioner — Tube",
        text: "Смягчает и облегчает расчёсывание.\nБез утяжеления.\nПодходит для всех типов волос.",
        price: "1000 RUB",
        image: "assets/4.png",
        url: "https://example.com"
      },
      elements: [
        { type: "image", src: "assets/4.png", x: 50, y: 46, w: 74, h: 48, radius: 18, shadow: true },
        { type: "line", x: 50, y: 73, w: 64, opacity: 0.18 },
        { type: "text", text: "Hotel Conditioner — Tube", x: 50, y: 80, size: 14, weight: 800, letterSpacing: 0.8, opacity: 0.88 },
        { type: "text", text: "Смягчает и облегчает расчёсывание.\nБез утяжеления.\nПодходит для всех типов волос.", x: 50, y: 86, size: 12, opacity: 0.65, maxW: 520 },
        { type: "text", text: "1000 RUB", x: 50, y: 96, size: 12, weight: 700, opacity: 0.80, letterSpacing: 0.2 }
      ]
    },
    {
      id: "tubes-4",
      type: "layout",
      title: { text: "TUBES", x: 50, y: 14, size: 46, letterSpacing: 1.4, align: "center" },
      product: {
        title: "Hotel Conditioner — Tube",
        text: "Смягчает и облегчает расчёсывание.\nБез утяжеления.\nПодходит для всех типов волос.",
        price: "1000 RUB",
        image: "assets/5.png",
        url: "https://example.com"
      },
      elements: [
        { type: "image", src: "assets/5.png", x: 50, y: 46, w: 74, h: 48, radius: 18, shadow: true },
        { type: "line", x: 50, y: 73, w: 64, opacity: 0.18 },
        { type: "text", text: "Hotel Conditioner — Tube", x: 50, y: 80, size: 14, weight: 800, letterSpacing: 0.8, opacity: 0.88 },
        { type: "text", text: "Смягчает и облегчает расчёсывание.\nБез утяжеления.\nПодходит для всех типов волос.", x: 50, y: 86, size: 12, opacity: 0.65, maxW: 520 },
        { type: "text", text: "1000 RUB", x: 50, y: 96, size: 12, weight: 700, opacity: 0.80, letterSpacing: 0.2 }
      ]
    },
    {
      id: "back-1",
      type: "layout",
      title: { text: "CATALOG\nLOCAL", x: 50, y: 20, size: 50, weight: 900, letterSpacing: 2.2, align: "left", opacity: .9, fontFamily: "var(--serif)", color: "rgba(0, 0, 0, 1)", maxW: 520 },
      subtitle: { text: "Local.\nПрямые поставки из Дубая", x: 50, y: 40, size: 20, weight: 500, letterSpacing: .2, align: "left", opacity: .68, fontFamily: "var(--sans)", color: "rgba(0, 0, 0, 0.62)", maxW: 360 },
      elements: [],
      product: {
        title: "Local — Контакты и поставки",
        text: "Прямые поставки из Дубая.\nСвяжитесь с нами на сайте магазина.",
        price: "",
        image: "assets/6.png",
        url: "https://example.com"
      }
    }
  ],
};

/* --------------------------
   2) STATE / HELPERS
-------------------------- */
const LS = { theme: "local_theme", lastPage: "local_last_page" };

const state = {
  animating: false,          // Комментарий: блокируем навигацию во время flipping
  orientation: "landscape",  // Комментарий: "portrait" | "landscape"
  resizeT: null,             // Комментарий: debounce таймер resize
  thumbCards: [],            // Комментарий: DOM карточки миниатюр
  toastT: null,              // Комментарий: таймер тоста
  hashLock: false,           // Комментарий: защита от зацикливания hashchange
};

const $ = (id) => document.getElementById(id);
const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);
const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

/* Комментарий: safe localStorage (в приватных режимах может быть запрещён) */
const storage = {
  get(key){
    try{ return localStorage.getItem(key); } catch { return null; }
  },
  set(key, val){
    try{ localStorage.setItem(key, val); } catch {}
  }
};

/* --------------------------
   3) DOM
-------------------------- */
const els = {
  book: $("book"),
  viewer: $("viewer"),

  btnPrev: $("btnPrev"),
  btnNext: $("btnNext"),
  btnHome: $("btnHome"),
  indicator: $("pageIndicator"),

  thumbs: $("thumbs"),
  thumbsGrid: $("thumbsGrid"),
  btnThumbs: $("btnThumbs"),
  btnThumbsClose: $("btnThumbsClose"),
  thumbsSearch: $("thumbsSearch"),

  btnShop: $("btnShop"),
  brandName: $("brandName"),
  brandTag: $("brandTag"),

  btnTheme: $("btnTheme"),
  themeIcon: $("themeIcon"),

  pageRange: $("pageRange"),
  pageRangeLabel: $("pageRangeLabel"),

  year: $("year"),
  hint: $("hint"),

  modal: $("productModal"),
  btnModalClose: $("btnModalClose"),
  modalTitle: $("modalTitle"),
  modalImage: $("modalImage"),
  modalPrice: $("modalPrice"),
  modalText: $("modalText"),
  modalLink: $("modalLink"),
  btnCopy: $("btnCopy"),

  toast: $("toast"),
};

let pageFlip = null;

/* =========================================================
   4) TOAST / CLIPBOARD / HASH
========================================================= */
function toast(text){
  if(!els.toast) return;
  clearTimeout(state.toastT);
  els.toast.textContent = text;
  els.toast.classList.add("toast--show");
  state.toastT = setTimeout(() => els.toast.classList.remove("toast--show"), 1600);
}

async function copyToClipboard(text){
  try{
    if(navigator.clipboard?.writeText){
      await navigator.clipboard.writeText(text);
    } else {
      // Комментарий: fallback для старых браузеров
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    toast("Скопировано");
  } catch {
    toast("Не удалось скопировать");
  }
}

function getPageFromHash(){
  // Комментарий: читаем #p= (1-based) и возвращаем индекс (0-based)
  const m = window.location.hash.match(/p=(\d+)/i);
  if(!m) return null;
  const p1 = Number(m[1]);
  if(!Number.isFinite(p1) || p1 < 1) return null;
  return p1 - 1;
}

function setHashPage(index0){
  // Комментарий: пишем #p= (1-based)
  const p1 = Math.max(1, index0 + 1);
  state.hashLock = true;
  window.location.hash = `p=${p1}`;
  setTimeout(() => { state.hashLock = false; }, 50);
}

/* =========================================================
   5) THEME
========================================================= */
function applyTheme(theme){
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  storage.set(LS.theme, t);

  if(els.btnTheme) els.btnTheme.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
  if(els.themeIcon) els.themeIcon.textContent = (t === "dark") ? "☀" : "☾";
}

function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(cur === "dark" ? "light" : "dark");
}

/* =========================================================
   6) BRAND / PAGE ELEMENTS
========================================================= */
function setBrand(){
  if(els.brandName) els.brandName.textContent = CATALOG.brandName ?? "LOCAL";
  if(els.brandTag) els.brandTag.textContent = CATALOG.brandTag ?? "виртуальный каталог";
  if(els.btnShop) els.btnShop.href = CATALOG.shopUrl || "#";
  if(els.year) els.year.textContent = String(new Date().getFullYear());
}

function createTextEl(spec){
  // Комментарий: создаём текстовый элемент страницы
  const el = document.createElement("div");
  el.className = "el el--text";
  el.style.left = `${spec.x}%`;
  el.style.top = `${spec.y}%`;
  el.style.fontSize = `${spec.size ?? 14}px`;
  el.style.opacity = String(spec.opacity ?? 1);
  el.style.textAlign = spec.align || "center";
  el.style.whiteSpace = "pre-wrap";

  if(spec.letterSpacing != null) el.style.letterSpacing = `${spec.letterSpacing}px`;
  if(spec.fontFamily) el.style.fontFamily = spec.fontFamily;
  if(spec.weight != null) el.style.fontWeight = String(spec.weight);
  if(spec.color) el.style.color = spec.color;
  if(spec.maxW != null) el.style.maxWidth = `${spec.maxW}px`;

  el.textContent = spec.text ?? "";
  return el;
}

function createLineEl(spec){
  // Комментарий: создаём линию-разделитель
  const el = document.createElement("div");
  el.className = "el el--line";
  el.style.left = `${spec.x}%`;
  el.style.top = `${spec.y}%`;
  el.style.width = `${spec.w}%`;
  el.style.opacity = String(spec.opacity ?? 1);
  return el;
}

function createImageEl(spec, pageProduct){
  // Комментарий: создаём изображение и, если есть product, делаем его кликабельным
  const el = document.createElement("div");
  el.className = "el el--image";
  el.style.left = `${spec.x}%`;
  el.style.top = `${spec.y}%`;
  el.style.width = `${spec.w}%`;
  el.style.height = `${spec.h}%`;
  el.style.borderRadius = `${spec.radius ?? 12}px`;
  el.style.boxShadow = spec.shadow ? "var(--shadow-soft)" : "none";

  const img = document.createElement("img");
  img.src = spec.src;
  img.alt = spec.alt ?? "";
  img.decoding = "async";
  img.loading = "eager";
  img.draggable = false;

  el.appendChild(img);

  const product = spec.product || pageProduct || null;
  if(product){
    el.style.cursor = "pointer";
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", "Открыть карточку товара");

    const open = () => openProductModal({
      title: product.title || "Товар",
      text: product.text || "",
      price: product.price || "",
      image: product.image || spec.src || "",
      url: product.url || CATALOG.shopUrl || "#",
      copyText: product.title || ""
    });

    on(el, "click", open);
    on(el, "keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        open();
      }
    });
  }

  return el;
}

function createPage(page, index){
  // Комментарий: собираем HTML-страницу каталога
  const root = document.createElement("div");
  root.className = "page my-page";

  // Комментарий: первая/последняя страницы — “hard”
  if(index === 0 || index === CATALOG.pages.length - 1) root.dataset.density = "hard";

  // Комментарий: эффект корешка (левая/правая)
  root.classList.add(index % 2 === 0 ? "page--left" : "page--right");

  const pad = document.createElement("div");
  pad.className = "page__pad";
  root.appendChild(pad);

  const logo = document.createElement("div");
  logo.className = "page__logo";
  logo.textContent = CATALOG.brandName ?? "LOCAL";
  root.appendChild(logo);

  if(page.title?.text){
    pad.appendChild(createTextEl({
      text: page.title.text,
      x: page.title.x ?? 50,
      y: page.title.y ?? 18,
      size: page.title.size ?? 44,
      weight: page.title.weight ?? 800,
      letterSpacing: page.title.letterSpacing ?? 1.2,
      align: page.title.align ?? "center",
      opacity: page.title.opacity ?? 0.86,
      fontFamily: page.title.fontFamily || "var(--serif)",
      color: page.title.color || "",
      maxW: page.title.maxW
    }));
  }

  if(page.subtitle?.text){
    pad.appendChild(createTextEl({
      text: page.subtitle.text,
      x: page.subtitle.x ?? 50,
      y: page.subtitle.y ?? 28,
      size: page.subtitle.size ?? 12,
      align: page.subtitle.align ?? "center",
      opacity: page.subtitle.opacity ?? 0.62,
      fontFamily: page.subtitle.fontFamily || "",
      color: page.subtitle.color || "",
      maxW: page.subtitle.maxW ?? 540
    }));
  }

  for(const e of (page.elements ?? [])){
    if(e.type === "text") pad.appendChild(createTextEl(e));
    else if(e.type === "line") pad.appendChild(createLineEl(e));
    else if(e.type === "image") pad.appendChild(createImageEl(e, page.product || null));
  }

  const footer = document.createElement("div");
  footer.className = "page__footer";
  footer.textContent = page.footerText ?? "";
  root.appendChild(footer);

  return root;
}

function renderAllPages(){
  // Комментарий: рендерим все страницы в .book
  if(!els.book) return;
  els.book.innerHTML = "";
  CATALOG.pages.forEach((p, i) => els.book.appendChild(createPage(p, i)));
}

function getBasePageSize(){
  // Комментарий: ширина задаётся как ширина ОДНОЙ страницы
  const rect = els.book.getBoundingClientRect();
  const w = Math.max(320, Math.floor(rect.width / 2));
  const h = Math.max(420, Math.floor(rect.height));
  return { w, h };
}

/* =========================================================
   7) MODAL
========================================================= */
function openProductModal(payload){
  if(!els.modal) return;

  if(els.modalTitle) els.modalTitle.textContent = payload.title || "Товар";
  if(els.modalText) els.modalText.textContent = payload.text || "";
  if(els.modalPrice) els.modalPrice.textContent = payload.price || "";

  if(els.modalImage){
    if(payload.image){
      els.modalImage.src = payload.image;
      els.modalImage.alt = payload.title || "";
      els.modalImage.style.display = "block";
    } else {
      els.modalImage.removeAttribute("src");
      els.modalImage.style.display = "none";
    }
  }

  if(els.modalLink){
    els.modalLink.href = payload.url || "#";
    els.modalLink.style.display = payload.url ? "inline-flex" : "none";
  }

  if(els.btnCopy){
    els.btnCopy.onclick = () => copyToClipboard(payload.copyText || payload.title || "");
  }

  els.modal.classList.add("modal--open");
  els.modal.setAttribute("aria-hidden", "false");

  els.btnModalClose?.focus?.();
}

function closeProductModal(){
  if(!els.modal) return;
  els.modal.classList.remove("modal--open");
  els.modal.setAttribute("aria-hidden", "true");
}

/* =========================================================
   8) PAGEFLIP
========================================================= */
function destroyPageFlip(){
  // Комментарий: корректно уничтожаем PageFlip при пересоздании
  if(pageFlip){
    pageFlip.destroy();
    pageFlip = null;
  }
}

function initPageFlip(startPage = 0){
  if(!els.book) return;

  destroyPageFlip();
  renderAllPages();

  const { w, h } = getBasePageSize();

  pageFlip = new St.PageFlip(els.book, {
    width: w,
    height: h,

    size: "stretch",
    minWidth: 320,
    maxWidth: 1600,
    minHeight: 420,
    maxHeight: 1200,

    showCover: true,
    flippingTime: 900,
    maxShadowOpacity: 0.4,
    drawShadow: true,

    usePortrait: true,
    mobileScrollSupport: false,
    swipeDistance: 30,

    startPage: clamp(startPage, 0, CATALOG.pages.length - 1),
    clickEventForward: true,
  });

  pageFlip.on("changeOrientation", (e) => {
    state.orientation = e.data;
    syncUI();
    updateActiveThumbs();
  });

  pageFlip.on("changeState", (e) => {
    state.animating = (e.data !== "read");
  });

  pageFlip.on("flip", () => {
    syncUI();
    updateActiveThumbs();
    persistPage();
  });

  // Комментарий: берём страницы только из контейнера книги
  pageFlip.loadFromHTML(els.book.querySelectorAll(".my-page"));

  state.orientation = pageFlip.getOrientation?.() || state.orientation;
  syncUI();
  updateActiveThumbs();
  initJumpControls();
}

function reflowAfterLayoutChange(){
  // Комментарий: пересоздание PageFlip после изменения размеров (viewport/ориентация)
  if(!pageFlip) return;

  const current = getCurrentIndex();
  clearTimeout(state.resizeT);

  state.resizeT = setTimeout(() => {
    initPageFlip(current);
    buildThumbs();
  }, 120);
}

function getCurrentIndex(){
  return pageFlip ? pageFlip.getCurrentPageIndex() : 0;
}
function getTotalPages(){
  return pageFlip ? pageFlip.getPageCount() : CATALOG.pages.length;
}

function syncUI(){
  // Комментарий: обновляем индикатор, кнопки, range
  const total = getTotalPages();
  const idx = getCurrentIndex();
  const orient = pageFlip?.getOrientation?.() || state.orientation;

  if(els.indicator){
    if(orient === "portrait"){
      els.indicator.textContent = `${idx + 1} / ${total}`;
    } else {
      const isSingle = (idx === 0 || idx === total - 1);
      if(isSingle){
        els.indicator.textContent = `${idx + 1} / ${total}`;
      } else {
        const right = Math.min(idx + 1, total - 1);
        els.indicator.textContent = `${idx + 1}-${right + 1} / ${total}`;
      }
    }
  }

  if(els.btnPrev) els.btnPrev.style.opacity = idx <= 0 ? "0.35" : "1";
  if(els.btnNext) els.btnNext.style.opacity = idx >= total - 1 ? "0.35" : "1";

  if(els.pageRange){
    els.pageRange.max = String(Math.max(1, total));
    els.pageRange.value = String(idx + 1);
  }
  if(els.pageRangeLabel) els.pageRangeLabel.textContent = String(idx + 1);
}

/* =========================================================
   9) NAV
========================================================= */
function navNext(){ if(pageFlip && !state.animating) pageFlip.flipNext("bottom"); }
function navPrev(){ if(pageFlip && !state.animating) pageFlip.flipPrev("bottom"); }
function goHome(){ if(pageFlip && !state.animating) pageFlip.flip(0, "bottom"); }

function goToPage(idx){
  if(!pageFlip || state.animating) return;
  const total = getTotalPages();
  pageFlip.flip(clamp(idx, 0, total - 1), "bottom");
}

/* =========================================================
   10) THUMBS + SEARCH
========================================================= */
function pageSearchText(p, i){
  // Комментарий: собираем “текст страницы” для поиска
  const parts = [String(i + 1)];
  if(p.id) parts.push(String(p.id));
  if(p.title?.text) parts.push(p.title.text);
  if(p.subtitle?.text) parts.push(p.subtitle.text);
  if(p.product?.title) parts.push(p.product.title);
  if(p.product?.text) parts.push(p.product.text);

  for(const e of (p.elements || [])){
    if(e.type === "text" && e.text) parts.push(e.text);
  }

  return parts.join(" ").toLowerCase();
}

function buildThumbs(){
  if(!els.thumbsGrid) return;

  els.thumbsGrid.innerHTML = "";
  state.thumbCards = [];

  const total = CATALOG.pages.length;

  for(let i = 0; i < total; i++){
    const p = CATALOG.pages[i];

    const card = document.createElement("div");
    card.className = "thumb";
    card.tabIndex = 0;
    card.dataset.pageIndex = String(i);
    card.dataset.search = pageSearchText(p, i);

    const imgWrap = document.createElement("div");
    imgWrap.className = "thumb__img";

    const img = document.createElement("img");
    const firstImg = (p.elements || []).find(e => e.type === "image")?.src;
    img.src = firstImg || "assets/example-cover.png";
    img.alt = "";
    img.decoding = "async";
    img.loading = "lazy";
    img.draggable = false;

    imgWrap.appendChild(img);

    const cap = document.createElement("div");
    cap.className = "thumb__cap";

    const left = document.createElement("span");
    left.textContent = (p.title?.text || `Стр. ${i + 1}`).split("\n")[0];

    const right = document.createElement("span");
    right.textContent = `${i + 1}`;

    cap.append(left, right);
    card.append(imgWrap, cap);

    on(card, "click", () => {
      if(!pageFlip) return;
      closeThumbs();
      goToPage(i);
    });

    on(card, "keydown", (e) => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        card.click();
      }
    });

    els.thumbsGrid.appendChild(card);
    state.thumbCards.push(card);
  }

  updateActiveThumbs();
}

function updateActiveThumbs(){
  // Комментарий: подсветка активных миниатюр
  for(const c of state.thumbCards) c.classList.remove("thumb--active");
  if(!pageFlip) return;

  const idx = getCurrentIndex();
  const total = getTotalPages();
  const orient = pageFlip.getOrientation?.() || state.orientation;

  const mark = (i) => state.thumbCards[i]?.classList.add("thumb--active");

  if(orient === "portrait"){
    mark(idx);
    return;
  }

  if(idx === 0 || idx === total - 1){
    mark(idx);
  } else {
    mark(idx);
    mark(Math.min(idx + 1, total - 1));
  }
}

function filterThumbs(q){
  // Комментарий: фильтр миниатюр по поисковой строке
  const query = (q || "").trim().toLowerCase();
  for(const card of state.thumbCards){
    const hay = card.dataset.search || "";
    card.style.display = (!query || hay.includes(query)) ? "" : "none";
  }
}

/* Drawer open/close */
function openThumbs(){ els.thumbs?.classList.add("thumbs--open"); }
function closeThumbs(){ els.thumbs?.classList.remove("thumbs--open"); }
function toggleThumbs(){
  if(!els.thumbs) return;
  els.thumbs.classList.contains("thumbs--open") ? closeThumbs() : openThumbs();
}

/* =========================================================
   11) JUMP RANGE
========================================================= */
function initJumpControls(){
  if(!els.pageRange) return;

  // Комментарий: чтобы не плодить обработчики при пересоздании PageFlip
  const old = els.pageRange;
  const clone = old.cloneNode(true);
  old.parentNode?.replaceChild(clone, old);
  els.pageRange = clone;

  on(els.pageRange, "input", () => {
    if(els.pageRangeLabel) els.pageRangeLabel.textContent = String(els.pageRange.value);
  });

  on(els.pageRange, "change", () => {
    const p1 = Number(els.pageRange.value);
    if(Number.isFinite(p1)) goToPage(p1 - 1);
  });

  syncUI();
}

/* =========================================================
   12) PERSIST / START PAGE
========================================================= */
function persistPage(){
  // Комментарий: сохраняем страницу и синхроним hash
  const idx = getCurrentIndex();
  storage.set(LS.lastPage, String(idx));
  setHashPage(idx);
}

function getStartPage(){
  // Комментарий: приоритет — hash, затем localStorage
  const fromHash = getPageFromHash();
  if(fromHash !== null) return fromHash;

  const raw = storage.get(LS.lastPage);
  const n = Number(raw);
  return (Number.isFinite(n) && n >= 0) ? n : 0;
}

/* =========================================================
   13) EVENTS
========================================================= */
function initEvents(){
  on(els.btnPrev, "click", navPrev);
  on(els.btnNext, "click", navNext);
  on(els.btnHome, "click", goHome);

  on(els.btnThumbs, "click", toggleThumbs);
  on(els.btnThumbsClose, "click", closeThumbs);

  on(els.btnTheme, "click", toggleTheme);

  on(els.thumbsSearch, "input", (e) => filterThumbs(e.target.value));

  // Комментарий: клик вне drawer — закрыть
  on(document, "click", (e) => {
    if(!els.thumbs?.classList.contains("thumbs--open")) return;
    const target = e.target;
    const within = (target && els.thumbs.contains(target)) || (target && els.btnThumbs?.contains(target));
    if(!within) closeThumbs();
  });

  // Комментарий: модалка — закрытие
  on(els.btnModalClose, "click", closeProductModal);
  on(els.modal, "click", (e) => {
    if(e.target?.getAttribute?.("data-close") === "true") closeProductModal();
  });

  // Комментарий: клавиатура
  on(document, "keydown", (e) => {
    const modalOpen = els.modal?.classList.contains("modal--open");

    // Комментарий: ESC — закрыть модалку/миниатюры
    if(e.key === "Escape"){
      if(modalOpen){
        closeProductModal();
        return;
      }
      closeThumbs();
      return;
    }

    // Комментарий: если модалка открыта — не листаем
    if(modalOpen) return;

    if(e.key === "ArrowRight") navNext();
    if(e.key === "ArrowLeft") navPrev();
    if(e.key === "Home") goHome();
  });

  // Комментарий: hash sync (если пользователь руками поменял #p=)
  on(window, "hashchange", () => {
    if(state.hashLock) return;
    const idx = getPageFromHash();
    if(idx !== null) goToPage(idx);
  });

  // Комментарий: resize — пересоздаём PageFlip, сохранив страницу
  on(window, "resize", () => {
    if(!pageFlip) return;
    const current = getCurrentIndex();
    clearTimeout(state.resizeT);
    state.resizeT = setTimeout(() => {
      initPageFlip(current);
      buildThumbs();
    }, 180);
  });

  // Комментарий: visualViewport помогает на мобилках при смене высоты адресной строки
  if(window.visualViewport){
    on(window.visualViewport, "resize", reflowAfterLayoutChange);
  }
}

/* =========================================================
   14) PRELOAD
========================================================= */
function preloadImages(){
  // Комментарий: прогрев изображений, чтобы меньше лагов при перелистывании
  const urls = [];

  for(const p of CATALOG.pages){
    if(p.product?.image) urls.push(p.product.image);
    for(const e of (p.elements || [])){
      if(e.type === "image" && typeof e.src === "string") urls.push(e.src);
    }
  }

  urls.slice(0, 80).forEach((u) => {
    const img = new Image();
    img.decoding = "async";
    img.src = u;
    if(typeof img.decode === "function") img.decode().catch(() => {});
  });
}

/* =========================================================
   15) INIT
========================================================= */
function init(){
  // Комментарий: тема — из storage, иначе системная
  const savedTheme = storage.get(LS.theme);
  if(savedTheme === "dark" || savedTheme === "light"){
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  setBrand();
  buildThumbs();
  initEvents();
  preloadImages();

  // Комментарий: старт — hash > localStorage > 0
  const start = getStartPage();
  initPageFlip(start);

  // Комментарий: плавно скрываем подсказку
  setTimeout(() => { if(els.hint) els.hint.style.opacity = "0"; }, 3800);
}

init();
