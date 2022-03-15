"use strict";

document.querySelector(".toggle").addEventListener("click", function () {
  document.querySelector(".nav-lists").style.transform = "translateX(0)";
});

document.querySelector(".fa-xmark").addEventListener("click", function () {
  document.querySelector(".nav-lists").style.transform = "translateX(200px)";
});
