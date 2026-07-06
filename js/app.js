/* ============================================================
   LÓGICA DE LA APP — normalmente no necesitas editar este archivo.
   Los datos que se muestran vienen de js/data.js
   ============================================================ */

function money(amount, currency) {
  return currency + amount.toLocaleString("es-CL");
}

function renderHeader() {
  document.querySelector(".restaurant-name").textContent = restaurantInfo.nombre;
  document.querySelector(".tagline").textContent = restaurantInfo.tagline;
  document.getElementById("footerHours").textContent = restaurantInfo.horario;
  document.getElementById("footerLocation").textContent = restaurantInfo.ubicacion;
}

function renderNavAndSections() {
  const nav = document.getElementById("categoryNav");
  const main = document.getElementById("menuSections");

  menuData.forEach((cat, index) => {
    // Nav pill
    const pill = document.createElement("button");
    pill.className = "category-pill" + (index === 0 ? " is-active" : "");
    pill.textContent = cat.titulo;
    pill.dataset.target = cat.id;
    pill.addEventListener("click", () => {
      document.getElementById(cat.id).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    nav.appendChild(pill);

    // Section
    const section = document.createElement("section");
    section.className = "menu-section";
    section.id = cat.id;

    const title = document.createElement("h2");
    title.className = "menu-section__title";
    title.textContent = cat.titulo;
    section.appendChild(title);

    const divider = document.createElement("div");
    divider.className = "star-divider";
    divider.innerHTML = `<svg viewBox="0 0 400 16" preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" y1="8" x2="400" y2="8" class="star-line"/>
      <circle cx="60" cy="8" r="1.4" class="star-dot"/>
      <circle cx="180" cy="8" r="2" class="star-dot star-dot--bright"/>
      <circle cx="240" cy="8" r="1" class="star-dot"/>
      <circle cx="340" cy="8" r="1.4" class="star-dot"/>
    </svg>`;
    section.appendChild(divider);

    cat.platos.forEach((plato) => {
      const dish = document.createElement("div");
      dish.className = "dish";
      const thumb = plato.imagen
        ? `<img class="dish__thumb" src="${plato.imagen}" alt="${plato.nombre}" loading="lazy">`
        : "";

      const desc = plato.descripcion
        ? `<p class="dish__desc">${plato.descripcion}</p>`
        : "";

      dish.innerHTML = `
        <div class="dish__row">
          ${thumb}
          <span class="dish__name">${plato.nombre}</span>
          <span class="dish__leader" aria-hidden="true"></span>
          <span class="dish__price">${money(plato.precio, restaurantInfo.moneda)}</span>
        </div>
        ${desc}
      `;
      section.appendChild(dish);
    });

    main.appendChild(section);
  });
}

function setupScrollSpy() {
  const pills = Array.from(document.querySelectorAll(".category-pill"));
  const sections = menuData.map((c) => document.getElementById(c.id));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          pills.forEach((p) => p.classList.remove("is-active"));
          const active = pills.find((p) => p.dataset.target === entry.target.id);
          if (active) active.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => s && observer.observe(s));
}

function setupInstallPrompt() {
  const btn = document.getElementById("installBtn");
  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    btn.hidden = false;
  });

  btn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    btn.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    btn.hidden = true;
  });
}

function setupOfflineNotice() {
  const note = document.getElementById("offlineNote");
  const update = () => { note.hidden = navigator.onLine; };
  window.addEventListener("online", update);
  window.addEventListener("offline", update);
  update();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch((err) => {
        console.warn("No se pudo registrar el service worker:", err);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderNavAndSections();
  setupScrollSpy();
  setupInstallPrompt();
  setupOfflineNotice();
  registerServiceWorker();
});
