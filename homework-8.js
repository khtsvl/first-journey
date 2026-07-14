// Задание N°3 Создайте объект на основе ваших данных.

const user = {
  name: "Ali",
  surname: "Khatsiev",
  age: 18,
  gender: "Male",
  email: "ali@example.com",
  country: "Russia",
  city: "Grozny",
  job: "None",
  relationshipStatus: "Single",
};

console.log(user);

// Задание N°4 Создайте объект, который будет хранить данные об автомобиле.
// Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3.


const carData = {
    brand: "BMW",
    model: "M4 G82",
    year: 2024,
    color: "Black",
    transmission: "Automatic"
};

carData.owner = user;

console.log(carData);

// Задание N°5 Написать функцию которая аргументом будет принимать объект, описанный в пункте №4.
//  Она проверяет, есть ли в объекте свойство "максимальная скорость",
//  если нет - добавляет его и задает значение, если есть - прекращает выполнение

function checkMaxSpeed() {
    if (!Object.hasOwn(carData, "maxSpeed")) {
        carData.maxSpeed = 303;
    }
}

checkMaxSpeed();

console.log(carData);

// Задание N°6 Написать функцию, которая получает первым аргументом — объект,
//  а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function showRelStatus(obj, relationshipStatus) {
    console.log(obj[relationshipStatus]);
}

showRelStatus(user, "relationshipStatus");


// Задание N°7 Создать массив, который содержит названия продуктов

const products = ["Milk", "Bread", "Eggs", "Cheese", "Sugar"];


// Задание N°8 Создать массив, состоящий из объектов, где объект представляет собой книгу.
//  После, добавить еще одну книгу в конец списка.

const booksList = [
    {
        bookTitle: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        year: 1997,
        coverColor: "Red",
        genre: "Fantasy"
    },

    {
        bookTitle: "The Hobbit",
        author: "J. R. R. Tolkien",
        year: 1937,
        coverColor: "Green",
        genre: "Fantasy"
    },
    
    {
        bookTitle: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        coverColor: "Blue",
        genre: "Classic Novel"
    },
]

booksList.push({
        bookTitle: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        coverColor: "Light Blue",
        genre: "Novella"
    });

console.log(booksList)


// Задание N°9 Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной.

const booksHarryPotter = [
    {
        bookTitle: "Harry Potter and the Chamber of Secrets",
        author: "J. K. Rowling",
        year: 1998,
        coverColor: "Green",
        genre: "Fantasy"
    },

    {
        bookTitle: "Harry Potter and the Prisoner of Azkaban",
        author: "J. K. Rowling",
        year: 1999,
        coverColor: "Violet",
        genre: "Fantasy"
    },
    
    {
        bookTitle: "Harry Potter and the Goblet of Fire",
        author: "J. K. Rowling",
        year: 2000,
        coverColor: "Blue",
        genre: "Fantasy"
    },
]

const mergeArrays = [...booksList, ...booksHarryPotter];

console.log(mergeArrays)

// Задание N°10 Почитать про метод массива — map.
//  Написать функцию, которая принимает массив сущностей с задания №9.
//  Добавляем новое свойство для объекта "isRare"...

function setRareStatus(book) {
    book.isRare = book.year < 2000 ? true : false;

    return book;
}

const rareBooks = mergeArrays.map(setRareStatus);

console.log(rareBooks)