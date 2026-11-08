document.getElementById("year").textContent = new Date().getFullYear();
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) nav.classList.add("sticky-top-scrolled");
  else nav.classList.remove("sticky-top-scrolled");
});
