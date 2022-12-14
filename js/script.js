'use strict';

// const venicleBodyWidth = 5000;
// const venicleBodyLength = 4400;

// console.log(" widht box: " + venicleBodyWidth + ", large: " + venicleBodyLength);

// ['jsuybd', 'sdssdasd', 'sdsdsda'].map(a =>)

// snake_case
// UPPER_SNAKE_CASE

// const userName = 'John';
// let userNumber = 25;

// userNumber = 24;

// let number = 4;
// console.log(-4/0);
// console.log('string' * 9);

// const person = "MAx";

// const bool = true;

// console.log(something);

////////////////////////////////OBject///////////////////////
// let und;

// console.log(und);

// const obj = {
//     name: "Max",
//     age: 25,
//     isMarried: false
// };
// // console.log(obj.age);
// console.log(obj['name']);

// let arr = ['plum.png', '5', 'orange.jpg', 'apple.bmp'];
// console.log(arr[2]);

////////////////////////////////OBject & Massiv///////////////////////

// const arr = [1, 3, 5];

// arr[10] = "232113";

// const arrObj = {
//     a: 1,
//     b: 3,
//     c: 5,
//     abc: {
//         name: "alex",
//         age: 24,
//     }
// };

// const d = "d";

// // arrObj.d = "1231";
// arrObj[d] = "1231";

// console.log(arrObj);
// console.log(arr);

// const storeName = 'SnowInn';
// const storeDescription = {
//     budget: 1000,
//     employees: ['max', 'anna', 'tom'],
//     products: {
//         ski: 5000,
//         bord: 4000
//     },
//     open: true
// };

// console.log(storeDescription);

////////////////////////////////comand///////////////////////

// alert("hello");

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('How are you old?', '');
// console.log(answer+5);

// const answer = [];

// // answer[0] = prompt('whats you first name?', '');
// // answer[1] = prompt('whats you last name?', '');
// // answer[2] = prompt('How old are you?', '');

// console.log(typeof(answer));

