const textshot = document.querySelector(".text-shot");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
btn.onclick = function () {
  if (btn) {
    textshot.classList.toggle("active") && img.classList.toggle("active");
  } else {
    textshot.classList.remove("active") && img.classList.remove("active");
  }
};
