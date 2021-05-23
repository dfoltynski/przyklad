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
  const errorMessage = node.nextSibling.nextElementSibling;
  errorMessage.textContent = message;
  errorMessage.classList.add("input__error--message");
  node.classList.add("input__error");
};

const resetErrorMessage = (node) => {
  const errorMessage = node.nextSibling.nextElementSibling;
  errorMessage.textContent = "";
  errorMessage.classList.remove("input__error--message");
  node.classList.remove("input__error");
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePhoneNumber = (ev, node) => {
  const phone = ev.path[0] || node;
  const phoneNo = phone.value.trim();

  // const errorMessage = phone.nextSibling.nextElementSibling;
  if (isNaN(phoneNo)) {
    showErrorMessage(phone, "Podaj poprawny numer telefonu");
  } else {
    if (phoneNo.length == 9) {
      resetErrorMessage(phone);
      return true;
    } else {
      showErrorMessage(phone, "Numer telefonu jest za krótki");
    }
  }
};

const validatePostCode = (ev, node) => {
  const postCode = ev.path[0] || node;
  const postCodeNo = postCode.value.trim();

  if (postCodeNo.length == 2) {
    postCode.value += postCodeNo + "-";
  }

  console.log(postCodeNo);
  // if (isNaN(postCodeNo)) {
  //   showErrorMessage(postCode, "Podaj poprawny kod pocztowy");
  // } else {
  //   if (postCodeNo.length == 5) {
  //     resetErrorMessage(postCode);
  //     return true;
  //   } else {
  //     showErrorMessage(postCode, "Kod pocztowy jest nieprawidłowy");
  //   }
  // }
};

const validate = (name, email, phone, street, city, postcode) => {
  if (name.value.trim() == "") {
    showErrorMessage(name, "Podaj imię i nazwisko");
  } else {
    resetErrorMessage(name);
  }

  if (email.value.trim() == "") {
    showErrorMessage(email, "Podaj e-mail");
  } else {
    if (validateEmail(email.value.trim())) {
      resetErrorMessage(email);
    } else {
      showErrorMessage(email, "Adres e-mail jest niepoprawny");
    }
  }

  if (phone.value.trim() == "") {
    showErrorMessage(phone, "Podaj numer telefonu");
  } else {
    if (validatePhoneNumber(phone)) {
      resetErrorMessage(phone);
    }
  }

  if (street.value.trim() == "") {
    showErrorMessage(street, "Podaj ulice");
  } else {
    resetErrorMessage(street);
  }

  if (city.value.trim() == "") {
    showErrorMessage(city, "Podaj miasto");
  } else {
    resetErrorMessage(city);
  }

  if (postcode.value.trim() == "") {
    showErrorMessage(postcode, "Podaj kod pocztowy");
  } else {
    resetErrorMessage(postcode);
  }
};

document
  .querySelector(".input__personal--phone")
  .addEventListener("keyup", validatePhoneNumber);

document
  .querySelector(".input__delivery--postcode")
  .addEventListener("keyup", validatePostCode);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector(".input__personal--name");
  const email = document.querySelector(".input__personal--email");
  const phone = document.querySelector(".input__personal--phone");

  const street = document.querySelector(".input__delivery--street");
  const city = document.querySelector(".input__delivery--city");
  const postcode = document.querySelector(".input__delivery--postcode");

  const result = validate(name, email, phone, street, city, postcode);
});
// HANDLE SUBMIT
