const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
const values = Object.values(employees);
let maxValue = Math.max(...values);
let keys = Object.keys(employees);
for(const key of keys) {
  if (employees[key] === maxValue) {
   return key;
  }
}
if(Object.keys(employees).length === 0) {
  return '';
}
}

// const findBestEmployee = function (employees) {
//   "use strict";
// //   // Write code under this line
// ​
//    let bestEmployee = "";
//    let maxValue = 0;
// ​
//    for (const [employee, value] of Object.entries(employees)) {
//      if (value > maxValue) {
//       maxValue = value;
//        bestEmployee = employee;
//      }
//    }
// ​
//    return bestEmployee;
//  };

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
//console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {}
console.log(findBestEmployee(sellers)); 
// 

// Задача 3-3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
// и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники и кол-во выполненных задач содержатся 
// как свойства объекта в формате "имя":"кол-во задач".