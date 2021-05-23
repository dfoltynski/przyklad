import "./scss/style.scss";
// HANDLE PRICE TAG CLICK
const button50zloty = document.querySelectorAll(".col__price__button")[0];
const button70zloty = document.querySelectorAll(".col__price__button")[1];
const button100zloty = document.querySelectorAll(".col__price__button")[2];

button50zloty.addEventListener("click", () => {
  button50zloty.classList.add("col__price__button--active");
  button70zloty.classList.remove("col__price__button--active");
  button100zloty.classList.remove("col__price__button--active");
});

button70zloty.addEventListener("click", () => {
  button70zloty.classList.add("col__price__button--active");
  button50zloty.classList.remove("col__price__button--active");
  button100zloty.classList.remove("col__price__button--active");
});

button100zloty.addEventListener("click", () => {
  button100zloty.classList.add("col__price__button--active");
  button70zloty.classList.remove("col__price__button--active");
  button50zloty.classList.remove("col__price__button--active");
});
// HANDLE PRICE TAG CLICK

// RANDOMIZE UNIQUE CODE
const randomUniqueCode = Math.floor(Math.random() * 899999) + 999999;

const uniqueCode = document.querySelectorAll(".special-code")[0];
uniqueCode.textContent += randomUniqueCode;
// RANDOMIZE UNIQUE CODE

// HANDLE SUBMIT
const form = document.querySelector("form");

const showErrorMessage = (node, message) => {
  const errorMessage = document.querySelectorAll("small")[0];
  errorMessage.textContent = message;
  errorMessage.classList.add("input__error--message");
  node.classList.add("input__error");
};

const resetErrorMessage = (node) => {
  const errorMessage = document.querySelectorAll("small")[0];
  errorMessage.textContent = "";
  errorMessage.classList.remove("input__error--message");
  node.classList.remove("input__error");
};

const validate = (name, email, phone, street, city, postcode) => {
  if (name.value.trim() == "") {
    showErrorMessage(name, "Podaj imię i nazwisko");
  } else {
    resetErrorMessage(name);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector(".input__personal--name");
  const email = document.querySelector(".input__personal--email");
  const phone = document.querySelector(".input__personal--phone");

  const street = document.querySelector(".input__delivery--street");
  const city = document.querySelector(".input__delivery--city");
  const postcode = document.querySelector(".input__delivery--postcode");
  console.log(name);
  const result = validate(name, email, phone, street, city, postcode);
});
// HANDLE SUBMIT
