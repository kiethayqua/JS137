/* Phần 1: biến, kiểu dữ liệu, toán tử cơ bản */
// Khai báo biến thể hiện họ của anh/chị
const surName = "Tran";
console.log(surName)
// khai báo biến thể hiện tên của anh/chị 
const firstName = "Thy";
console.log(firstName)
// Khai báo biến thể hiện tuổi của anh/chị
const age = 27;
console.log(age)
// Tăng tuổi của anh chị lên 1 đơn vị và in ra màn hình
var age1 = 27; age1++;
console.log(age1);
// Dùng cú pháp template string để in ra nội dung "<họ> <tên> - <tuổi>"
console.log(`My name is ${surName} ${firstName}; ${age} years old`)

/* Phần 2: Phép toán */

// Tạo 2 biến a và b là 2 số
const a = 7;
const b = 12;
// Cộng 2 số a và b và in ra kết quả
const sum = a + b;
console.log (sum);
// Lấy số a trừ số b và in ra kết quả
const subtract= a - b;
console.log (subtract);
// Bình phương số a và in ra kết quả
const multiply = a**2;
console.log (a**2);
// Khai báo biến c = 5 và chia lấy dư c với 2 sau đó in ra kết quả
const c = 5;
console.log(c%2)
// Khai báo biến d bằng một số bất kì, dùng toán tử ++ để tăng d lên 1 đơn vị, sau đó in ra kết quả
var d = 10; ++d;
console.log(d)
// Khai báo biến e bằng một số bất kì, dùng phép gán -= để giảm biến e đi 2 đơn vị, sau đó in ra kết quả
const e = 7; output1 = b-e;
console.log ("output1: ", output1)

/* Phần 3: Toán tử so sánh */

// Khai báo biến number1 = 5 và number2 = "5"
const number1 = 5;
const number2 = 5;
// In ra màn hình kết quả so sánh number1 == number2
console.log(number1==number2)
// In ra màn hình kết quả so sánh number1 === number2
console.log(number1===number2)
// Giải thích sự khác nhau giữa so sánh == và ===
// "==": so sánh bằng giữa các giá trị, không so sánh về kiểu dữ liệu
// "===": so sánh bằng giữa các các giá trị và dữ liệu (cùng giá trị và kiểu dữ dữ liệu => kết quả là True)

// Khai báo 2 biến x = true, y = false
const x = true;
const y = false;
// In ra màn hình kết quả của logic x && y
console.log(x&&y)
// In ra màn hình kết qủa của logic x || y
console.log(x||y)
// Giải thích sự khác nhau giữa && và ||
// "&&": 2 phần tử đúng => đúng hết; nhưng 1 trong 2 phần tử sai (x hoặc y sai) => kết quả ra False
// "||": chỉ cần 1 phần tử đúng (x hoặc y đúng) => kết quả ra true 

// In ra màn hình kết quả của logic x && !y
console.log(x&&y)
console.log(!y);
// Giải thích tại sao x && !y lại cho ra kết qủa true