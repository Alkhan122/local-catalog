/**
 * ACACIA-STYLE Perfume Catalog Mockup
 * - Single page, no build tools, no frameworks.
 * - Replace demo data with your own (or fetch from API).
 */

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

/* ---------- Demo data ---------- */
const categories = [
  { id: "new",   title: "Новинки",     subtitle: "подборка", heroTag: "NEW",  image: pickImg(8) },
  { id: "women", title: "Женские",     subtitle: "для неё",  heroTag: "WOMEN",image: pickImg(10) },
  { id: "men",   title: "Мужские",      subtitle: "для него", heroTag: "MEN",  image: pickImg(12) },
  { id: "niche", title: "Нишевая",     subtitle: "selection",heroTag: "NICHE",image: pickImg(15) },
  { id: "sets",  title: "Подарки",     subtitle: "наборы",   heroTag: "SETS", image: pickImg(18) },
  { id: "home",  title: "Дом",         subtitle: "ароматы",  heroTag: "HOME", image: pickImg(21) },
];

const products = [
  makeP("p001","Vanilla Silk","women","EDP", 50,  7990, true,  ["ваниль","мускус","цветы"],  "Мягкая ваниль с воздушным шлейфом — на каждый день.", 95),
  makeP("p002","Cedar & Pepper","men","EDP", 100, 8990, true,  ["кедр","перец","амбра"],    "Сухое дерево и специи, чистый современный характер.", 72),
  makeP("p003","Iris Smoke","niche","EDP", 50, 15990,false, ["ирис","ладан","кожа"],       "Пудровый ирис, дым и кожа. Нишевая композиция.", 88),
  makeP("p004","Citrus Atelier","new","EDT", 100, 6490, true,  ["цитрус","нероли","чай"],    "Солнечный цитрус и лёгкий чайный акцент.", 66),
  makeP("p005","Rose Linen","women","EDT", 50,  5490, true,  ["роза","альдегиды","мускус"], "Чистая роза, как белая рубашка.", 60),
  makeP("p006","Black Oud","men","EDP", 100, 13990,true,  ["уд","амбра","кожа"],           "Тёмный уд, смола, кожа. Плотно и статусно.", 84),

  makeP("p007","Saffron Milk","niche","EDP", 50,  16990,true, ["шафран","молоко","сандал"], "Гурманский шафран и кремовый сандал.", 91),
  makeP("p008","Mint Cologne","men","EDC", 100, 4990, true,  ["мята","цитрус","ветивер"],   "Освежающий колонь с мятой и ветивером.", 52),
  makeP("p009","Peony Cloud","women","EDP", 50,  8990, true,  ["пион","груша","мускус"],    "Нежный пион и сочная груша в мягком облаке.", 70),
  makeP("p010","Paper Incense","niche","EDP", 100, 18990,false,["бумага","ладан","кедр"],   "Сухой ладан и «бумажная» чистота.", 86),

  makeP("p011","Gift Set: Weekend","sets","SET", 0,  12990,true,["мини","travel","унисекс"],"Набор из 3 travel-спреев для поездок.", 78),
  makeP("p012","Home Diffuser: Fig","home","DIF", 200, 3990, true, ["инжир","зелень","дерево"],"Диффузор с зелёным инжиром для дома.", 64),

  makeP("p013","Amber Whisper","women","EDP", 100, 9990, true, ["амбра","ваниль","пачули"], "Тёплая амбра с ванильной базой.", 73),
  makeP("p014","Ocean Metal","men","EDT", 100, 6990, true, ["озон","соль","мускус"],       "Холодный морской воздух и чистый мускус.", 58),
  makeP("p015","Patchouli Noir","niche","EDP", 50,  14990,true, ["пачули","какао","кожа"],  "Тёмные пачули с шоколадным нюансом.", 89),
  makeP("p016","Jasmine Tea","new","EDT", 50,  5990, true, ["жасмин","чай","бергамот"],     "Жасминовый чай — лёгко и изящно.", 67),

  makeP("p017","Gift Set: Signature","sets","SET",0, 19990,true, ["full","gift","premium"], "Подарочный набор: 50ml + лосьон + мини.", 83),
  makeP("p018","Home Spray: Linen","home","SPR", 100, 2990,true, ["чистота","альдегиды","мускус"],"Спрей для текстиля с эффектом «свежего белья».", 62),

  makeP("p019","Bergamot Skin","women","EDP", 50,  8490,true, ["бергамот","кожа","мускус"],"Цитрус на коже — интимно и современно.", 74),
  makeP("p020","Smoked Vetiver","men","EDP", 100, 10990,true,["ветивер","дым","кедр"],     "Ветивер с дымной древесной глубиной.", 80),
  makeP("p021","Tea & Ink","niche","EDP", 50,  17990,true,["чай","чернила","амбра"],        "Чернильные ноты и сухой чай.", 87),
  makeP("p022","Apricot Blossom","new","EDT", 50,  5490,true,["абрикос","цветы","мускус"],  "Абрикосовый цвет и лёгкий шлейф.", 59),

  makeP("p023","Home Diffuser: Sandal","home","DIF", 200, 4490,true,["сандал","кедр","ваниль"],"Сандал и мягкая ваниль для уюта.", 68),
  makeP("p024","Gift Set: Discovery","sets","SET",0,  9990,true,["discovery","mini","niche"],"Discovery-набор: 6 миниатюр, чтобы выбрать любимый.", 77),
];

