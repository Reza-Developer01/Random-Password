const getInput = document.querySelector(".form__input");
const getButton = document.querySelector(".random-pass__btn");
const getCopyBtn = document.querySelector(".form__icon");

const chars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  let randomPassword = "";

  for (var i = 0; i < 16; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  getInput.value = randomPassword;
});

getCopyBtn.addEventListener("click", () => {
  getInput.select();
  document.execCommand("copy");
});
