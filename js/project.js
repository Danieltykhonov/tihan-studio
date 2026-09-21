/* =====================================================================
   PROJECTS SECTION
   Підключи в index.html перед </body> (або з defer):
   <script src="js/projects.js"></script>

   Усе, що треба редагувати, — масив PROJECTS нижче.
   ===================================================================== */

(() => {
  "use strict";

  /* -------------------------------------------------------------------
     ТУТ ТИ ДОДАЄШ І РЕДАГУЄШ ПРОЄКТИ

     title        — назва
     year         — рік (можна прибрати)
     description  — 1–3 речення; довжина тексту теж впливає на висоту картки
     tags         — технології
     image        — шлях до скріншота, напр. "images/projects/shop.jpg"
                    (якщо файлу ще немає — покажеться заглушка з цим шляхом)
     alt          — короткий опис фото для доступності (можна прибрати)
     ratio        — пропорції кадру, напр. "4 / 5" (висока), "16 / 10" (широка),
                    "1 / 1" (квадрат). Це те, що робить картки різної висоти.
                    Прибери поле — фото покажеться у своїх природних пропорціях.
     live         — посилання на живу сторінку ("" або прибрати — кнопки не буде)
     repo         — посилання на репозиторій ("" або прибрати — кнопки не буде)

     Посилання "#" — це заглушка: кнопка є, але нікуди не веде.
  ------------------------------------------------------------------- */
  const PROJECTS = [
    {
      title: "Handmade Jewellery",
      year: "2026",
      description:
        "Landing page for a handmade jewellery shop, built as a team project.",
      tags: ["HTML", "CSS", "JavaScript", "Git"],
      image: "img/projects/handmade-jewellery.jpg",
      alt: "Handmade Jewellery landing page",
      ratio: "4 / 5",
      live: "https://danieltykhonov.github.io/flex-squad-project/",
      repo: "https://github.com/Danieltykhonov/flex-squad-project",
    },
    {
      title: "WebStudio",
      year: "2026",
      description:
        "Multi-section website for a web studio: header, hero, features, team, portfolio and footer. Refined through several rounds of mentor review.",
      tags: ["HTML", "CSS"],
      image: "img/projects/webstudio.jpg",
      alt: "WebStudio website",
      ratio: "16 / 10",
      live: "https://danieltykhonov.github.io/goit-markup-hw-06/",
      repo: "https://github.com/Danieltykhonov/web-studio",
    },
    {
      title: "Project name",
      year: "2026",
      description:
        "Dark, cinematic portfolio written by hand without a framework: sticky header, responsive layout and a projects section that renders from a single list.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "img/projects/strongbuild.jpg",
      alt: "Portfolio website",
      ratio: "1 / 1",
      live: "#",
      repo: "#",
    },
    {
      title: "StrongBuild",
      year: "2026",
      description:
        "StrongBuild is a responsive landing page for a construction company. It features a fullscreen hero, services, projects, client reviews, a video section and an embedded map, plus a sticky navbar, smooth scrolling and a burger menu on mobile.",
      tags: ["HTML", "SCSS", "JavaScript"],
      image: "img/projects/strongbuild.jpg",
      ratio: "16 / 9",
      live: "https://danieltykhonov.github.io/strongbuild/",
      repo: "https://github.com/Danieltykhonov/strongbuild",
    },
    {
      title: "Another project",
      year: "2026",
      description:
        "A longer description makes the card taller, so the grid stays lively. Mention the problem you solved, the stack you chose and one thing you are proud of in the result.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      image: "",
      ratio: "3 / 4",
      live: "#",
      repo: "#",
    },
    {
      title: "Next one",
      year: "2026",
      description: "Short and to the point.",
      tags: ["React"],
      image: "",
      ratio: "4 / 3",
      live: "#",
      repo: "#",
    },
  ];

  /* ================================================================
     Нижче код рендеру — зазвичай його чіпати не потрібно
  ================================================================ */

  const ICONS = {
    github:
      '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path fill="currentColor" stroke="none" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    image:
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.6"/><path d="m4 18 5-5 4 4 3-3 4 4"/></svg>',
  };

  const esc = (value = "") =>
    String(value).replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[ch]);

  const placeholderHTML = (p) =>
    `<div class="pj-placeholder">${ICONS.image}<span>Add a screenshot</span>${
      p.image ? `<small>${esc(p.image)}</small>` : ""
    }</div>`;

  const mediaHTML = (p) => {
    const ratio = p.ratio || (p.image ? "" : "4 / 3");
    const ratioCls = ratio ? " pj-media--ratio" : "";
    const ratioStyle = ratio ? ` style="--ratio:${esc(ratio)}"` : "";

    if (!p.image) {
      return `<div class="pj-media pj-media--empty${ratioCls}"${ratioStyle}>${placeholderHTML(p)}</div>`;
    }

    return `<div class="pj-media${ratioCls}"${ratioStyle}>
      <img src="${esc(p.image)}" alt="${esc(p.alt || `${p.title} screenshot`)}" loading="lazy" decoding="async">
    </div>`;
  };

  const linkHTML = (url, kind, p) => {
    if (!url) return "";
    const isLive = kind === "live";
    const label = isLive ? "Live site" : "Repository";
    const cls = isLive ? "pj-btn--primary" : "pj-btn--ghost";
    const inner = isLive
      ? `<span>${label}</span>${ICONS.external}`
      : `${ICONS.github}<span>${label}</span>`;

    return `<a class="pj-btn ${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${label}: ${esc(p.title)}">${inner}</a>`;
  };

  const cardHTML = (p) => {
    const tags = (p.tags || []).length
      ? `<ul class="pj-tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
      : "";
    const links = linkHTML(p.live, "live", p) + linkHTML(p.repo, "repo", p);

    return `<article class="pj-card">
      ${mediaHTML(p)}
      <div class="pj-body">
        <div class="pj-head">
          <h3 class="pj-title">${esc(p.title)}</h3>
          ${p.year ? `<span class="pj-year">${esc(p.year)}</span>` : ""}
        </div>
        <p class="pj-desc">${esc(p.description)}</p>
        ${tags}
        ${links ? `<div class="pj-actions">${links}</div>` : ""}
      </div>
    </article>`;
  };

  const init = () => {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map(cardHTML).join("");
    const cards = Array.from(grid.children);

    // Фото не завантажилось — показуємо заглушку замість "битої" картинки
    cards.forEach((card, i) => {
      const img = card.querySelector(".pj-media img");
      if (!img) return;

      img.addEventListener("error", () => {
        const media = img.parentElement;
        if (!media.style.getPropertyValue("--ratio")) {
          media.style.setProperty("--ratio", "4 / 3");
          media.classList.add("pj-media--ratio");
        }
        media.classList.add("pj-media--empty");
        media.innerHTML = placeholderHTML(PROJECTS[i]);
      });
    });

    // Заглушки "#" не мають нікуди вести
    grid.addEventListener("click", (e) => {
      const link = e.target.closest('a[href="#"]');
      if (link) e.preventDefault();
    });

    // Світло за курсором (тільки на пристроях з мишкою)
    if (window.matchMedia("(hover: hover)").matches) {
      grid.addEventListener("pointermove", (e) => {
        const card = e.target.closest(".pj-card");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      });
    }

    // М'яка поява карток, коли вони заходять у екран
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    grid.classList.add("is-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            entry.target.style.setProperty("--pj-delay", `${i * 90}ms`);
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    cards.forEach((card) => observer.observe(card));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();