function makeP(id, name, category, conc, ml, price, inStock, notes, desc, popularity){
  const brand = ["Maison L.", "Atelier N.", "Noir Studio", "Aroma Lab", "Sillage Co.", "Private Line"][hash(id) % 6];
  const year = 2023 + (hash(name) % 3);
  return {
    id, name, brand, category,
    concentration: conc, volume_ml: ml,
    price_rub: price, inStock,
    notes,
    year,
    popularity,
    image: pickImg(4 + (hash(id) % 18)),
    desc
  };
}

/* ---------- Images ---------- */
// Uses rendered PDF screenshots if present (assets/ref_XX.jpg). Otherwise uses SVG placeholders.
function pickImg(pageNo){
  const pad = String(pageNo).padStart(2,"0");
  const jpg = `./assets/ref_${pad}.jpg`;
  const svg = `./assets/cat_${((pageNo % 6) || 6)}.svg`;
  // We don't know if JPG exists at runtime in your environment, so keep both and let browser fallback.
  return { jpg, svg };
}

/* ---------- State ---------- */
const state = {
  q: "",
  cat: "all",
  conc: new Set(),
  notes: new Set(),
  priceMax: 20000,
  inStockOnly: false,
  sort: "popular",
  view: "grid",
};

const STORAGE_KEY = "acacia_style_favs_v1";
let favs = new Set(loadFavs());

/* ---------- DOM refs ---------- */
const heroMedia = $(".hero__media");
const qInput = $("#q");
const clearSearchBtn = $("#clearSearch");
const catSelect = $("#cat");
const concList = $("#concList");
const notesList = $("#notesList");
const priceMax = $("#priceMax");
const priceMaxLabel = $("#priceMaxLabel");
const inStockOnly = $("#inStockOnly");
const sortSelect = $("#sort");
const gridBtn = $("#viewGrid");
const listBtn = $("#viewList");
const grid = $("#productGrid");
const emptyState = $("#emptyState");
const resultCount = $("#resultCount");
const quickChips = $("#quickChips");
const tiles = $("#categoryTiles");

const modal = $("#productModal");
const modalMedia = $("#modalMedia");
const modalKicker = $("#modalKicker");
const modalTitle = $("#modalTitle");
const modalPrice = $("#modalPrice");
const modalStock = $("#modalStock");
const modalDesc = $("#modalDesc");
const modalSpec = $("#modalSpec");
const toggleFavBtn = $("#toggleFav");
const copyLinkBtn = $("#copyLink");

const favDrawer = $("#favDrawer");
const favList = $("#favList");
const favCount = $("#favCount");

/* ---------- Init ---------- */
init();

function init(){
  // Hero image: take one of rendered pages if exists, else SVG placeholder
  const heroCandidate = pickImg(9);
  setBg(heroMedia, heroCandidate);

  renderCategoryTiles();
  populateFilters();
  renderQuickChips();
  bindEvents();

  // Apply URL params if present
  applyURLState();

  render();
  updateFavUI();
}

