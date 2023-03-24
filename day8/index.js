// Find the sum of all elements.
const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
    console.log('Tổng phần tử trong arr1: '+ sum);
// Remove duplicates from an array.
let arr2 = [1, 2, 2, 4, 5, 5, 6];
for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] == arr2[i++]){
        arr2.splice(i,1);
    }
}
    console.log('arr2 sau khi lược bỏ: ' + arr2);
// Find the index of a specific element in an array.
const arr3 = ['iOS', 'Android', 'WindowPhone'];
console.log('Index của phần tử WindowPhone: ' + arr3.indexOf('WindowPhone'))

// Reverse an array.
const arr4 = [1, 2, 3, 4, 5, 6];
const arr4Reversed = arr4.reverse();
console.log('arr4 sau khi đảo ngược: ' + arr4Reversed);

// Filter out even numbers from an array.
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < arr5.length; i++) {
    if(arr5[i] % 2 != 0){
        arr5.splice(i,1);
    }
}
console.log('Lọc số chẵn trong arr5: ' + arr5);


// Find the maximum and minimum values in an array of numbers.
const arr6 = [1, -3, 99, 120, 50, 15];

let max = arr6[0],min = arr6[0];

for(let i = 0; i < arr6.length; i++) {
    if(max < arr6[i]){
        max = arr6[i];
    }else if(min > arr6[i]){
        min = arr6[i];
    }
}
console.log('Số lớn nhất trong arr6: ' + max);
console.log('Số nhỏ nhất trong arr6: ' + min);

// Find the common elements between two arrays.
const arr7 = [1, 2, 3, 5, 9];
const arr8 = [2, 4, 1, 9, 0];
let common;
for (let i = 0; i < arr7.length; i++){
    for(let j = 0; j < arr8.length; j++){
        if(arr7[i] == arr8[j]){
            common = arr7[i];
        }
    }
    console.log(common);
}

// Map an array of numbers to their squares.
const arr9 = [1, 2, 3, 4, 5];

for(let i = 0; i < arr9.length; i++){
    arr9[i] **= 2;
}
console.log('Bình phương mỗi phần tử trong arr9: ' + arr9);