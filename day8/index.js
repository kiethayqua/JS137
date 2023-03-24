// Find the sum of all elements.
const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
for(let k = 0; k < arr1.length; k++){
    sum += arr1[k];
}
console.log(sum)

// Remove duplicates from an array.
const arr2 = [1, 2, 2, 4, 5, 5, 6];
removed1 = arr2.splice (1,2); //KQ: 1,4,5,5,6
removed2 = arr2.splice (2,2);
console.log (arr2);

// Find the index of a specific element in an array.
const arr3 = ['iOS', 'Android', 'WindowPhone'];

// Reverse an array.
const arr4 = [1, 2, 3, 4, 5, 6];
arr4.reverse ();
console.log(arr4);

// Filter out even numbers from an array.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even_numbers = [];
for (let i = 0; i < arr5.length; i++){
    if(arr5[i] % 2 === 0){
        even_numbers.push(arr5[i])
    }
}
console.log(even_numbers)

// Find the maximum and minimum values in an array of numbers.
const arr6 = [1, -3, 99, 120, 50, 15];
let min = arr6 [0]; //Giả định vị trí số nhỏ nhất là số đầu tiên của array
/*So sánh từng index trong array VS array [0] để tìm ra giá trị nhỏ nhất*/
for( let i = 1; i <= arr6.length; i++){ 
    if(min > arr6[i]) {
        min = arr6[i];
        console.log(min)
}
}

// Find the common elements between two arrays.
const arr7 = [1, 2, 3, 5, 9];
const arr8 = [2, 4, 1, 9, 0];
const general_arr = arr7.concat(arr8);

for (let i = 0; i <= general_arr.length; i++){
    for(let j = i + 1; j < general_arr.length; j++) {
        if(general_arr[i] == general_arr[j])
        console.log (general_arr[j])
    }  
}

// Map an array of numbers to their squares.
const arr9 = [1, 2, 3, 4, 5];
const map = arr9.map(index => index *2)
console.log(map)