/* ---------- Rendering ---------- */
function renderCategoryTiles(){
  tiles.innerHTML = categories.map(c => {
    const cover = resolveImg(c.image);
    return `
      <article class="tile" data-cat="${c.id}">
        <div class="tile__img" style="background-image:url('${cover}')"></div>
        <div class="tile__overlay"></div>
        <div class="tile__content">
          <h3 class="tile__title">${escapeHtml(c.title)}</h3>
          <div class="tile__meta">
            <span>${escapeHtml(c.subtitle)}</span>
            <button class="tile__cta" type="button">Открыть</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  $$(".tile", tiles).forEach(tile => {
    tile.addEventListener("click", () => {
      const id = tile.dataset.cat;
      state.cat = id;
      syncFilterUI();
      scrollToId("catalog");
      render();
    });
  });
}

function populateFilters(){
  // Category select
  catSelect.innerHTML = [
    `<option value="all">Все категории</option>`,
    ...categories.map(c => `<option value="${c.id}">${c.title}</option>`)
  ].join("");

  // Concentrations
  const concs = uniq(products.map(p => p.concentration)).sort();
  concList.innerHTML = concs.map(v => checklistItem("conc", v)).join("");

  // Notes (top 14)
  const notes = mostCommon(products.flatMap(p => p.notes), 14);
  notesList.innerHTML = notes.map(n => checklistItem("notes", n)).join("");

  priceMaxLabel.textContent = formatMoney(state.priceMax);

  // Defaults
  syncFilterUI();
}

function checklistItem(group, value){
  const id = `${group}-${slug(value)}`;
  return `
    <label class="check" for="${id}">
      <input type="checkbox" id="${id}" data-group="${group}" value="${escapeAttr(value)}" />
      <span>${escapeHtml(value)}</span>
    </label>
  `;
}

function renderQuickChips(){
  const chips = [
    { label: "Ваниль", set: () => { state.q = "ваниль"; } },
    { label: "Нишевая", set: () => { state.cat = "niche"; } },
    { label: "До 7 000 ₽", set: () => { state.priceMax = 7000; } },
    { label: "В наличии", set: () => { state.inStockOnly = true; } },
    { label: "Новинки", set: () => { state.cat = "new"; state.sort = "new"; } },
  ];
  quickChips.innerHTML = chips.map((c, i) => `<button class="chip" type="button" data-chip="${i}">${c.label}</button>`).join("");
  $$(".chip", quickChips).forEach(btn => {
    btn.addEventListener("click", () => {
      chips[Number(btn.dataset.chip)].set();
      syncFilterUI();
      render();
      scrollToId("catalog");
    });
  });
}

function render(){
  const filtered = applyFilters(products, state);
  const sorted = applySort(filtered, state.sort);

  // Count
  resultCount.textContent = `${sorted.length} ${plural(sorted.length, ["товар","товара","товаров"])}`;

  // Grid/list view
  grid.classList.toggle("is-list", state.view === "list");

  // Cards
  grid.innerHTML = sorted.map(p => productCard(p, state.view)).join("");
  $$(".card", grid).forEach(card => {
    card.addEventListener("click", () => openProduct(card.dataset.id));
  });

  emptyState.hidden = sorted.length !== 0;

  // URL
  pushURLState();
}

function productCard(p, view){
  const cover = resolveImg(p.image);
  const fav = favs.has(p.id);
  const stockLabel = p.inStock ? "В наличии" : "Нет";
  const stockClass = p.inStock ? "tag--accent" : "";
  const topTags = p.notes.slice(0, 3);

  return `
    <article class="card" data-id="${p.id}" role="button" tabindex="0" aria-label="Открыть ${escapeAttr(p.name)}">
      <div class="card__media" style="background-image:url('${cover}')"></div>
      <div class="card__body">
        <div class="card__top">
          <div>
            <h3 class="card__title">${escapeHtml(p.name)}</h3>
            <div class="card__sub">${escapeHtml(p.brand)} • ${escapeHtml(p.concentration)}${p.volume_ml ? ` • ${p.volume_ml}ml` : ""}</div>
          </div>
          <span class="pill"><span class="price">${formatMoney(p.price_rub)}</span></span>
        </div>
        <div class="tags">
          <span class="tag ${stockClass}">${stockLabel}</span>
          ${topTags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          ${fav ? `<span class="tag tag--accent">★ избранное</span>` : ``}
        </div>
      </div>
    </article>
  `;
}

/* ---------- Modal ---------- */
let currentModalId = null;

function openProduct(id){
  const p = products.find(x => x.id === id);
  if (!p) return;

  currentModalId = id;

  setBg(modalMedia, p.image);
  modalKicker.textContent = `${labelCategory(p.category)} • ${p.concentration}${p.volume_ml ? ` • ${p.volume_ml}ml` : ""}`;
  modalTitle.textContent = `${p.name}`;
  modalPrice.textContent = formatMoney(p.price_rub);
  modalStock.textContent = p.inStock ? "В наличии" : "Нет на складе";
  modalDesc.textContent = p.desc;

  const spec = [
    ["Бренд", p.brand],
    ["Категория", labelCategory(p.category)],
    ["Концентрация", p.concentration],
    ["Объём", p.volume_ml ? `${p.volume_ml} мл` : "—"],
    ["Год", p.year],
    ["Ноты", p.notes.join(", ")],
  ];
  modalSpec.innerHTML = spec.map(([k,v]) => `<div><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(String(v))}</dd></div>`).join("");

  syncFavButton();

  if (typeof modal.showModal === "function") modal.showModal();
  else modal.setAttribute("open", "");
}

function closeProduct(){
  currentModalId = null;
  if (typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
}

function syncFavButton(){
  if (!currentModalId) return;
  const on = favs.has(currentModalId);
  toggleFavBtn.textContent = on ? "Убрать из избранного" : "В избранное";
}

/* ---------- Favorites ---------- */
function toggleFav(id){
  if (favs.has(id)) favs.delete(id);
  else favs.add(id);
  saveFavs([...favs]);
  updateFavUI();
  syncFavButton();
  render(); // to update badges on cards
}

function updateFavUI(){
  favCount.textContent = String(favs.size);

  const items = products.filter(p => favs.has(p.id));
  if (items.length === 0){
    favList.innerHTML = `<div class="muted">Пока пусто. Откройте товар и нажмите «В избранное».</div>`;
    return;
  }
  favList.innerHTML = items.map(p => `
    <div class="fav-item">
      <div class="fav-item__img" style="background-image:url('${resolveImg(p.image)}')"></div>
      <div class="fav-item__meta">
        <div class="fav-item__title">${escapeHtml(p.name)}</div>
        <div class="fav-item__sub">${escapeHtml(p.brand)} • ${formatMoney(p.price_rub)}</div>
      </div>
      <button class="fav-item__btn" type="button" data-id="${p.id}">Убрать</button>
    </div>
  `).join("");

  $$(".fav-item__btn", favList).forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFav(btn.dataset.id);
      updateFavUI();
    });
  });

  // Clicking item opens product
  $$(".fav-item", favList).forEach(row => {
    row.addEventListener("click", () => {
      const id = $(".fav-item__btn", row).dataset.id;
      openProduct(id);
    });
  });
}

/* ---------- Filters + sorting ---------- */
function applyFilters(list, st){
  const q = st.q.trim().toLowerCase();

  return list.filter(p => {
    if (st.cat !== "all" && p.category !== st.cat) return false;

    if (st.conc.size && !st.conc.has(p.concentration)) return false;

    if (st.notes.size){
      const hasAny = [...st.notes].some(n => p.notes.includes(n));
      if (!hasAny) return false;
    }

    if (p.price_rub > st.priceMax) return false;

    if (st.inStockOnly && !p.inStock) return false;

    if (q){
      const hay = `${p.name} ${p.brand} ${p.notes.join(" ")} ${labelCategory(p.category)}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  });
}