////////////////////////////////интреполяция///////////////////////

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Hi, ${user}`);

////////////////////////////////операторы///////////////////////

// console.log(4 + '4');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 === '6');

// const isChecked = true,
//       isClose = false;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);

////////////////////////////////Условия///////////////////////

// if (4 == 9) {
//     console.log('oK!');

// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 50) {
//     console.log("error");

// } else if (num > 100) {
//     console.log("More");
// // } else {
// //     console.log("OK!");
// // }

// // (num === 50) ? console.log("OK!") : console.log("error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("неверно");
//         break;
//     case 100:
//         console.log("неверно");
//         break;
//     case 51:
//         console.log("True");
//         break;
//     default:
//         console.log("Not now");
//         break;

// }

// const hamberger = 5;
// const fries = 0;

// if (hamberger && fries) {
//     console.log('im not hungry');
// } else {
//     console.log('Im hungry');
// }

// const hamberger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamberger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(0 && "asa");

// if (hamberger === 3 && cola != 0 && fries != 0) {
//     console.log('Все сыты');
// } else {
//     console.log('Im hungry');
// }

// const hamberger = 0;
// const fries = 1;
// const cola = 0;

// if (hamberger || cola  || fries ) {
//     console.log('Все сыты');
// } else {
//     console.log('Уходим');
// }

// console.log(hamberger || cola  || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// // }
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
////////////////////////////////Циклы///////////////////////
// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// let num = 2;

// while (num < 16) {
//    console.log(num);
//    num++;
//    if (num % 2 === 0) {
//      continue;
//     }
// }
// let num = 2;
// do {
//     console.log(num);
//     num++;
//     if (num % 2 === 0) {
//              continue;
//             }

// }
// while (num < 16);

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);
// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if (i === 6){
//         continue;
//     }

//     console.log(i);
// }

// for (let  i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(i);
//     }
// }

// let result = "";
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += "\n";
// // }

// // console.log(result);

// // first: for (let  i = 0; i < 3; i++) {
// //     console.log(`first level: ${i}`);
// //     for (let j = 0; j < 3; j++) {
// //         console.log(`second level: ${j}`);
// //         for (let k = 0; k < 3; k++) {
// //             if (k === 2) continue first;
// //             console.log(`third level: ${k}`);
// //         }
// //     }
// // }

// for (let  i = 5; i < 11; i++) {
//     console.log(i);
// }

// for (let  i = 20; i > 9; i--) {
//     if (i < 13) {
//         break;
//     }
//     console.log(i);

// }

// for (let  i = 2; i < 11; i+=2) {
//     console.log(i);

// }

// let num = 2;

// while (num < 16) {
//     if (num % 2 === 0) {
//         num++;
//         continue;
//     }
//     else {
//         console.log(num);
//     }
//     num++;
// }

// let arr = [];

// for (let i = 5; i < 11; i++) {
//         arr[i - 5] = i;
// }

// console.log(arr);

// let arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//    result [i] = arr [i];

// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === "number") {
//         data[i] = data[i]*2;

//     } else if (typeof(data[i]) === "string") {
//         data[i] = data[i] + " - done";
//     }

//  }
//  console.log(data);

// let result = "";
// const lenght = 5;

// for (let i = 1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

//////////////////////////стрелочные функии/////////////////////////////////

// let num  = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     let num  = 5;
//     console.log(num);
// }

// showFirstMassage('Hello world');
// console.log(num);

// function calc(a, b) {
//     return(a * b);
// }

// console.log(calc(3, 5));
// console.log(calc(10, 210));
// console.log(calc(11, 111));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() {
//   console.log('HEllo!');
// };

// logger();

// // const calcA = (a, b) => {
// //         console.log('1');
// //         return a + b;
// // };

// // const usdCurr = 28;
// // const euroCurr = 40;

// // function convert(amount, curr) {
// //     console.log(curr*amount);

// // }

// // convert(500, usdCurr);
// // convert(500, euroCurr);

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log("done");
// }
// test();

// function doNothing() {};
// console.log(doNothing() === undefined);

// function sayHello(name) {
//     return `Привет, ${name}!`;

// }

// console.log(sayHello('Антон'));

// const arr = [];

// function returnNeighboringNumbers(int) {
//         arr[0] = int-1;
//         arr[1] = int;
//         arr[2] = int+1;
//     return arr;

// }

// returnNeighboringNumbers(5);
// console.log(arr);

// function getMathResult(a, b) {
//     if (typeof(b) !== 'number' || b <= 0) {
//         return a;
//     }

//     let str = '';

//     for (let i = 1; i <= b; i++) {
//         if (i === b) {
//             str += `${a * i}`;

//         } else {
//             str += `${a * i}---`;

//         }
//     }

//     return str;

// }

// console.log(getMathResult(5, -2));

/////////////////////методы и свойства СТРОКИ И ЧИСЛА////////////////////////////////

// const str = 'test';

// // console.log(str[2] = "d");

// console.log(str);
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase()) ;

// const fruit  = "Some fruit";
// console.log(fruit.indexOf('f'));

// const logg = "hello world";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));
// console.log(parseFloat(test));

// function calculateVolumeAndArea(V) {
//   if (typeof V !== 'number' || V < 0 || !Number.isInteger(V)) {
//     return('При вычислении произошла ошибка');
//   } else {
//     return(`Обьем куда: ${V * V * V} Площадь поверхности ${6 * (V * V)}`);
//   }
// }

// // calculateVolumeAndArea(5);

// function getCoupeNumber(numberSeat) {
//     if (typeof numberSeat !== 'number' || numberSeat < 0 || !Number.isInteger(numberSeat)){
//         return('Ошибка. Проверьте правильность введенного номера места');
//   } else if (numberSeat == 0 || numberSeat > 36) {
//     return('Таких мест в вагоне не существует');
//   }
//   else {
//     return(Math.ceil(numberSeat/4));
//   }
// }

// getCoupeNumber(21);
// function hourMinutsCost(minuts) {
//   let h = Math.floor(minuts / 60);
//   let m = minuts % 60;

//   if (h >= 2 && h <= 4) {
//     console.log(`Это ${h} часа и ${m} минут`);
//   } else if ((h >= 5 && h <= 10) || h === 0) {
//     console.log(`Это ${h} часов и ${m} минут`);
//   } else if (h === 1) {
//     console.log(`Это ${h} час и ${m} минут`);
//   }
// }

// function getTimeFromMinutes(numMinutes) {
//   if (
//     typeof numMinutes !== 'number' ||
//     numMinutes < 0 ||
//     !Number.isInteger(numMinutes)
//   ) {
//     console.log('Ошибка, проверьте данные');
//   } else if (numMinutes > 0 || numMinutes < 600) {
//     console.log(hourMinutsCost(numMinutes));
//   }
// }
// getTimeFromMinutes(200);

// function findMaxNumber(number1, number2, number3, number4) {
//   if (
//     typeof number1 !== 'number' ||
//     typeof number2 !== 'number' ||
//     typeof number3 !== 'number' ||
//     typeof number4 !== 'number' ||
//     findMaxNumber.length < 4
//   ) {
//     console.log(0);
//   } else {
//     console.log(Math.max(number1, number2, number3, number4));
//   }
// }

// findMaxNumber(5, 1, 2, 10);

// function first() {
//   // Do something
//   setTimeout(function () {
//     console.log(1);
//   }, 500);
// }

// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   console.log(`I learn: ${lang}`);
//   callback();
// }

// function done() {
//   console.log('I finished learn JS');
// }

// learnJS('JavaScript', done);

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red',
//   },
//   makeTest: function() {
//     console.log('Test');
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(bg);

// console.log(options.width);

// delete options.name;

// console.log(options);

// let count = 0;

// for (let key in options) {
//   if (typeof options[key] === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойствo ${i} имеет значение  - ${options[key][i]}`);;
//     }
//   } else {
//     console.log(`Свойствo ${key} имеет значение  - ${options[key]}`);
//     count++;
//   }
// }

