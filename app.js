// let car = {
//   color: 'red'
// };

// colorChange(car2);

// function colorChange(theCar) {
//   theCar.color = 'yellow';
// }
// console.log("Car: " + car.color);
// console.log("Car2: " + car2.color);

// function watch(message) {
//   return message + '\n\hard word';
// }

// let message = watch("simple word");
// console.log(message);

/*
 * Просим клиента подтвердить бронь на отель
 * и сохраняем в переменную результат работы confirm
 */
// const isComing = prompt();
// console.log(isComing);

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// }else {
//   biggerNumber = num2;
// }

// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber);

// let cost;
// const subscription = 'premium';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('invalid subs type');
// }

// console.log(cost);

// const value = 5;
// if(true) {
//   console.log('block scope: ', value);
// }

// let clientCounter = 18;
// const maxClients = 25;

// while(clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';

// do {
//   password = prompt('enter passworder longer than 4 symbols', '');
// }while (password.length < 5);

// console.log('entered password: ', password);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for(let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for(let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for(let i = 0; i < 10; i += 1) {
//   if(i === 5); {
//     console.log('we are on the fifth iteration');
//     break;
//   }
// }

// const number = 10;
// for (let i = 0; i < number; i += 1); {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('odd number: ', i);
// }

// console.log(document.getElementById('header'));
// console.log(typeof document.getElementById('header'));

// document.getElementById('header').innerText = 'cat';

// let findElement = document.querySelector('.main');
// console.log(findElement);

// Not resolved /////////////

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel \
// и каждый раз добавляет введенное значение к общей сумме.
// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// :bell: Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в \
//  случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt \
//   плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
// let input;
// let total = 0;
// let message;

// input = Number(prompt('Please, enter number'));

// do {
//   total += input;
// }
// while (input !== null);

// message = `Общая сумма чисел равна ${total}`;

// console.log(message);

// function sum(input){

//   if (toString.call(input) !== "[object Array]")
//      return false;

//              for(let i=0;i<input.length;i++)
//                {
//                  if(isNaN(input[i])){
//                  continue;
//                   }
//                    total += Number(input[i]);
//                 }
//               return total;
//              }

// console.log(sum([input]));

/////////////////////////////////////

// console.log('Этого сообщения не будет в консоли.');

// cos value = 5;

// const man = 10;
// console.log(typeof man);

// const professions = {};
// professions.astronaut = "string";
// console.log(professions.astronaut);

// console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
// var num; // Declaration

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table(friends);
// // const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
// friends[i] += `-${i}`;
// }

// // for (let friend of friends) {
// //   console.log(friend);
// // }

// console.table(friends);

// const getItemsString = function(array) {

//   // Write code under this line
//   for (let i = 0; i < array.length; i += 1) {
//   let number;
//   number = i + 1;
//   let result;
//   result = array.join('${number}');
//   return result;
//   }

// let a = 6;
// let b = 4;
// c = a * b;
// console.log(typeof c);

// let a = Number(true);
// console.log(a);

// str1='Привет, '
// str2='Мир!'
// s = str1 + str2;
// console.log(s);

