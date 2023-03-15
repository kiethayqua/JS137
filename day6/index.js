/* Phần 1: biến, kiểu dữ liệu, toán tử cơ bản */

// Khai báo biến thể hiện họ của anh/chị
let firstName = 'Nguyen';
console.log(firstName);
// khai báo biến thể hiện tên của anh/chị 
let name1 = 'Tung';
console.log(name1);
// Khai báo biến thể hiện tuổi của anh/chị
let age1 = 27;
console.log(age1);

// Tăng tuổi của anh chị lên 1 đơn vị và in ra màn hình
age1++;
console.log(age1);
// Dùng cú pháp template string để in ra nội dung "<họ> <tên> - <tuổi>"
const name = 'Tung';
const age = '27';
console.log(`My name is ${name} ${age} years old`);
// Khai báo biến kiểu boolean thể hiện anh/chị có phải là Developer hay không
const isDev = true;

/* Phần 2: Phép toán */

// Tạo 2 biến a và b là 2 số
let a = 3;
let b = 2;

// Cộng 2 số a và b và in ra kết quả
console.log(a + b);
// Lấy số a trừ số b và in ra kết quả
console.log(a - b);
// Bình phương số a và in ra kết quả
console.log(a ** 2);
// Khai báo biến c = 5 và chia lấy dư c với 2 sau đó in ra kết quả
let c = 5;
console.log(c % 2);
// Khai báo biến d bằng một số bất kì, dùng toán tử ++ để tăng d lên 1 đơn vị, sau đó in ra kết quả
let d = 7;
console.log(++d); //++d cộng trước r hiện ra giá trị sau khi cộng
// Khai báo biến e bằng một số bất kì, dùng phép gán -= để giảm biến e đi 2 đơn vị, sau đó in ra kết quả
let e = 9;
console.log(e -= 2);

/* Phần 3: Toán tử so sánh */

// Khai báo biến number1 = 5 và number2 = "5"
let number1 = 5;
let number2 = "5";
// In ra màn hình kết quả so sánh number1 == number2
console.log(number1 == number2);
// In ra màn hình kết quả so sánh number1 === number2
console.log(number1 === number2);
// Giải thích sự khác nhau giữa so sánh == và ===

// Khai báo 2 biến x = true, y = false
const x = true;
const y = false;
// In ra màn hình kết quả của logic x && y
console.log(x && y);
// In ra màn hình kết qủa của logic x || y
console.log(x || y);
// Giải thích sự khác nhau giữa && và ||

// In ra màn hình kết quả của logic x && !y
console.log(x && !y);
// Giải thích tại sao x && !y lại cho ra kết qủa true