// console.log(count);

// console.log(Object.keys(options).length);

// const arr = [1, 2, 3, 6, 12];

// arr.push('asas');

// arr[99] = 0;
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let y of arr) {
//   console.log(y);
// }

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');

// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));
// const arr = [11, 42, 3, 6, 12];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers  = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// // const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const numbers  = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 15;

// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = "hiBobu";
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'levejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 4, 5];

// log(...num);

// const array = ['a', 'b'];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// newObj.one = 10;

// console.log(newObj);
// console.log(q);

// const user = {};

// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

// function isEmpty(obj) {
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty());

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(menu);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//      family.forEach(function(names)) {
//         console.log(`Семья состоит из: ${names}`);
//      }
// }

// showFamily();

// const personalPlanPeter = {
//   name: 'Peter',
//   age: '29',
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%',
//     },
//     exp: '1 month',
//   },
//   personalPlanPeter.showAgeAndLangs() {

//   }
// };

// function showExperience() {
//   console.log(personalPlanPeter.skills.exp);
// }

// showExperience();

// function showProgrammingLangs() {
//   if (personalPlanPeter.skills.programmingLangs === {}) {
//     console.log('');
//   } else {
//     console.log(
//       `Язык js изучен на ${personalPlanPeter.skills.languages.js}\
// nЯзык php изучен на ${personalPlanPeter.skills.languages.php}`
//     );
//   }
// }

// showProgrammingLangs();

// let str = 'sum';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 1, 3]);

// const solder = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello!');
//     }

// };

// const john = Object.create(solder);

// console.log(john.armor);
// john.sayHello();

// const john = {
//     health: 100,
// };

// john.__proto__ = solder;

// Object.setPrototypeOf(john, solder);

// console.log(john);
// john.sayHello();

// ////////////////////////////Динамическая типизация/////////////////////////////
// console.log(String(1));

// console.log(typeof(5 + " "));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// console.log(typeof(Number('4')));

// console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt('Hello', '');

// // 0, '', null, undefined, NaN;

// let switcher  = null;

// if (switcher) {
//     console.log('working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('working...');
// }

// console.log(typeof(Boolean('4')));

// console.log(typeof(!!'s2323213213'));

// let number = 5;debugger

// function lonNumber() {
//     console.log(number);debugger
// }

// number = 6;

// lonNumber();debugger

// number = 8;

// lonNumber();debugger

function createCounter() {
  let counter = 0;

  const myFunction = function () {debugger
    counter += 1;debugger
    return counter;debugger
  };

  return myFunction;
}
debugger
const increment = createCounter();
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);





