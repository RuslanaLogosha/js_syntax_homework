// Write code under this line
// const getSortedUniqueSkills = array =>
//   array
//     .reduce((acc, user) => {
//       return [...acc, ...user.skills];
//     }, [])
//     .filter((v, i, a) => a.indexOf(v) === i)
//     .sort();

// console.log(getSortedUniqueSkills(users));


const getSortedUniqueSkills = (array) =>
  array
    .reduce((acc, { skills }) => acc.concat(skills), [])
    .filter((value, index, array) => array.indexOf(value) == index)
    .sort();
​
console.log(getSortedUniqueSkills(users));

/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */

//  reduce, filter, sort
// Получи массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся
// умений и они должны быть отсортированы в алфавитном порядке.

// Слияние массивов:

// const odd = [1, 3, 5];
// const even = [2, 4, 6];

// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]

// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]
// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив.
// Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.
//////////////////////////////////////////////////////////////////////////////////////////////////////////


// Set для хранения уникальных значений. Чтобы получить массив с уникальными значениями, вы можете сделать это сейчас:

// var myArray = ['a', 1, 'a', 2, '1'];

// let unique = [...new Set(myArray)]; 

// // unique is ['a', 1, 2, '1']
// Конструктор Set принимает итерируемый объект, такой как Array, и оператор спреда ... преобразует набор обратно в массив. 
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// Например:

// function unique(arr) {
//   /* ваш код */
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// alert( unique(strings) ); // кришна, харе, :-O
//////////////////////////////////////////////////////////////////////////////////////////////////////////


//https://overcoder.net/q/2589/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%B2%D1%81%D0%B5-%D1%83%D0%BD%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5-javascript-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82%D1%8C-%D0%B4%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D1%82%D1%8B