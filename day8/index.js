// // Find the sum of all elements.
// const arr1 = [1, 2, 3, 4, 5];

// Remove duplicates from an array.
let arr2 = [1, 2, 2, 4, 5, 5, 6];
let newArr= [];
arr2.forEach(function(number){if(!newArr.includes(number)){newArr.push(number)}})
console.log(newArr)

// // Find the index of a specific element in an array.
// const arr3 = ['iOS', 'Android', 'WindowPhone'];

// // Reverse an array.
// const arr4 = [1, 2, 3, 4, 5, 6];

// // Filter out even numbers from an array.
// const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Find the maximum and minimum values in an array of numbers.
// const arr6 = [1, -3, 99, 120, 50, 15];

// // Find the common elements between two arrays.
// const arr7 = [1, 2, 3, 5, 9];
// const arr8 = [2, 4, 1, 9, 0];

// // Map an array of numbers to their squares.
// const arr9 = [1, 2, 3, 4, 5];

// let danhTinhHao = {
//     id: 1,
//     name: "Hao",
//     age: 23,
//     School: "MindX",
// }
// for(let thuocTinh in danhTinhHao){
//     console.log("đặc điểm của thuộc tính " + thuocTinh + " có giá trị là "+ danhTinhHao[thuocTinh]);
// }
// let a = 0
// let b=0
//  function nhapSo(label){
//      let input = NaN;
//      do{
//          input=Number(prompt("Nhập số " + label + " vào đây nhé"));
//           console.log(input)
//       }while(isNaN(input));
//       return input
//   }
// a = nhapSo("A")
// b = nhapSo("B")
// console.log(a+b)

// function nhapSo(a,b){return (a+b)}
// console.log(nhapSo(20,30))

// nhapSo()
// let input = NaN
// function nhapSo(){
//     do{
//         input=prompt("Mời bạn nhập số");
//     }while(
//         input<0 && isNaN(input)
//     );
//     return input
// }



// setInterval(function(){
//     console.log("Sau 3 giây")
// },1000)

// function workEverysecond(second,work){
//     setTimeout(work,second);
// }
// function sayHello(){console.log("Xin Chào")};
// workEverysecond(5000, sayHello);
// console.log(sayHello)

// let sum=(a,b,c)=> {return a+b+c};
// sum(1,2,3)
// console.log(sum(1,2,3))