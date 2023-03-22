// // Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
// const n = prompt("nhap so n:");
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) console.log(i);
// }

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
// const n = prompt("nhap so n:");
// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
// const n = prompt("Nhap so n:");
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
// const n = prompt("Nhap so n:");
// let s = 0;
// for (let i = 0; i <= n; i++) {
//   s += i * (i + 1);
// }
// console.log(s);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
// const n = prompt("Nhap so n:");
// const m = prompt("Nhap so m:");
// console.log(Math.pow(n, m));

// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
// const n = prompt("Nhap so n:");
// let f = 1;
// for (let i = 1; i <= n; i++) {
//   f *= i;
// }
// console.log(f);

// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *
// for (let i = 5; i > 0; i--) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Bài 10: Xây dựng chương trình game đoán số từ 0..9(số được random)
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD:
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>
