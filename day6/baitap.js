        // Phần 1
const firstName="Nguyen";
const lastName="Ta";
let age=77;
age++;
console.log(age);
console.log(`${firstName} ${lastName} - ${age}`);
const isDeveloper = !true;
console.log(isDeveloper);

         // Phần 2
const a=3;
const b=2;
console.log("a+b=" + a+b);
console.log("a-b=" + (a-b));
console.log("a^2=" + a**2);
const c=5;
console.log("c/2 dư "+ c%2);
let d=75557;d++;
console.log("d=" + d);
let e=5; e-=2;
console.log("e=" + e);

         // Phần 3
const number1=5;
const number2="5";
console.log(number1==number2);
console.log(number1===number2);
//      Sự khác nhau giữa == và === 
// * So sánh == : Chỉ so sánh giá trị.
// * So sánh ===: So sánh cả giá trị VÀ KIỂU DỮ LIỆU.
x=true;
y=false;
console.log(x&&y);
console.log(x||y);
//       Sự khác nhau giữa && và ||
// &&: Đúng khi tất cả điều kiện đều đúng.
// ||: Đúng khi có ít nhất 1 điều kiện đúng.

console.log(x&&!y);
// Kết quả là true vì:
// x = true;
// !y = !false = true;
// true && true=>true