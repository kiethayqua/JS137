// // Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần

// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }

// // Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần

// for (let i = 100; i > 0; i--){
//     console.log(i);
// }

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n

// const n = Number(prompt("Nhập vào số bất kì:"));
// for (let i = 1; i <= n; i+=1){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n

// const n = Number(prompt("Nhập vào số bất kì:"));
// for (let i = 1; i <= n; i+=1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n

// const n = Number(prompt('Nhập vào số bất kì:'));
// let sum = 0;
// for (let i = 1; i <= n; i++){
//     sum += i;
// }
// console.log(sum);


// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).

// const n = Number(prompt('Nhập vào số nguyên:'));
// let sum = 0;
// let a;
// for (let i = 1; i <= n; i++){
//     a = i*i+i;
//     sum+=a ;
// }
// console.log(sum);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8

// const n = Number(prompt('Nhập vào số nguyên n:'));
// const m = Number(prompt('Nhập vào số nguyên m:'));
// console.log(n**m);


// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6

// const n = Number(prompt('Nhập vào số nguyên:'));
// let a = 1;
// for (let i = n; i > 1; i--){
//     a = a*i*(--i);
// }
// console.log(a);

// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *

// const a = 5;

// for(let i = 1; i <= a; i++){
//     for(let j = 1; j <=i; j++){
//         document.write("*");
//     }
//     document.write("<br />");
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

// const i = Math.floor(Math.random() * 10);
// let a = Number(prompt('Nhập số trong khoảng 1-9:'));
// let count = 1;


// while (a != i){
//     count++;
//     let b = Number(prompt('Bạn đã đoán sai! Thử lại:'));
//     a = b;
// }
//     console.log('Bạn đã đoán đúng!');
//     console.log('Số được chọn là:'+ a);
//     console.log('Số lần bạn đoán là:'+ count);
