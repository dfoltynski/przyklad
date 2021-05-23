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

const rodo = document.querySelector(".rodo__checkbox");

const showErrorMessage = (node, message) => {
  const errorMessage = node.nextSibling.nextElementSibling;
  errorMessage.textContent = message;
  errorMessage.classList.add("input__error--message");
  node.classList.add("input__error");
};

const resetErrorMessage = (node) => {
  const errorMessage = node.nextSibling.nextElementSibling;
  errorMessage.textContent = "";
  node.classList.remove("input__error");
};

const validateEmail = (ev, node) => {
  const email = node || ev.path[0];
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email.value.trim()).toLowerCase())) {
    resetErrorMessage(email);
  }
  return re.test(String(email.value.trim()).toLowerCase());
};

const validatePhoneNumber = (ev, node) => {
  const phone = node || ev.path[0];
  const phoneNo = phone.value.trim();

  if (isNaN(phoneNo)) {
    showErrorMessage(phone, "Podaj poprawny numer telefonu");
  } else {
    if (phoneNo.length == 9) {
      resetErrorMessage(phone);
    } else {
      showErrorMessage(phone, "Numer telefonu jest za krótki");
    }
  }
};

const validatePostCode = (ev, node) => {
  const postCode = node || ev.path[0];
  const postCodeNo = postCode.value.trim();

  if (postCodeNo.length == 2) {
    postCode.value += "-";
  }

  if (isNaN(postCodeNo.split("-").join(""))) {
    showErrorMessage(postCode, "Podaj poprawny kod pocztowy");
  } else {
    if (postCodeNo.length == 6) {
      resetErrorMessage(postCode);
      return true;
    } else {
      showErrorMessage(postCode, "Kod pocztowy jest nieprawidłowy");
    }
  }
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
    if (validateEmail(undefined, email)) {
      resetErrorMessage(email);
    } else {
      showErrorMessage(email, "Adres e-mail jest niepoprawny");
    }
  }

  if (phone.value.trim() == "") {
    showErrorMessage(phone, "Podaj numer telefonu");
  } else {
    if (validatePhoneNumber(undefined, phone)) {
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
    if (validatePostCode(undefined, postcode)) resetErrorMessage(postcode);
  }

  return true;
};

const name = document.querySelector(".input__personal--name");
name.addEventListener("keyup", (ev) => {
  const name = ev.path[0];
  if (name.value.trim() == "") {
    showErrorMessage(name, "Podaj imię i nazwisko");
  } else {
    resetErrorMessage(name);
  }
});

const email = document.querySelector(".input__personal--email");
email.addEventListener("keyup", validateEmail);

const phone = document.querySelector(".input__personal--phone");
phone.addEventListener("keyup", validatePhoneNumber);

const street = document.querySelector(".input__delivery--street");
street.addEventListener("keyup", (ev) => {
  const street = ev.path[0];

  if (street.value.trim() == "") {
    showErrorMessage(street, "Podaj ulice");
  } else {
    resetErrorMessage(street);
  }
});

const city = document.querySelector(".input__delivery--city");
city.addEventListener("keyup", (ev) => {
  const city = ev.path[0];

  if (city.value.trim() == "") {
    showErrorMessage(city, "Podaj miasto");
  } else {
    resetErrorMessage(city);
  }
});

const postcode = document.querySelector(".input__delivery--postcode");
postcode.addEventListener("keyup", validatePostCode);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate(name, email, phone, street, city, postcode);

  const errors = document.querySelectorAll(".input__error");
  const selectedAmount = document.querySelector(".price--active").childNodes[0];

  if (errors.length == 0 && rodo.checked) {
    console.log(
      name.value,
      email.value,
      phone.value,
      street.value,
      city.value,
      postcode.value,
      selectedAmount
    );
  }
});

// HANDLE SUBMIT
