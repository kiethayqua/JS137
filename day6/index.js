/* Phần 1: biến, kiểu dữ liệu, toán tử cơ bản */

// Khai báo biến thể hiện họ của anh/chị
const firstName = "Pham";

// khai báo biến thể hiện tên của anh/chị
const lastName = "Long";

// Khai báo biến thể hiện tuổi của anh/chị
const age = 26;

// Tăng tuổi của anh chị lên 1 đơn vị và in ra màn hình
console.log(age + 1);

// Dùng cú pháp template string để in ra nội dung "<họ> <tên> - <tuổi>"
const anoun = `My name is ${firstName} ${lastName} - ${age} years old`;
console.log(anoun);

// Khai báo biến kiểu boolean thể hiện anh/chị có phải là Developer hay không
const isDeveloper = true;

/* Phần 2: Phép toán */

// Tạo 2 biến a và b là 2 số
let a = 2;
let b = 3;

// Cộng 2 số a và b và in ra kết quả
console.log(a + b);

// Lấy số a trừ số b và in ra kết quả
console.log(a - b);

// Bình phương số a và in ra kết quả
let aaa = a ** 2;
console.log(aaa);

// Khai báo biến c = 5 và chia lấy dư c với 2 sau đó in ra kết quả
let c = 5;
console.log(c % 2);

// Khai báo biến d bằng một số bất kì, dùng toán tử ++ để tăng d lên 1 đơn vị, sau đó in ra kết quả
let d = 10;
console.log(++d);

// Khai báo biến e bằng một số bất kì, dùng phép gán -= để giảm biến e đi 2 đơn vị, sau đó in ra kết quả
let e = 12;
console.log((e -= 2));

/* Phần 3: Toán tử so sánh */

// Khai báo biến number1 = 5 và number2 = "5"
const number1 = 5;
const number2 = "5";

// In ra màn hình kết quả so sánh number1 == number2
console.log(number1 == number2);

// In ra màn hình kết quả so sánh number1 === number2
console.log(number1 === number2);

// Giải thích sự khác nhau giữa so sánh == và ===
// == là sự so sánh giá trị của 2 biến có giống nhau hay không
// === là sự so sánh giá trị của 2 biến có giống nhau và có cùng 1 kiểu dữ liệu hay không

// Khai báo 2 biến x = true, y = false
const x = true;
const y = false;

// In ra màn hình kết quả của logic x && y
console.log(x && y);
// In ra màn hình kết qủa của logic x || y
console.log(x || y);

// Giải thích sự khác nhau giữa && và ||
//|| sẽ trả về giá trị đúng nếu ít nhất 1 giá trị true
//&& sẽ trả về giá trị đúng nếu cả 2 giá trị true

// In ra màn hình kết quả của logic x && !y
console.log(x && !y);

// Giải thích tại sao x && !y lại cho ra kết qủa true
//Vì ! sẽ đổi giá trị từ true sang false và ngược lại
//&& sẽ trả về giá trị đúng nếu cả 2 giá trị true
