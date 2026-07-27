

import { commentsList } from './comments.js';

// 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num >= 5);

console.log(filteredNumbers); // [5, 6, 7, 8, 9, 10]

// 3

const peopleNames = ["Alice", "Bob", "Charlotte", "Diana", "Eve"];
const isMan = peopleNames.includes("Bob");

console.log(isMan); // true

// 4

function reverseArray(arr) {
    return arr.reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedPeopleNames = reverseArray(peopleNames);

console.log(reversedNumbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(reversedPeopleNames); // ["Eve", "Diana", "Charlotte", "Bob", "Alice"]

// 7

const comEmailComments = commentsList.filter(comment => comment.email.includes(".com"));

console.log(comEmailComments); // Logs comments with emails containing ".com"

// 8

const updatedComments = commentsList.map(comment => ({
    ...comment,
    postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments);

// 9

const shortedUsers = commentsList.map(user => ({ 
    id: user.id,
    name: user.name,
}));

console.log(shortedUsers);

// 10

const usersInvalidity = commentsList.map(comment => ({
    ...comment,
    isInvalid: comment.body.length > 180
}));

console.log(usersInvalidity);

// 11

const emailsReduce = commentsList.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);

console.log(emailsReduce);

const emailsMap = commentsList.map(comment => comment.email);

console.log(emailsMap);

// 12


const emailsReduceString = emailsReduce.toString();
console.log(emailsReduceString);

const emailsReduceJoin = emailsReduce.join(" _ ");
console.log(emailsReduceJoin);
