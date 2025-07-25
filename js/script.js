const btnToggle = document.getElementById("toggle-theme");
btnToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});