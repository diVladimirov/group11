//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"


// const userInput = prompt("Какое официальное название JavaScript?");

// if (userInput === "ECMAScript") {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!")
// }
// console.log(userInput);1


//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10


const userInput = 70;

const hours = Math.floor(userInput / 60);

const modifiedHours = String(hours).padStart(2, 0);
const minutes = userInput % 60;

const modifiedMinutes = String(minutes).padStart(2, 0);

console.log(modifiedHours)
console.log(modifiedMinutes);
console.log(`${modifiedHours}:${modifiedMinutes}`);