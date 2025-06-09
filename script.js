// Сайт розроблено студенткою Кузьмінською Діаною, група ФІТ-2-11

let selectedTourName = "";
let selectedTourPrice = 0;

function bookTour(name, price) {
  selectedTourName = name;
  selectedTourPrice = price;

  document.getElementById("selected-tour").innerText = name;
  document.getElementById("booking-form").style.display = "block";
  document.getElementById("total-cost").innerText = "0";
}

function calculateTotal(event) {
  event.preventDefault();
  const numPeople = parseInt(document.getElementById("num-people").value);
  const total = selectedTourPrice * numPeople;
  document.getElementById("total-cost").innerText = total;
}
