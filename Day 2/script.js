const menu = document.querySelector(".menu-icon");
menu.addEventListener("click", function () {
  menu.classList.toggle("active");
  for (const child of menu.children) {
    child.classList.remove("no-animation");
  }
});
