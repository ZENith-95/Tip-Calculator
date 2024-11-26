const billAmount = document.getElementById("billAmount");
const customTipAmount = document.getElementById("customTipAmount");
const splitCount = document.getElementById("splitCount");

const submitBtn = document.getElementById("calculate");

const totalAmount = document.getElementById("totalAmount");
const tipAmount = document.getElementById("tipAmount");
const amountPerHead = document.getElementById("amountPerPerson");
const resultDiv = document.querySelector('.result')

resultDiv.style.display = "none";

function submit() {
  const bill = parseFloat(billAmount.value);
  const tip = parseFloat(customTipAmount.value);
  const numberOfPeople = splitCount.value;


  if (bill <= 0) {
    resultDiv.style.display = "block";
    totalAmount.innerText = "Please enter a valid bill amount.";
    return;
  }
  if (tip < 0) {
    resultDiv.style.display = "block";
    totalAmount.innerText = "Please enter a valid tip amount.";
    return;
  }
  if (numberOfPeople <= 0) {
    resultDiv.style.display = "block";
    totalAmount.innerText = "Please enter a valid number of people.";
    return;
  }

  if (!bill) {
    resultDiv.style.display = "block";
    totalAmount.innerText = "You haven't entered a total bill amount";
  } else if (!tip) {
    resultDiv.style.display = "block";
    totalAmount.innerHTML = "You haven't entered a tip amount";
  } else if (!numberOfPeople) {
    resultDiv.style.display = "block";
    totalAmount.innerHTML = "You haven't entered the number of people";
  } else {
    const totalBill = parseFloat(bill + tip);
    const amountPerPerson = parseFloat(totalBill / numberOfPeople);

    totalAmount.innerHTML = `The total amount is   GHS ${totalBill}`;
    tipAmount.innerHTML = `You tipped   GHS ${tip}`;
    amountPerHead.innerHTML = `Each person   pays GHS ${amountPerPerson.toFixed(2)}`;
  }
  resultDiv.style.display = "block";
}

submitBtn.addEventListener("click", submit());

function reset() {
  window.location.reload();
}

function toggleDivVisibility() {
  const serviceRatingRadioBtn = document.getElementById("serviceRating");
  const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

  if (serviceRatingRadioBtn.checked) {
    serviceRatingInputDiv.style.display = "block";
  } else {
    serviceRatingInputDiv.style.display = "none";
  }
}

function customToggle() {
  const customToggle = document.getElementById("customTip");
  const serviceRatingInputDiv = document.getElementById("serviceRatingInput");

  if (customToggle.checked) {
    serviceRatingInputDiv.style.display = "none";
  }
}

totalAmount.innerHTML = "";
