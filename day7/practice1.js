// // tạo biến age với giá trị tuổi của bạn
// let age =27;
// console.log(age);
// tạo biến name với giá trị là tên của bạn
// let name = "Thy";
// console.log(name);
// // tạo biến greeting với giá trị là "Hello, My name is <name>, <age> years old!", in ra kết quả
// let greeting = `Hello, My name is ${name}; ${age} years old!`;
// console.log(greeting);
// // Kiểm tra trong biến greeting có tồn tại từ "Hello" hay không, không phân biệt chữ hoa chữ thường, in ra kết quả
// let testString ="Hello";
// // console.log("check Hello:", greeting.includes(testString))
// console.log ("check Hello: ", greeting.toLowerCase().includes("hello".toUpperCase()))

// // Tạo biến sayHi thay thể "Hello" trong greeting thành "Hi", in ra màn hình
// let sayHi = "Hi";
// console.log("check sayhi: ", greeting.replace("Hello","Hi"));
// //hoặc
// let sayHi2 = greeting.replace ("Hello", "Hi");
// console.log("check sayhi2: ",sayHi2)
/*
Tạo biến mark = 9.7 và thực hiện:
- Làm tròn thành 10 và in ra
- Làm tròn về 9 và in ra
*/
//Mutable vs Immutable
// const mark = 9.7;
// console.log(Math.ceil(mark)) //console không làm thay đổi giá trị ban đầu
// console.log(Math.floor(mark))
//Thay đổi giá trị ban đầu
// const mark = 9.7;
// const ceilMark = Math.ceil (mark); // kết quả = 10;
// console.log(Math.floor(ceilMark)); // không ra kq do "10 mà làm tròn xuống 9" 


// Tạo 1 biến lưu độ dài cạnh của hình vuông và tính diện tích hình vuông đó sau đó in ra màn hình
// const square = 5;
// console.log (square * square)

/*
Viết cấu trúc điều kiện kiểm tra độ tuổi lái xe với điều kiện sau: 
- Nếu lớn hơn hoặc bằng 18 tuổi in ra màn hình: "Bạn đã đủ tuổi lái xe"
- Nếu nhỏ hơn 18 tuổi in ra màn hình: "Bạn chưa đủ tuổi lái xe"
*/
// const checkAge = 40;
// if(checkAge >= 18){
//     console.log("Bạn đã đủ tuổi lái xe");
// }else {
//     console.log("Bạn chưa đủ tuổi lái xe");
// }
/*
Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
*/
// const numberInput = prompt("Nhập số: ");
// switch(numberInput%2){
//     case 0:
//         alert (`${numberInput} là số chẵn`)
//         break;
//     case 1:
//         alert (`${numberInput} là số lẻ`);
//         break;
//     default:
//         alert (`Không phải là số hoặc không phải số nguyên`);
// }
