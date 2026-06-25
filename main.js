// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const pinkColorHash = '#ff9eec';
const purpleColorHash = '#c16aff';


changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach ((card)=> card.style.backgroundColor = purpleColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = pinkColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');


  if (answer === true) {
    window.open('https://www.google.com')
  } else {
    alert('Вы отменили открытие Google')
  }
}

// Вывод консоль лог

const logMessageButton = document.querySelector('#log-Message');

logMessageButton.addEventListener('click', () => logMessage('Рабочая тема'))


function logMessage(message) {
    alert(message)
    console.log(message)
}


// Вывод текста заголовка при наведении


const catalogTitle = document.querySelector('.catalog__title');

catalogTitle.addEventListener('mouseover', function () {
  console.log(catalogTitle.textContent);
})


// Кнопка меняющая цвет

const toggleColorBtn = document.querySelector("#toggle-сolor-btn");

toggleColorBtn.addEventListener("click", () => {
  toggleColorBtn.classList.toggle("active");
});