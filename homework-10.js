import { productsList } from './products.js';

// 4

const productInfoArray = productsList.reduce((acc, item) => {
  acc.push({ [item.name]: item.description });
  return acc;
}, []);

console.log('Описание товаров (массив):', productInfoArray);

// 5

const template = document.querySelector('#product-template');
const catalogList = document.querySelector('.catalog__list');


const createCardTemplate = (product) => {

    const cardClone = template.content.cloneNode(true);

    cardClone.querySelector('.product-card__img').src =
        `img/${product.image}.png`;
    cardClone.querySelector('.product-card__img').alt =
        `Товар ${product.name}`;
    cardClone.querySelector('.product-card__tag').textContent =
        product.purpose;
    cardClone.querySelector('.product-card__title').textContent =
        product.name;
    cardClone.querySelector('.product-card__description').textContent =
        product.description;
    cardClone.querySelector('.product-card__price-value').textContent =
        `${product.price} ₽`;


    const ingredientsList =
        cardClone.querySelector('.product-card__ingredients');

    product.components.forEach((item) => {

        const li = document.createElement('li');

        li.textContent = item;
        ingredientsList.append(li);
    });
    return cardClone;
};


// Получение количества карточек
const getCardsCount = () => {

    const userInput =
        prompt('Сколько карточек отобразить? От 1 до 5');

    const count = Number(userInput);
    if (
        Number.isInteger(count) &&
        count >= 1 &&
        count <= 5
    ) {
        return count;
    }
    alert('Неверное значение!');
    return 5;
};


const renderCards = (list, count) => {

    const slicedList = list.slice(0, count);

    catalogList.innerHTML = '';
    slicedList.forEach((product) => {

        const cardElement = createCardTemplate(product);
        catalogList.append(cardElement);
    });
};


const userChoice = getCardsCount();

renderCards(productsList, userChoice);  