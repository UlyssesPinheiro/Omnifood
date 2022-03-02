const curYear = new Date().getFullYear();

console.log(curYear);

document.querySelector(".compyright-year").textContent = curYear;

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const mainNavLink = document.querySelectorAll(".main-nav-link");

btnMobileNav.addEventListener("click", (e) => {
  header.classList.toggle("nav-open");
});

[...mainNavLink].forEach((e) =>
  e.addEventListener("click", () => {
    header.classList.remove("nav-open");
  })
);

//////////////////////////////////////////////////
// smooth scrolling fix for safari
const allLinks = document.querySelectorAll("a:link");

[...allLinks].forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  })
);

//////////////////////////////////////////////////
// Sticky navigation

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
      console.log(document.querySelector(".header").offsetHeight);
      sectionHero.style.marginTop = `${
        document.querySelector(".header").offsetHeight
      }px`;
    } else {
      document.querySelector(".header").classList.remove("sticky");
      sectionHero.style.marginTop = 0;
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHero);