function applySort(list, mode){
  const arr = [...list];
  if (mode === "popular") arr.sort((a,b) => b.popularity - a.popularity);
  if (mode === "new") arr.sort((a,b) => b.year - a.year);
  if (mode === "price-asc") arr.sort((a,b) => a.price_rub - b.price_rub);
  if (mode === "price-desc") arr.sort((a,b) => b.price_rub - a.price_rub);
  if (mode === "name-asc") arr.sort((a,b) => a.name.localeCompare(b.name, "ru"));
  return arr;
}

function syncFilterUI(){
  qInput.value = state.q;
  catSelect.value = state.cat;
  sortSelect.value = state.sort;
  priceMax.value = state.priceMax;
  priceMaxLabel.textContent = formatMoney(state.priceMax);
  inStockOnly.checked = state.inStockOnly;

  // Checkboxes
  $$("input[type='checkbox'][data-group='conc']").forEach(cb => cb.checked = state.conc.has(cb.value));
  $$("input[type='checkbox'][data-group='notes']").forEach(cb => cb.checked = state.notes.has(cb.value));

  gridBtn.classList.toggle("seg-btn--active", state.view === "grid");
  listBtn.classList.toggle("seg-btn--active", state.view === "list");
}

/* ---------- Events ---------- */
function bindEvents(){
  // Search
  qInput.addEventListener("input", () => {
    state.q = qInput.value;
    render();
  });
  clearSearchBtn.addEventListener("click", () => {
    state.q = "";
    syncFilterUI();
    render();
  });

  // Filters
  catSelect.addEventListener("change", () => { state.cat = catSelect.value; render(); });
  priceMax.addEventListener("input", () => {
    state.priceMax = Number(priceMax.value);
    priceMaxLabel.textContent = formatMoney(state.priceMax);
  });
  priceMax.addEventListener("change", () => render());

  inStockOnly.addEventListener("change", () => { state.inStockOnly = inStockOnly.checked; render(); });

  // Checklist toggles
  $("#filtersPanel").addEventListener("change", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLInputElement)) return;
    if (t.type !== "checkbox") return;
    const group = t.dataset.group;
    const set = group === "conc" ? state.conc : state.notes;
    if (t.checked) set.add(t.value);
    else set.delete(t.value);
    render();
  });

  // Sort
  sortSelect.addEventListener("change", () => { state.sort = sortSelect.value; render(); });

  // View toggle
  gridBtn.addEventListener("click", () => { state.view = "grid"; syncFilterUI(); render(); });
  listBtn.addEventListener("click", () => { state.view = "list"; syncFilterUI(); render(); });

  // Reset
  $("#resetAll").addEventListener("click", resetAll);
  $("#resetFilters").addEventListener("click", resetAll);
  $("#emptyReset").addEventListener("click", resetAll);

  // Hero CTA
  $("#scrollToCategories").addEventListener("click", () => scrollToId("categories"));

  // Modal
  $("#closeModal").addEventListener("click", closeProduct);
  modal.addEventListener("click", (e) => {
    // click outside content closes (dialog has backdrop)
    const inner = $(".modal__inner", modal);
    if (inner && !inner.contains(e.target)) closeProduct();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.open) closeProduct();
  });

  toggleFavBtn.addEventListener("click", () => {
    if (!currentModalId) return;
    toggleFav(currentModalId);
  });

  copyLinkBtn.addEventListener("click", async () => {
    if (!currentModalId) return;
    const url = new URL(window.location.href);
    url.searchParams.set("product", currentModalId);
    try{
      await navigator.clipboard.writeText(url.toString());
      copyLinkBtn.textContent = "Ссылка скопирована";
      setTimeout(() => copyLinkBtn.textContent = "Скопировать ссылку", 1200);
    }catch{
      copyLinkBtn.textContent = "Не удалось";
      setTimeout(() => copyLinkBtn.textContent = "Скопировать ссылку", 1200);
    }
  });

  // Mobile filters drawer
  $("#openFilters").addEventListener("click", () => openFilters(true));
  $("#closeFilters").addEventListener("click", () => openFilters(false));
  $("#applyFilters").addEventListener("click", () => openFilters(false));

  // Favorites drawer
  $("#openCart").addEventListener("click", () => openFav(true));
  $("#closeFav").addEventListener("click", () => openFav(false));
  $("#closeFav2").addEventListener("click", () => openFav(false));
  $("#clearFav").addEventListener("click", () => {
    favs = new Set();
    saveFavs([]);
    updateFavUI();
    render();
  });

  // Search icon focuses search
  $("#openSearch").addEventListener("click", () => {
    qInput.focus();
    qInput.scrollIntoView({ behavior:"smooth", block:"center" });
  });
}

