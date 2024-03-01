// // EXAMPLE 1 - Move an Array element from one Index to another in JS

// const arr = ['css', 'js', 'ts'];

// const fromIndex = arr.indexOf('css'); // 👉️ 0
// const toIndex = 2;

// const element = arr.splice(fromIndex, 1)[0];
// console.log(element); // ['css']

// arr.splice(toIndex, 0, element);

// console.log(arr); // 👉️ ['js', 'ts', 'css']

// ------------------------------------------------------------------

// // EXAMPLE 2 - Creating a reusable function that moves an element

// function moveElement(array, fromIndex, toIndex) {
//   const element = array.splice(fromIndex, 1)[0];

//   console.log(element);

//   arr.splice(toIndex, 0, element);

//   return arr;
// }

// const arr = ['css', 'js', 'ts'];

// const fromIndex = arr.indexOf('css'); // 👉️ 0
// const toIndex = 2;

// const result = moveElement(arr, fromIndex, toIndex);
// console.log(result); // 👉️ [ 'js', 'ts', 'css' ]

// ------------------------------------------------------------------

// EXAMPLE 3 - Change the Position of an Element in an Array using `array-move`

import {arrayMoveImmutable} from 'array-move';

const arr = ['css', 'js', 'ts'];

const fromIndex = arr.indexOf('css'); // 👉️ 0
const toIndex = 2;

const newArray = arrayMoveImmutable(arr, fromIndex, toIndex);

console.log(newArray); // 👉️ [ 'js', 'ts', 'css' ]

console.log(arr); // 👉️ [ 'css', 'js', 'ts' ]
