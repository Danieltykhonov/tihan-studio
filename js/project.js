"use strict";

const projects = [
  {
    title: "Image Gallery",
    tech: "JavaScript · basicLightbox",
    live: "https://danieltykhonov.github.io/goit-js-hw-08/",
    repo: "https://github.com/Danieltykhonov/goit-js-hw-08",
    image: "./images/projects-test/gallery.jpg",
  },
  {
    title: "Gallery & Feedback Form",
    tech: "Vite · SimpleLightbox · localStorage",
    live: "https://danieltykhonov.github.io/goit-js-hw-09/",
    repo: "https://github.com/Danieltykhonov/goit-js-hw-09",
    image: "./images/projects-test/hw-09.jpg",
  },
  {
    title: "Handmade Jewellery",
    tech: "HTML · SCSS · Team project",
    live: "#",
    repo: "#",
    image: "./images/projects-test/jewellery.jpg",
  },
  {
    title: "WebStudio",
    tech: "HTML · CSS",
    live: "#",
    repo: "#",
    image: "./images/projects-test/webstudio.jpg",
  },
];

const GITHUB_ICON = `
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
  </svg>`;

const list = document.querySelector(".projects__list");
const prevBtn = document.querySelector(".projects__btn--prev");
const nextBtn = document.querySelector(".projects__btn--next");

//! ===== Розмітка однієї картки =====
const createProjectCard = ({ title, tech, live, repo, image }) => {
  const repoLink =
    repo && repo !== "#"
      ? `<a class="projects__repo" href="${repo}" target="_blank" rel="noopener noreferrer">
           ${GITHUB_ICON} Code
         </a>`
      : "";

  return `
    <li class="projects__item">
      <a class="projects__link" href="${live}" target="_blank" rel="noopener noreferrer">
        <div class="macbook">
          <div class="macbook__lid">
            <div class="macbook__screen">
              <div class="macbook__display">
                <img
                  class="macbook__image"
                  src="${image}"
                  alt="screen web ${title}"
                  loading="lazy"
                  width="1280"
                  height="800"
                />
              </div>
            </div>
          </div>
          <div class="macbook__hinge"></div>
          <div class="macbook__base"></div>
        </div>
        <h3 class="projects__title">${title}</h3>
        <p class="projects__tech">${tech}</p>
      </a>
      ${repoLink}
    </li>`;
};

list.innerHTML = projects.map(createProjectCard).join("");

//! ===== Гортання стрілками =====
const getStep = () => {
  const item = list.querySelector(".projects__item");
  const gap = parseFloat(getComputedStyle(list).columnGap) || 0;
  return item.offsetWidth + gap;
};

const updateButtons = () => {
  const maxScroll = list.scrollWidth - list.clientWidth;
  prevBtn.disabled = list.scrollLeft <= 1;
  nextBtn.disabled = list.scrollLeft >= maxScroll - 1;
};

prevBtn.addEventListener("click", () => {
  list.scrollBy({ left: -getStep() });
});

nextBtn.addEventListener("click", () => {
  list.scrollBy({ left: getStep() });
});

list.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);
updateButtons();