function openFilters(open){
  const panel = $("#filtersPanel");
  if (window.matchMedia("(max-width: 980px)").matches){
    panel.classList.toggle("is-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
}

function openFav(open){
  if (open){
    if (typeof favDrawer.showModal === "function") favDrawer.showModal();
    else favDrawer.setAttribute("open", "");
  }else{
    if (typeof favDrawer.close === "function") favDrawer.close();
    else favDrawer.removeAttribute("open");
  }
}

/* ---------- URL state ---------- */
function pushURLState(){
  const url = new URL(window.location.href);
  url.searchParams.set("cat", state.cat);
  url.searchParams.set("q", state.q.trim());
  url.searchParams.set("sort", state.sort);
  url.searchParams.set("view", state.view);
  url.searchParams.set("priceMax", String(state.priceMax));
  url.searchParams.set("stock", state.inStockOnly ? "1" : "0");

  // We intentionally do not persist notes/conc to keep URLs short.
  window.history.replaceState({}, "", url.toString());
}

function applyURLState(){
  const url = new URL(window.location.href);
  const cat = url.searchParams.get("cat");
  const q = url.searchParams.get("q");
  const sort = url.searchParams.get("sort");
  const view = url.searchParams.get("view");
  const priceMax = url.searchParams.get("priceMax");
  const stock = url.searchParams.get("stock");
  const product = url.searchParams.get("product");

  if (cat && ["all", ...categories.map(c => c.id)].includes(cat)) state.cat = cat;
  if (typeof q === "string") state.q = q;
  if (sort && ["popular","new","price-asc","price-desc","name-asc"].includes(sort)) state.sort = sort;
  if (view && ["grid","list"].includes(view)) state.view = view;
  if (priceMax && !Number.isNaN(Number(priceMax))) state.priceMax = clamp(Number(priceMax), 0, 20000);
  if (stock === "1") state.inStockOnly = true;

  // Sync UI after filters generated (call later too)
  setTimeout(syncFilterUI, 0);

  if (product){
    setTimeout(() => openProduct(product), 200);
  }
}

/* ---------- Helpers ---------- */
function labelCategory(id){
  return categories.find(c => c.id === id)?.title ?? id;
}

function resolveImg(img){
  // Prefer JPG if available; fallback to SVG.
  // Browser will request both only if the first fails (we use CSS fallback approach below),
  // but we can also attempt a simple heuristic: if jpg path contains "ref_" use it.
  return img.jpg || img.svg;
}

function setBg(el, img){
  const cover = resolveImg(img);
  // Set CSS var fallback (try jpg first, then svg)
  el.style.setProperty("--hero-img", `url('${cover}'), url('${img.svg || cover}')`);
  el.style.backgroundImage = `url('${cover}'), url('${img.svg || cover}')`;
}

function scrollToId(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior:"smooth", block:"start" });
}

