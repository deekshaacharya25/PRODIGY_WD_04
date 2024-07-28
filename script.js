const btn = document.getElementById("btn");
const nav = document.querySelector("nav ul");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const backToTopButton = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
