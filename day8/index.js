// Find the sum of all elements.
const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i1 = 0; i1 < arr1.length; i1++) sum += arr1[i1];
Alert(sum);
// Remove duplicates from an array.
let arr2 = [1, 2, 2, 4, 5, 5, 6];
function UniqueArray(array) {
    let arrTemp = [];
    for (let i = 0; i < array.length; i++)
        if (!arrTemp.includes(array[i])) arrTemp.push(array[i]);
    return arrTemp;
}
// Find the index of a specific element in an array.
const arr3 = ['iOS', 'Android', 'WindowPhone'];

let txt3 = "";
for (let i3 = 0; i3 < arr3.length; i3++) {
    txt3 += `${arr3[i3]}'s index is ${i3}; `;
}
alert(txt3);
// Reverse an array.
const arr4 = [1, 2, 3, 4, 5, 6];
alert(arr4.reverse());
// Filter out even numbers from an array.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function isEven(value) {
    if (value % 2 == 0) return true;
    return false;
}

let arrEven = [];
for (let i5 = 0; i5 < arr5.length; i5++)
    if (isEven(arr5[i5])) arrEven.push(arr5[i5]);
alert(arrEven);

// Find the maximum and minimum values in an array of numbers.
const arr6 = [1, -3, 99, 120, 50, 15];
arr6.sort(function (a, b) { return a - b });
alert(`Min is ${arr6[0]}; max is ${arr6[arr6.length - 1]}`)
// Find the common elements between two arrays.
const arr7 = [1, 2, 3, 5, 9];
const arr8 = [2, 4, 1, 9, 0];
let arrTemp1 = [];
for (let i7 = 0; i7 < arr7.length; i7++)
    for (let i8 = 0; i8 < arr8.length; i8++)
        if (arr7[i7] === arr8[i8]) arrTemp1.push(arr7[i7]);
alert(UniqueArray(arrTemp1));
// Map an array of numbers to their squares.
const arr9 = [1, 2, 3, 4, 5];
let arrMap = [];
for (let i9 = 0; i9 < arr9.length; i9++)
    arrMap.push(Math.pow(arr9[i9], 2));
alert(arrMap);