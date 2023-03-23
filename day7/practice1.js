// tạo biến age với giá trị tuổi của bạn
const myAge = 24;

// tạo biến name với giá trị là tên của bạn
const myName = 'Kiet';

// tạo biến greeting với giá trị là "Hello, My name is <name>, <age> years old!", in ra kết quả
const greeting = `Hello, My name is ${myName}, ${myAge} years old!`;

// Kiểm tra trong biến greeting có tồn tại từ "Hello" hay không, không phân biệt chữ hoa chữ thường, in ra kết quả
console.log("check Hello: ", greeting.toLowerCase().includes('HeLlo'.toLowerCase()));

// Tạo biến sayHi thay thể "Hello" trong greeting thành "Hi", in ra màn hình
const sayHi = greeting.replace("Hello", "Hi");
console.log("sayHi: ", sayHi);

/*
Tạo biến mark = 9.7 và thực hiện:
- Làm tròn thành 10 và in ra
- Làm tròn về 9 và in ra
*/
const mark = 9.7;
console.log(Math.ceil(mark));
console.log(Math.floor(mark));

// Tạo 1 biến lưu độ dài cạnh của hình vuông và tính diện tích hình vuông đó sau đó in ra màn hình
const edge = 5;
console.log(edge * edge);

/*
Viết cấu trúc điều kiện kiểm tra độ tuổi lái xe với điều kiện sau: 
- Nếu lớn hơn hoặc bằng 18 tuổi in ra màn hình: "Bạn đã đủ tuổi lái xe"
- Nếu nhỏ hơn 18 tuổi in ra màn hình: "Bạn chưa đủ tuổi lái xe"
*/
if (myAge >= 18) {
    // todo
}
else if (myAge > 65) {
    // 
} else {

}

/*
Viết cấu trúc switch-case kiểm tra số chẳn và lẻ
*/
// const numberInput = Number(prompt("Nhập số: "));
// switch (numberInput % 2) {
//     case 0:
//         alert(`${numberInput} là số chẳn`);
//         break;
//     case 1:
//         alert(`${numberInput} là số lẻ`);
//         break;
//     default:
//         alert("Không phải số hoặc không phải là số nguyên");
//         break;
// }
