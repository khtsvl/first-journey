function getWeather(city = "Москве", temperature = 23) {
    console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию`);
}

getWeather();

const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость");
    } else if (speed === LIGHT_SPEED) {
        console.log("Скорость света");
    }
}

checkSpeed(300000000);


const product = {name: "iPhone 17"}
const price = 100000;

function buyProduct(budget) {
    if (budget >= price) {
        console.log(`${product.name} приобретён. Спасибо за покупку!`);
    } else if (budget < price) {
        function calc() {
            const shortfall = price - budget;
            console.log(`Вам не хватает ${shortfall}$, пополните баланс`);
        }
        calc();
    }
}

buyProduct(50000);


function getMaxNumber(a, b) {
    if (a > b) {
        console.log(`Максимальное число: ${a}`);
    } else if (b > a) {
        console.log(`Максимальное число: ${b}`);
    } else {
        console.log("Оба числа равны");
    }
}

let num1 = 52;
let num2 = 67;
let num3 = 67;

getMaxNumber(num1, num2);
getMaxNumber(num1, num3);
getMaxNumber(num2, num3);