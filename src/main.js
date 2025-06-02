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
