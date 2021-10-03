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

// const userInput = 70;

// const hours = Math.floor(userInput / 60);

// const modifiedHours = String(hours).padStart(2, 0);
// const minutes = userInput % 60;

// const modifiedMinutes = String(minutes).padStart(2, 0);

// console.log(modifiedHours)
// console.log(modifiedMinutes);
// console.log(`${modifiedHours}:${modifiedMinutes}`);

//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию
// // При помощи цыкла for додайте все четные числа от   min до max
// const max = 50;
// const min = 23;

// let totalSum = 0;

// for(let i = max; i > min; i--){
//     // console.log(i);
//     // console.log(i % 2)
// //     if(i % 2 !== 0) {
// // totalSum += i;
// //     }
// if(i % 2 === 0) {
//     continue
// }
// totalSum +=i
// }
//     console.log(totalSum);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const userLogin = prompt("ВВедите логин");

// if (userLogin === "Админ") {
//     console.log(userLogin);
//     const password = prompt("Введите пароль");

//     if (password === "Я главный") {
//         console.log("Здравствуйте!");
//     } else if(password === null){
//         console.log("Отмена");
//     } else {
//         console.log("Неверный пароль!");
//     }
// } else if (userLogin === null) {
// console.log("Отменено");
// } else {
//     console.log("Я Вас не знаю");
// }

// switch (userLogin) {
//     case "Админ":
//         const password = prompt("Введите пароль");
//         switch (password) {
//             case "Я главный":
//                 console.log("Здравствуйте!");
//                 break;

//             case null:
//                 console.log("Отмена");
// break;
//             default:
//                 console.log("Неверный пароль!");

//         }
//         break;

//     case null:
//         console.log("Отмена");
//         break;

//     default:
//         console.log("Я Вас не знаю");

// }

//5. При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к начению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.

// let number = prompt("Введите число!");

// let total = 0;
// let check = false;

// while (number) {

//     total += Number(number);
//     number = prompt("Введите число!");
// }

// do {
//     if (number) {
//         check = true;
//         total += Number(number);
//         number = prompt("Введите число!");
//     } else {
//         check = false;
//         console.log(total);
//     }
// } while(check)

//6. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должет спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let userInput = prompt("Введите число больше 100");
// let flag = false;

// while (userInput <= 100) {
//     userInput = prompt("Введите число больше 100");
// }

// do {
//     if (userInput <= 100) {
//         userInput = prompt("Введите число больше 100");
//         flag = true;
//     } else {
//         flag = false;
//     }
// } while (flag);

// console.log(`Вы ввели число ${userInput}`);

//Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//     #login;
//     #email;

//     constructor (login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get userData() {
//         return {
//             login: this.#login,
//             email: this.#email,
//         }
//     }

//     set userData({ newLogin, newEmail }) {
//         this.#login = newLogin;
//         this.#email = newEmail;
//     }
// }

// const clientNew = new Client("login", "email@mail.com");
// clientNew.userData = ({ newLogin: "login222", newEmail: "emai222@mail.com" });
// console.log(clientNew.userData);

// console.log(`Вы ввели число ${userInput}`);

//Создать класс Worker у которого есть свойства name, age, salary.
//У класса Worker есть метод getSalary.
//Создать класс TopLevelWorker у которого есть свойство hierarchyLevel
//и который наследует класс Worker, добавляя метод getHierarchyLevel

// class Worker {
//   constructor({ name, age, salary }) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }

//   getSalary() {
//     return this.salary;
//   }
// }

// class TopLevelWorker extends Worker {
//   constructor(obj, hierarchyLevel) {
//     super(obj);
//     this.hierarchyLevel = hierarchyLevel;
//   }
//   getHierarchyLevel() {
//     return this.hierarchyLevel;
//   }
// }

// const worker = {
//   name: "mango",
//   age: 28,
//   salary: 1000,
// };
// const mangoWorker = new TopLevelWorker(worker, "top");

// console.log(mangoWorker.salary);
// console.log(mangoWorker.getHierarchyLevel());
// console.log(TopLevelWorker.__proto__ === Worker.__proto__);
// console.log(mangoWorker.__proto__ === TopLevelWorker.prototype);
// console.log(TopLevelWorker.prototype.__proto__ === Worker.prototype);


//1.Реализовать фильтер по свойству amount и получить
//только название модели



// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

// const getAvailableCarNames = (cars, value) => {
//     return cars.filter(({amount}) => amount > value).map(({model}) => model);
// }
// console.table(getAvailableCarNames(vehicles, 12));
// //2.Получить машины на распродаже и сортировать по убыванию цены
// const getSortedCarsOnSale = (cars) => {
//     return cars.filter(({onSale}) => onSale).sort((prevCar, nextCar) => nextCar.price - prevCar.price)
// }
// console.table(getSortedCarsOnSale(vehicles));
