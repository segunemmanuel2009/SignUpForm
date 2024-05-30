document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const firstName = document.querySelector(".firstName");
  const lastName = document.querySelector(".lastName");
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const togglePassword = document.getElementById("togglePassword");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    checkInput(firstName, "First name cannot be empty");
    checkInput(lastName, "Last name cannot be empty");
    checkInput(email, "Email cannot be empty");
    checkInput(password, "Password cannot be empty");
  }

  function checkInput(input, message) {
    const inputContainer = input.parentElement;
    const errorIcon = inputContainer.querySelector(".error-icon");
    const errorMessage = inputContainer.querySelector(".error-message");

    if (input.value.trim() === "") {
      input.classList.add("error");
      errorIcon.style.display = "block";
      errorMessage.style.display = "block";
      errorMessage.textContent = message;
    } else {
      input.classList.remove("error");
      errorIcon.style.display = "none";
      errorMessage.style.display = "none";
    }
  }

  const passwordInput = document.querySelector("#password");
  const eye = document.querySelector("#eye");

  eye.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });
});
