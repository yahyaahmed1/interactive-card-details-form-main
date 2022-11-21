// change the name:
let inputName = document.querySelector("input#name");
let cardName = document.querySelector(".card-footer p");

inputName.onkeyup = function () {
  cardName.innerHTML = "";
  cardName.append(inputName.value);
};

// change card number:
let cardNumPattern = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
let inputNum = document.querySelector("input#number");
let cardNum = document.querySelector(".card-number");
let formatError = document.querySelector(".red");
inputNum.onkeyup = function () {
  if ((cardNumPattern).test(inputNum.value)) {
    cardNum.innerHTML = "";
    cardNum.append((inputNum.value));
    formatError.style.cssText = "";
    inputNum.style.cssText = "";
  } else if (inputNum.value === "") {
    cardNum.innerHTML = "0000 0000 0000 0000";
    formatError.style.cssText = "";
    inputNum.style.cssText = "";
  } else {
    cardNum.innerHTML = "";
    cardNum.append(inputNum.value);
    formatError.style.cssText = "display: block;";
    inputNum.style.cssText = "border: 1px solid var(--red-errors)";
  }
};

// check expire date:

let inpMonth = document.querySelector("input#month");
let cardMonth = document.querySelector("span.month");
let inpYear = document.querySelector("input#year");
let cardYear = document.querySelector("span.year");
let errorBlank = document.querySelector(".blank-error");


inpMonth.onkeyup = function () {
  if (inpMonth.value === "") {
    cardMonth.innerHTML = "00";
    inpMonth.style.cssText = "border: 1px solid var(--red-errors)";
    errorBlank.style.cssText = "display: block;";
  } else {
    inpMonth.style.cssText = "";
    errorBlank.style.cssText = "";
    cardMonth.innerHTML = "";
    cardMonth.append(inpMonth.value);
  }
};

inpYear.onkeyup = function () {
  if (inpYear.value === "") {
    cardYear.innerHTML = "00";
    inpYear.style.cssText = "border: 1px solid var(--red-errors)";
    errorBlank.style.cssText = "display: block;";
  } else {
    inpYear.style.cssText = "";
    errorBlank.style.cssText = "";
    cardYear.innerHTML = "";
    cardYear.append(inpYear.value);
  }
};

// check cvc field:
let cvcField = document.querySelector("input#cvc");
let cvcLabelError = document.querySelector(".blank-error-cvc");
let cvcInCard = document.querySelector(".back-card p");

cvcField.onkeyup = function () {
  if (cvcField.value !== "") {
    cvcInCard.innerHTML = "";
    cvcInCard.append(cvcField.value);
    cvcField.style.cssText = "";
    cvcLabelError.style.cssText = "";
  } else {
    cvcInCard.innerHTML = "000";
    cvcField.style.cssText = "border: 1px solid var(--red-errors);";
    cvcLabelError.style.cssText = "display: block;";
  }
};

// completed status:
let form = document.querySelector(".form");
let completedStatus = document.querySelector(".form-completed");
let btn = document.querySelector("div.confirm-btn");
let confirmError = document.querySelector(".confirm-error");

console.log(btn);

btn.addEventListener("click", function () {
  if ((inputName.value !== "") && (cardNumPattern).test(inputNum.value) === true && (inpMonth.value !== "") && (inpYear.value !== "") && (cvcField.value !== "")) {
    form.style.cssText = "display: none;";
    completedStatus.style.cssText = "display: flex;";
  } else {
    form.style.cssText = "";
    completedStatus.style.cssText = "";
    confirmError.style.cssText = "display: block;";
  }
});