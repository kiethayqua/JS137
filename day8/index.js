// Find the sum of all elements.
const arr1 = [1, 2, 3, 4];
// C1:
// let sum = 0;
// for (let i = 0; i < arr1.length; i++)
// sum += arr1[i];
// console.log(sum);
// C2: using reduce method
// console.log(arr1.reduce((prev, cur) => {
//     return prev + cur;
// }, 0));

// Remove duplicates from an array. !!!!!
// C1:
// let arr2 = [1, 2, 2, 4, 5, 5, 6];
// const newArr = [];
// arr2.forEach((num) => {
//     if (!newArr.includes(num)) newArr.push(num);
// });
// console.log(newArr);

// C2:
// let uniquearr2 =[...new Set(arr2)];
// console.log (uniquearr2);


// // Find the index of a specific element in an array.
// const arr3 = ['iOS', 'Android', 'WindowPhone'];
// console.log(arr3.indexOf('iOS'));
// console.log(arr3.indexOf('Android'));
// console.log(arr3.indexOf('WindowPhone'));

// // Reverse an array.
// const arr4 = [1, 2, 3, 4, 5, 6]; 
// console.log(arr4.reverse());

// // Filter out even numbers from an array.
// const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr5.length; i++){
// if (arr5[i] % 2 === 0)
// console.log(arr5[i]);
// }

// // Find the maximum and minimum values in an array of numbers.
// const arr6 = [1, -3, 99, 120, 50, 15];
// let max = arr6[0];
// let min = arr6[0];

// for (let i = 1; i < arr6.length; i++) {
//     if (arr6[i] > max) max = arr6[i];
//     if (arr6[i] < min) min = arr6[i];
// }

// console.log(max);
// console.log(min);


// Find the common elements between two arrays.  !!!!
// const arr7 = [1, 2, 3, 5, 9];
// const arr8 = [2, 4, 1, 9, 0, 8, 9, 10];
// let newArr = [];

// for (let i = 0; i < arr7.length; i++)
//     if (arr8.indexOf(arr7[i]) !== -1 && newArr.indexOf(arr7[i]) === -1)
//     newArr.push(arr7[i]);

// console.log(newArr);


// // Map an array of numbers to their squares.
// const arr9 = [1, 2, 3, 4, 5];
// console.log(arr9.map(x => x**2));