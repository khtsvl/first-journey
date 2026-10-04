import './products.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './homework-12.js';


const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const pinkColorHash = '#ff9eec';
const purpleColorHash = '#c16aff';


changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach ((card)=> card.style.backgroundColor = purpleColorHash);
})


const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = pinkColorHash;
});


const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');


  if (answer === true) {
    window.open('https://www.google.com');
  } else {
    alert('Вы отменили открытие Google');
  }
}


const logMessageButton = document.querySelector('#log-Message');

logMessageButton.addEventListener('click', () => logMessage('Рабочая тема'));


function logMessage(message) {
    alert(message);
    console.log(message);
};




const catalogTitle = document.querySelector('.catalog__title');

catalogTitle.addEventListener('mouseover', function () {
  console.log(catalogTitle.textContent);
});

const toggleColorBtn = document.querySelector("#toggle-сolor-btn");

toggleColorBtn.addEventListener("click", () => {
  toggleColorBtn.classList.toggle("active");
});