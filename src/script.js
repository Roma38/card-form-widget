const form = document.getElementById('card-data-form');
const cardNumber = document.getElementById('card-number');
const expirationDate = document.getElementById('expiration-date');
const cvCode = document.getElementById('cv-code');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e);
});

console.log(form)