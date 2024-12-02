document.addEventListener('DOMContentLoaded', function() {

  // Sélection des éléments
  const login = document.getElementById("loginModal");
  const signup = document.getElementById("signupModal");
  const btn = document.getElementById("modal");

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
    login.style.display = "flex";
    btn.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === signup) {
      signup.style.display = "none";
      console.log('bonjour');
    }
    if (event.target === login) {
      login.style.display = "none";
    }
  };

  document.getElementById("openSignup").onclick = function(){
    login.style.display = "none";
    signup.style.display = "flex";
  }

  document.getElementById("openLogin").onclick = function(){
    signup.style.display = "none";
    login.style.display = "flex";
  }

  document.getElementById("closeLogin").onclick = function(){
    login.style.display = "none";
  }

  document.getElementById("closeSignup").onclick = function(){
    signup.style.display = "none";
  }

  login.style.display = "none";
  signup.style.display = "none";
});
