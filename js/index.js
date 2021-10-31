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

// Необходимо написать функцию (isEqualSymbols), принимающую
//в аргументах две строки и возвращающую true, если эти строки
//состоят из идентичных букв и false в противном случае.
//isEqualSymbols('кот', 'ток'); // выведет true
//isEqualSymbols('кот', 'тик'); // выведет false

// const isEqualSymbols = (str1, str2) => {
//     const str1Array = str1.split("").filter((item, index, array)=> array.indexOf(item) === index);
//     const str2Array = [...str2].filter((item, index, array)=> array.indexOf(item) === index);
//     if (str1Array.length !== str2Array.length) return false;

//     for (let i = 0; i < str1Array.length; i++) {
//         if (!str1Array.includes(str2Array[i])) {
//             return false;
//         };
//     }

//     return true;

// }

// console.log(isEqualSymbols('кот', 'токк'));; // выведет true
// console.log(isEqualSymbols('кот', 'тик'));; // выведет false

//Создать маркированный список.
//Создать кнопки "Add" "Remove", которые будут менять состав списка
//Создать input с которого будем получать значение, которое будет в li
//* Четным li указать красный фон, нечетным -- синим
//Для выполнения задания используйте createElement

// const Ref = document.querySelector(".js-container");

// const inputEl = document.createElement("input");
// const addButtonEl = document.createElement("button");
// addButtonEl.textContent = "Add";
// const removeButtonEl = document.createElement("button");
// removeButtonEl.textContent = "Remove";
// const listEl = document.createElement("ul");

// Ref.append(inputEl, addButtonEl, removeButtonEl, listEl);
// console.log();
// const createItemEl = () => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = inputEl.value ? inputEl.value : "nothing";
//   listEl.append(itemEl);
//   console.log(listEl.children);
//   const isItemElEven = listEl.children.length % 2 === 0;
//   itemEl.classList.add(isItemElEven ? "even" : "odd");
//   inputEl.value = "";
// };
// addButtonEl.addEventListener("click", createItemEl);

// removeButtonEl.addEventListener("click", () => {
//   listEl.removeChild(listEl.lastElementChild);
// });

// .even {
//   background-color: red;
//   color: blueviolet;
// }

// .odd {
//   background-color: blueviolet;
//   color: red;
// }

//Создать небольшую игру:)
// - Изначально на экране пользователя будет отображаться
//какая - то форма (круг, квадрат, прямоулольник)
// - При нажатии на нее в рандомном порядке форма должна
//меняться на другую
// - Форма каждый раз должна появляться в разных местах на странице
// - Цвет формы в рандомном порядке меняется,
//используя цвета из заранее подготовленного массива

// const forms = [
//   'width: 100px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 100px; height: 100px; border-radius: 50%; border-width: 1px; border-color: #000000',
//   'width: 150px; height: 100px; border-width: 1px; border-color: #000000',
//   'width: 200px; height: 100px; border-radius: 100px / 50px;',
//   'width: 150px; height: 100px; transform: skew(20deg);',
// ];
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const randomither = max => {
//   return Math.floor(Math.random() * max);
// };

// const Ref = document.querySelector(".js-container");

// const divEl = document.createElement("div");
// divEl.style.cssText = forms[0];
// divEl.style.background = getRandomHexColor();
// Ref.append(divEl);

// const changeDiv = () => {
//   divEl.style.cssText = forms[randomither(forms.length - 1)]
//   divEl.style.background = getRandomHexColor();
//   divEl.style.position = "absolute";
//   let height = 100 - divEl.clientHeight * 100 / document.documentElement.clientHeight;
//   divEl.style.top = `${randomither(height)}%`
//   let width = 100 - divEl.clientWidth * 100 / document.documentElement.clientWidth;
//   divEl.style.left = `${randomither(width)}%`
// }

// divEl.addEventListener("click", changeDiv);

// Создать форму авторизации.
//В форме авторизации, пользователь должен ввести
//логин и пароль для входа в систему.
// - кнопка "Отправить" становится активной только в том случае
//когда заполнены оба поля и пользователь отметил чекбокс
// - поле логина должно содержать значение минимум 4 символа
// - поле пароля от 3 до 30 символов
// - если условия не соответствуют требованиям то
//при потере фокуса поле ввода показывает ошибку
// - после нажатия кнопки "Отправить" надо вывести сообщение
//об успешной авторизации

// const loginEl = document.querySelector("#login");
// const loginInfoEl = document.querySelector("#loginInfo");

// const passEl = document.querySelector("#password");
// const passInfoEl = document.querySelector("#passwordInfo");
// const checkEl = document.querySelector("#agreement");

// const submitBtnEl = document.querySelector("#submitBtn");
// const messageBoxEl = document.querySelector("#messageBox");

// loginEl.addEventListener("blur", onInputBlur);
// passEl.addEventListener("blur", onPassBlur);
// loginEl.addEventListener("focus", () => {
//   loginInfoEl.style.display = "block";
// });
// passEl.addEventListener("focus", () => {
//   passInfoEl.style.display = "block";
// });

// submitBtnEl.addEventListener("click", onSubmitBtnElClick);

// function onSubmitBtnElClick(event) {
//   event.preventDefault();
//   if (
//     !loginEl.classList.contains("error") &&
//     !passEl.classList.contains("error") &&
//     checkEl.checked
//   ) {
//     messageBoxEl.innerHTML = "Вы успешно авторизованы";
//     passEl.value = "";
//     loginEl.value = "";
//     checkEl.checked = false;
//   }
// }

// function onInputBlur(event) {
//   const value = event.currentTarget.value;
//   if (value.length < 4) {
//     event.currentTarget.classList.add("error");
//   } else {
//     if (event.currentTarget.classList.contains("error")) {
//       event.currentTarget.classList.remove("error");
//     }
//   }
//   loginInfoEl.style.display = "none";
// }
// function onPassBlur(event) {
//   const value = event.currentTarget.value;
//   if (value.length < 3 || value.length > 30) {
//     event.currentTarget.classList.add("error");
//   } else {
//     if (event.currentTarget.classList.contains("error")) {
//       event.currentTarget.classList.remove("error");
//     }
//   }
//   passInfoEl.style.display = "none";
// }

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));

function comp() {}

//