// let a = prompt('number');
// alert(Math.sqrt(a));

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const entries = Object.keys(hotel);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const findBestEmployee = function (employees) {
//   'use strict';
//   // Write code under this line
// const values = Object.values(employees);
// const maxValue = Math.max(...values);
// return Object.keys(employees).find(key => employees[key] === maxValue);

// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fnA = function(message, callback) {

//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function(number) {

//   console.log('this log while envoking function', number);
// }

// fnA('sdfdsfsf', fnB);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const doMath = function(a, b, callback) {

//   const result = callback(a, b);
//   console.log(result);
// };

// // const add = function(a, b) {

// //   return a + b;
// // };

// doMath(2, 3, function(x, y) { return x + y; });
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const buttonRef = document.querySelector('button');

// const handleBtnClick = function () {

//   console.log('Click on the button' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

// function addEventListener (eventType, callback) {

//   if (eventType === event ) {
//     callback();
//   }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const onGetPositionSuccess = function (position) {
//   console.log('my position envoking', position);
// }

// const onGetPositionFailure = function (error) {
//   console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionFailure);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const callback = function () {
//   console.log('i will be in 3 seconds');
// };

// console.log('first log');

// setTimeout(callback, 3000);

// console.log('log after timer');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const filter = function (array, test) {
//   const filteredArray = [];
//   for (el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }

//   return filteredArray;
// };

// const callback1 = function (value) {
//   return value >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], callback1));

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const callback2 = function (fruit) {
//   return fruit.isFresh === true;
//   // return fruit.quantity >= 120;
// };

// console.log(filter(fruits, callback2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = element => element % 2 === 0;

// function filterArray(array, cb) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;

//     // Write code under this line
//     const passed = cb(element, index, array);
//     if (passed) {
//       numbers.push(element);
//     }
//   }
//   return numbers;
// }

// const arr = [1, 1, 2];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const arr = [1, 2, 3, 4, 5, 1, 2, 5];

// console.log(arr.indexOf(1));
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Вызываем в глобальном контексте
// showThis();
// // this in showThis: Window

// const user = { name: 'Mango' };

// /*
//  * Записываем ссылку на функцию в свойство объекта
//  * Обратите внимание, что это не вызов - нет ()
//  */
// user.showContext = showThis;

// /*
//  * Вызываем функцию в контексте объекта
//  * this будет указывать на текущий объект, в контексте
//  * которого осуществляется вызов, а не на глобальный объект.
//  */

// user.showContext();
// // this in showThis: {name: "Mango", showContext: ƒ}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value; // Write code in this line
//   },
//   showOrders() {
//     return this.orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     this.balance -= cost; // Write code in this line
//     this.orders.push(order); // Write code in this line
//   },
// };
// const copyAccount = Object.assign({}, account);
// copyAccount.orders = [...account.orders];
// // копируем для автотестов ссылочные типы

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000

// console.log(account.showOrders());
// // ['order-1', 'order-2', 'order-3', 'order-4']
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   const act = action(itemName);
//   const msg = `Invoking action on ${itemName}`;
//   return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory),
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']

// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory), // Write code in this line
// );

// const arrayRemove = [...inventory.items];

// console.log(invokeRemove);
// //{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

// console.log(arrayRemove);
// // ['Knife', 'Medkit']
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write code under this line
// class User {
//   constructor(name, age, followers) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
//   }
// }

// console.log(typeof User);

// const mango = new User('Mango', 2, 20);

// console.log(mango.getInfo());

// console.log(typeof mango.getInfo);

// const poly = new User('Poly', 3, 17);

// console.log(poly.getInfo());
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Student {
//   constructor() {}
// }

// console.log(typeof Student);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write code under this line
// class Storage {
//   constructor(item) {
//     this.items = item;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     // const array = [...this.items];
//     // for (let i = 0; i < this.items.length; i += 1) {
//     //   if (array[i] !== item) {
//     //     array.push(array[i]);
//     //   }
//     //   return array;
//     // }
//     this.items = this.items.filter(items => items !== item);
//     return this.items;
//   }
// }

// console.log(typeof Storage);
// // 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//    'Нанитоиды',
//    'Пролонгер',
//    'Железные жупи',
//    'Антигравитатор'
//  ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//    'Нанитоиды',
//    'Пролонгер',
//    'Железные жупи',
//    'Антигравитатор',
//    'Дроид'
//  ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//    'Нанитоиды',
//    'Железные жупи',
//    'Антигравитатор',
//    'Дроид'
//  ] */

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write code under this line

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }

//   get value() {
//     return this._value;
//   }

//   append(str) {
//     this._value += str;
//     return this._value;
//   }

//   prepend(str) {
//     this._value = str + this._value;
//     return this._value;
//   }

//   pad(str) {
//     return this.append(str) + this.prepend(str);
//   }
// }

// console.log(typeof StringBuilder);
// // 'function'

// const builder = new StringBuilder('.');

// console.log(builder.value);

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'.

// builder.pad('=');
// console.log(builder.value); // '=^.^='
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Car {
//   // Write code under this line

//   static getSpecs(car) {
//     return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
//   }

//   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
//     this.maxSpeed = maxSpeed;
//     this.speed = speed;
//     this.isOn = isOn;
//     this.distance = distance;
//     this._price = price;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(value) {
//     return (this._price = value);
//   }

//   turnOn() {
//     this.isOn = true;
//   }

//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   accelerate(value) {
//     let speedIncreased = this.speed + value;

//     if (speedIncreased < this.maxSpeed) {
//       return (this.speed += value);
//     } else {
//       return (this.speed = this.maxSpeed);
//     }
//   }

//   decelerate(value) {
//     let speedDecreased = this.speed - value;
//     if (speedDecreased > 0) {
//       return (this.speed -= value);
//     } else {
//       this.speed = 0;
//     }
//   }

//   drive(hours) {
//     if (this.isOn) {
//       this.distance += hours * this.speed;
//       return this.distance;
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// const obj = { a: 1, b: 2, c: 3 };
// console.log(obj['c']);
// console.log(obj.c);

// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// arr = ['a', 'b', 'c', 'd'];
// let x = arr[0];
// let y = arr[1];
// let c = arr[0] + ' + ' + arr[1];
// console.log(c);

// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй,
//  а третий элемент на четвертый. Результаты сложите, присвойте переменной result.
//  Выведите на экран значение этой переменной.

// let arr = [2, 5, 3, 9];
// console.log(arr[0] * arr[1] + arr[2] * arr[3]);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr[1][0]);

// Дан объект . Выведите с его помощью слово 'jQuery'.
// const arr = { js: ['jQuery', 'Angular'], php: 'hello', css: 'world' };
// console.log(arr.js[0]);

// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'.
// Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски,
// а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду
// по английски (пусть понедельник - это нулевой день).
// Пусть теперь в переменной lang хранится язык (она принимает одно из значений
//   или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня.
//    Выведите словом день недели, соответствующий переменным lang и day.
//    То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

// const arr = {
//   ru: ['пн', 'вт', 'ср', 'чт', 'пт'],
//   en: ['mn', 'tu', 'wed', 'thue', 'fr'],
// };
// console.log(arr['ru'][0], arr['en'][2]);

// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно',
//  иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.

// let a = '1';

// if (a === '1') {
//   console.log('it true');
// } else {
//   console.log('is not true');
// }

// Если переменная test равна true, то выведите 'Верно',
//  иначе выведите 'Неверно'. Проверьте работу скрипта при test,
//   равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let test = false;
// // if ((test = true)) {
// //   console.log('is true');
// // } else {
// //   console.log('is not true');
// // }

// const tttest =
//   test === true ? console.log('is true') : console.log('is not true');

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
//  то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее.
//   Решите задачу через switch-case.
// let num = '1';
// let result;
// switch (num) {
//   case '1':
//     result = 'winter';
//     break;

//   case '2':
//     result = 'spring';
//     break;
// }

// console.log(result);

// Переворот объекта
// Давайте поменяем ключи и значения в объекте,
// например из {a: 1, b: 2, c: 3, d: 4, e: 5} сделаем {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}.

// Для этого переберем циклом for-in исходный объект и
//  создадим при этом новый объект result. Ключами нового
//  объекта сделаем элементы старого (это obj[key]), а значениями нового объекта - ключи старого (это key):
// // var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// var result = {};

// for (var key in obj) {
//   result[obj[key]] = key;
// }

// console.log(result);

// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// let day = 14;
// let decade;

// if (day <= 10) {
//   decade = 'first';
// }

// if (day > 10) {
//   decade = 'second';
// }

// if (day >= 20) {
//   decade = 'third';
// }

// console.log(decade);

// Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
//  Если это так - выведите 'да', в противном случае выведите 'нет'.
// const str = '555555';
// console.log(Number(str)); // 5
// console.log(typeof str);

// const str = '555755';

// let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

// if (sum1 === sum2) {
//   console.log(`yes`);
// } else {
//   console.log(`no`);
// }
// 'use strict';
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// function getCount(str) {
//   let vowelsCount = [];

//   for (let i = 0; i < str.length; i += 1) {
//     if (
//       str[i] === 'a' ||
//       str[i] === 'e' ||
//       str[i] === 'i' ||
//       str[i] === 'o' ||
//       str[i] === 'a' ||
//       str[i] === 'u'
//     ) {
//       vowelsCount.push(str[i]);
//     }
//   }
//   return console.log(vowelsCount);
// }

// getCount('dhaaa');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// let str = 'dfsffaaappee';
// console.log(str[0]);
// for (let i = 0; i < str.length; i += 1) {
//   if (str[i] === 'a' || str[i] === 'e') {
//     console.log(`yes!`);
//   }
// }

// const numbers = [1, 2, 3];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// 1)

// function getCount(str) {
//   let vowelsCount = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     if (
//       str[i] === 'a' ||
//       str[i] === 'e' ||
//       str[i] === 'i' ||
//       str[i] === 'o' ||
//       str[i] === 'a' ||
//       str[i] === 'u'
//     ) {
//       vowelsCount += 1;
//     }
//   }
//   return console.log(vowelsCount);
// }

// getCount('pear tree');

// 2)
// function getCount(input) {
//   var vowelsCount = 0;
//   var inputLetters = input.split('');

//   const vowels = ['a', 'e', 'i', 'o', 'u'];

//   vowels.forEach(function (vowel) {
//     inputLetters.forEach(function (inpLetter) {
//       if (inpLetter === vowel) {
//         vowelsCount++;
//       }
//     });
//   });

//   return vowelsCount;
// }

// 3)
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// 4)
// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a","e","i","o","u"];
//   for(var i = 0;i < str.length;i++){
//     for(var j=0;j<vowels.length;j++){
//       if(str[i] === vowels[j]){
//         vowelsCount++;
//       }
//     }
//   }

//   return vowelsCount;
// }

// 5)
// function getCount(str) {
//   let vowels = ['a','e','i','o','u'];
//   return str.split('').filter(letter => {
//     return vowels.includes(letter)? true : false;
//   }).length;
// }

// 6)
// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = 'aeiou';
//   return str.split("").reduce((acc,char, indx ) => {
//       if (vowels.indexOf (char) > -1) {
//         acc++
//       }
//       return acc
//   }, 0)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3];
// let sum = 0;
// const add = function (arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//   }
//   return console.log(sum);
// };

// const numbers = [1, 2, 3];
// let sum = 0;
// const add = function (arr) {
//   arr.forEach(element => (sum += element));
//   return console.log(sum);
// };

// add(numbers);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// const getUserNames = array => array;
// const { name } = users;

// console.log(getUserNames(users));

// [
//   'Moore Hensley',
//   'Sharlene Bush',
//   'Ross Vazquez',
//   'Elma Head',
//   'Carey Barr',
//   'Blackburn Dotson',
//   'Sheree Anthony',
// ];

// const users = { name: 'Moore Hensley' };
// function getUserNames({ name }) {
//   return name;
// }

// console.log(getUserNames(users));

// const object = { num: 2 };
// //function getNum (obj) { return obj.num; }
// function getNum({ num }) {
//   return num;
// }
// console.log(getNum(object));

// Write code under this line

// const users = [
//   { name: 'Moore Hensley' },
//   { name: 'Sharlene Bush' },
//   { name: 'Ross Vazquez' },
//   { name: 'Elma Head' },
//   { name: 'Carey Barr' },
//   { name: 'Blackburn Dotson' },
//   { name: 'Sheree Anthony' },
// ];
// const names = users.map(user => user.name);
// console.log(names);

// const users = [
//   { name: 'Mango', friends: 15 },
//   { name: 'Poly', friends: 4 },
//   { name: 'Ajax', friends: 27 },
//   { name: 'Chelsey', friends: 2 },
// ];

// // const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

// // console.log(users.sort(sortByActiveDays));

// const getNamesSortedByFriendsCount = array =>
//   array
//     .slice()
//     .sort((a, b) => a.friends - b.friends)
//     .map(({ name }) => name);

// console.log(getNamesSortedByFriendsCount(users));

// var stringArray = ['Blue', 'Humpback', 'Beluga'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//   return a - b;
// }

// console.log('stringArray:', stringArray.join());
// console.log('Sorted:', stringArray.sort());

// console.log('numberArray:', numberArray.join());
// console.log('Sorted without a compare function:', numberArray.sort());
// console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Sorted without a compare function:', numericStringArray.sort());
// console.log(
//   'Sorted with compareNumbers:',
//   numericStringArray.sort(compareNumbers),
// );

// console.log('mixedNumericArray:', mixedNumericArray.join());
// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log(
//   'Sorted with compareNumbers:',
//   mixedNumericArray.sort(compareNumbers),
// );

// const user1 = [
//   { name: 'Mango', skills: 'baking, baking' },
//   { name: 'Poly', skills: 'programming, reading' },
//   { name: 'Ajax', skills: 'reading' },
//   { name: 'Chelsey', skills: 'hearing' },
// ];

// const user2 = [
//   { name: 'bimba', skills: 'singing, baking' },
//   { name: 'lily', skills: 'dancing, reading' },
//   { name: 'mia', skills: 'loving' },
//   { name: 'zia', skills: 'hearing' },
// ];

// let users = [
//   { name: 'bimba', skills: ['singing', 'dancing'] },
//   { name: 'lily', skills: ['dancing', 'reading'] },
//   { name: 'mia', skills: ['loving'] },
//   { name: 'zia', skills: ['hearing'] },
// ];
// const getSortedUniqueSkills = array =>
//   array
//     .reduce((acc, user) => {
//       return [...acc, ...user.skills];
//     }, [])
//     .filter((v, i, a) => a.indexOf(v) === i)
//     .sort();
// // const getSortedUniqueSkills = array => [...array, ...array];

// console.log(getSortedUniqueSkills(users));

/*Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or 
more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.
​
Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"*/

// function spinWords(string) {
//   let arr = string.split(' ');
//   let newArrelement;
//   let newArrchanged = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length >= 5) {
//       newArrelement = arr[i].split('').reverse().join('');
//       newArrchanged.push(newArrelement);
//     }
//     if (arr[i].length < 5) {
//       newArrchanged.push(arr[i]);
//     }
//   }
//   return console.log(newArrchanged.join(' '));
// }

// spinWords('mam called to my brother');

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }

// function makeNegative(num) {
//   // if (Math.sign(num) === 1) {
//   //   num * -1;
//   // }
//   // return console.log(num);
// }

// let num = -2;
// let makeNegative = num > 0 ? num * -1 : num;
// console.log(makeNegative);

//1// function makeNegative(num) {
//   if (num > 0) {
//    return num * -1;
//  }
//  else {
//    return num;
//  }

// }

// makeNegative(2);

//2// function makeNegative(num) {
//   return -Math.abs(num);
// }
// console.log(makeNegative(2));

//3// function makeNegative(num) {
//   return num < 0 ? num : -num;
// }

//4// makeNegative = n => -Math.abs(n)

// Create a function that returns the sum of the two lowest positive numbers
// given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//1// function sumTwoSmallestNumbers(arr) {

//   let firstSmallNumber = Math.min(...arr);
//   let index = arr.indexOf(firstSmallNumber);
//   arr.splice(index, 1);
//   let secondSmallNumber = Math.min(...arr);
//   let sumOfSmallNumbers = firstSmallNumber + secondSmallNumber;
//   return console.log(sumOfSmallNumbers);
// }

//2// function sumTwoSmallestNumbers(numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   let secondSmallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number !== smallestNumber) {
//       if (number < secondSmallestNumber) {
//         secondSmallestNumber = number;
//       }
//     }
//   }

//   let sum = smallestNumber + secondSmallestNumber;
//   return console.log(sum);
// }

//3// function sumTwoSmallestNumbers(numbers) {
//   var ordered = numbers.sort(function (a, b) {
//     return a - b;
//   });
//   var result = 0;

//   for (i = 0; i < ordered.length; i++) {
//     if (i == 0) {
//       result += ordered[0];
//     }
//     if (i == 1) {
//       result += ordered[1];
//     }
//   }
//   return console.log(result);
// }

//4// function sumTwoSmallestNumbers(numbers){
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };

// sumTwoSmallestNumbers([19, 5, 42, 2, 77]);

// function findLongestWord (string = "") {
//   // Write code under this line
//   let words = string.split(" ");
//   let longestWord = words[0];

//   for(const word of words) {
//     if(word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
//}

// const array = ['🐑', 1, 2, '🐑', '🐑', 3];

// array.reduce((unique, item) => {
//   console.log(
//     // a. Item
//     item,
//     // b. Final Array (Accumulator)
//     unique,
//     // c. Condition (Remember it only get pushed if this returns `false`)
//     unique.includes(item),
//     // d. Reducer Function Result
//     unique.includes(item) ? unique : [...unique, item],
//   );

//   return unique.includes(item) ? unique : [...unique, item];
// }, []); // 👈 The initial value of our Accumulator is an empty array

// // RESULT:
// // ['🐑', 1, 2, 3];

// const array = [1, 2, 3, 4, 5];
// // const squarefunction = array.forEach(item => console.log(Math.pow(item, 2)));

// const sumFunction = array.reduce((acc, item) => acc + item, 0);
// console.log(sumFunction);

// const doubledArray = array.map(item => Math.pow(item, 2));
// console.log(doubledArray);

// const array = [0, 1, 2, 3, 4, 5];
// console.log(array.some(item => item > 0));

// const array = [-2, 0, 1, 2, 3, 4, 5];
// const negativeArray = array.filter(item => item < 0);
// console.log(negativeArray);

// const array = [-2, 0, 1, 2, 3, 4, 5];
// const evenArray = array.filter(item => item % 2 === 0);
// console.log(evenArray);

// const array = ['mom', 'daddy', 'grandpa', 'grand-grand-ma'];
// const longStringsArray = array.filter(item => item.length > 5);
// console.log(longStringsArray);

// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только подмассивы.
// const array = [1, 2, [3, 4], 5, [6, 7]];
// const subArrays = array.filter(item => Array.isArray(item));
// console.log(subArrays);

// Слить подмассивы в основной массив:
// console.log(array.flat());
// console.log([].concat(...array));

// Посчитайте количество отрицательных чисел в этом массиве.
// const array = [-2, -1, -6, 0, 1, 2, 3, 4, 5];
// const countNegative = array.reduce(
//   (acc, item) => (item < 0 ? (acc += 1) : acc),
//   0,
// );
// console.log(countNegative);

// const countNegative = array.filter(item => item < 0);
// console.log(countNegative.length);

// Recursion
// function foo(i) {
//   if (i < 0) return;
//   console.log('begin: ' + i);
//   foo(i - 1);
//   console.log('end: ' + i);
// }
// foo(3);

Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.