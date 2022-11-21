"use strict";

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








