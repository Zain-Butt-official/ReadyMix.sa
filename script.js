const hamburger = document.getElementById("hamburger");
const mobilemenu = document.getElementById("mobile-menu");
const closemenu = document.getElementById("close-btn");
hamburger.addEventListener("click", () => {
  mobilemenu.classList.add("active");
});
mobilemenu.addEventListener("click", () => {
  mobilemenu.classList.remove("active");
});
document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    mobilemenu.classList.remove("active");
  });
});