function resetAll(){
  state.q = "";
  state.cat = "all";
  state.conc = new Set();
  state.notes = new Set();
  state.priceMax = 20000;
  state.inStockOnly = false;
  state.sort = "popular";
  state.view = "grid";
  syncFilterUI();
  render();
}

function formatMoney(n){
  // ₽ with thin space grouping
  return `${Number(n).toLocaleString("ru-RU")} ₽`;
}

function plural(n, forms){
  // forms: ["товар","товара","товаров"]
  const x = Math.abs(n) % 100;
  const y = x % 10;
  if (x > 10 && x < 20) return forms[2];
  if (y > 1 && y < 5) return forms[1];
  if (y === 1) return forms[0];
  return forms[2];
}

function uniq(arr){
  return [...new Set(arr)];
}

function mostCommon(arr, limit){
  const m = new Map();
  for (const v of arr) m.set(v, (m.get(v)||0)+1);
  return [...m.entries()].sort((a,b) => b[1]-a[1]).slice(0, limit).map(([k]) => k);
}

function slug(s){
  return String(s).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/(^-|-$)/g,"");
}

function hash(s){
  let h = 0;
  for (let i=0;i<s.length;i++) h = (h*31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function clamp(n, a, b){
  return Math.max(a, Math.min(b, n));
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));
}
function escapeAttr(s){ return escapeHtml(s).replace(/`/g, "&#96;"); }

/* Favorites storage */
function loadFavs(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    const arr = JSON.parse(raw || "[]");
    return Array.isArray(arr) ? arr : [];
  }catch{ return []; }
}
function saveFavs(arr){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); }catch{}
}
