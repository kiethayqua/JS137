/* Phần 1: biến, kiểu dữ liệu, toán tử cơ bản */

// Khai báo biến thể hiện họ của anh/chị
let firstName = "Vũ";

// khai báo biến thể hiện tên của anh/chị 
let lastName = "Phương";

// Khai báo biến thể hiện tuổi của anh/chị
let myAge = 31;

// Tăng tuổi của anh chị lên 1 đơn vị và in ra màn hình
console.log(++myAge);

// Dùng cú pháp template string để in ra nội dung "<họ> <tên> - <tuổi>"
console.log(firstName + lastName + '-' + myAge);

// Khai báo biến kiểu boolean thể hiện anh/chị có phải là Developer hay không
let isDeveloper = true
console.log(isDeveloper)

/* Phần 2: Phép toán */

// Tạo 2 biến a và b là 2 số
let a = 10;
let b = 200;

// Cộng 2 số a và b và in ra kết quả
console.log("Sum a and b: ", a + b);

// Lấy số a trừ số b và in ra kết quả
console.log("difference of a and b: ", a - b);

// Bình phương số a và in ra kết quả
console.log("Square of a: ", a ** b);

// Khai báo biến c = 5 và chia lấy dư c với 2 sau đó in ra kết quả
const c = 5;
console.log("C mod 2 = ", c % 2);

// Khai báo biến d bằng một số bất kì, dùng toán tử ++ để tăng d lên 1 đơn vị, sau đó in ra kết quả
let d = 30;
console.log("Result of d: ", ++d);

// Khai báo biến e bằng một số bất kì, dùng phép gán -= để giảm biến e đi 2 đơn vị, sau đó in ra kết quả
let e = 50;
console.log("Result of e: ", e -= 2);

/* Phần 3: Toán tử so sánh */

// Khai báo biến number1 = 5 và number2 = "5"
let number1 = 5, number2 = "5"; 

// In ra màn hình kết quả so sánh number1 == number2
console.log("Number1 == Number2: ", number1 == number2);

// In ra màn hình kết quả so sánh number1 === number2
console.log("Number1 === Number2: ", number1 === number2);

// Giải thích sự khác nhau giữa so sánh == và ===
// == so sanh gia tri
// === so sanh kieu du lieu
// Khai báo 2 biến x = true, y = false
let x = true;  y = false;

// In ra màn hình kết quả của logic x && y
console.log("x && y: ", x && y);

// In ra màn hình kết qủa của logic x || y
console.log("x || y: ", x || y);

// Giải thích sự khác nhau giữa && và ||
//&& : x va y true => true
//|| : x hoac y true => true
//&& : đúng khi cả 2 cùng đúng
//|| : sai khi cả 2 cùng sai

// In ra màn hình kết quả của logic x && !y
console.log("x && !y: ", x && !y)

// Giải thích tại sao x && !y lại cho ra kết qủa true

// ! là phép phủ định nên: !true -> false và !false -> true
// x && !y <=> true && !false <=> true && true -> true


