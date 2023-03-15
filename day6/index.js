/* Phần 1: biến, kiểu dữ liệu, toán tử cơ bản */

// Khai báo biến thể hiện họ của anh/chị
const firstName = "Nguyen";
// khai báo biến thể hiện tên của anh/chị 
const lastName = "Thanh Dat";
// Khai báo biến thể hiện tuổi của anh/chị
let myAge = 25;
// Tăng tuổi của anh chị lên 1 đơn vị và in ra màn hình
myAge = myAge + 1;
console.log(myAge);
// Dùng cú pháp template string để in ra nội dung "<họ> <tên> - <tuổi>"
console.log(`My full name is ${firstName} ${lastName}, I'm ${myAge} years old`);
// Khai báo biến kiểu boolean thể hiện anh/chị có phải là Developer hay không
let isDeveloper = true;

/* Phần 2: Phép toán */

// Tạo 2 biến a và b là 2 số
let a = 3;
let b = 2;
// Cộng 2 số a và b và in ra kết quả
console.log(`So a: ${a}; So b: ${b}`);
console.log(`a + b = ${a+b}`);
// Lấy số a trừ số b và in ra kết quả
console.log(`a - b = ${a-b}`);
// Bình phương số a và in ra kết quả
console.log(`a ^ 2 = ${a*a}`);
// Khai báo biến c = 5 và chia lấy dư c với 2 sau đó in ra kết quả
let c = 5;
console.log(`c % 2 = ${c%2}`);
// Khai báo biến d bằng một số bất kì, dùng toán tử ++ để tăng d lên 1 đơn vị, sau đó in ra kết quả
let d = 12;
d += 1;
console.log(`d++ = ${d}`);
// Khai báo biến e bằng một số bất kì, dùng phép gán -= để giảm biến e đi 2 đơn vị, sau đó in ra kết quả
let e = 12;
e -= 2;
console.log(`d -= ${e}`);

/* Phần 3: Toán tử so sánh */

// Khai báo biến number1 = 5 và number2 = "5"
let number1 = 5;
let number2 = "5";
// In ra màn hình kết quả so sánh number1 == number2
console.log(`${number1 == number2}`);
// In ra màn hình kết quả so sánh number1 === number2
console.log(`${number1 === number2}`);
// Giải thích sự khác nhau giữa so sánh == và ===
        // Toán tử == ép kiểu rồi so sánh, toán tử === ko ép kiểu mà so sánh kiểu và giá trị của đối tượng so sánh`);
// Khai báo 2 biến x = true, y = false
let x = true;
let y = false
// In ra màn hình kết quả của logic x && y
console.log(`${x && y}`);
// In ra màn hình kết qủa của logic x || y
console.log(`${x || y}`);
// Giải thích sự khác nhau giữa && và ||
        // Toán tử && chỉ true khi các phần tử của nó đều true, || chỉ false khi các phần tử của nó đều false
// In ra màn hình kết quả của logic x && !y
console.log(`${x && !y}`);
// Giải thích tại sao x && !y lại cho ra kết qủa true
        // ! là phủ định, !y là phủ định của y, phủ định của false là true



