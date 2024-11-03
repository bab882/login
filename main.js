const modal = document.querySelector(".modal");
const btn = document.getElementById("modal");
const closeBtn = document.getElementById("close");


btn.onclick = function () {
  modal.style.display = "flex";
  btn.style.display = "none";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  btn.style.display = "inline-block";
};


window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    btn.style.display = "inline-block";
  }
};
