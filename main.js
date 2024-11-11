const modal = document.querySelector(".modal");
const btn = document.getElementById("modal");

const modalSignin = document.querySelector(".modal2");

const closeBtn = document.getElementById("close");
let input = document.querySelector(".container-input .password");
let showBtn = document.querySelector(".fa-eye");

showBtn.onclick = function() {
  if(input.type === "password") {
    input.type = "text";
    showBtn.classList.add("active");
  } else {
    input.type = "password";
    showBtn.classList.remove("active");
  }
}

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
