const navbar = document.getElementById("mobile-navbar");
const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const navbarHeight = navbar.offsetHeight;
  const footerTop = footer.offsetTop;
  const bottomOfViewport = scrollY + windowHeight;

  const shouldShow =
    scrollY > 100 && bottomOfViewport < footerTop - navbarHeight;

  if (shouldShow) {
    navbar.classList.remove(
      "translate-y-full",
      "opacity-0",
      "pointer-events-none"
    );
    navbar.classList.add("translate-y-0", "opacity-100");
  } else {
    navbar.classList.remove("translate-y-0", "opacity-100");
    navbar.classList.add(
      "translate-y-full",
      "opacity-0",
      "pointer-events-none"
    );
  }
});
const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
  } else {
    btn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

AOS.init();
