// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
// for (let i = 1; i <= 100; i++) console.log(i);

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
// for (let i = 100; i >= 1; i--) console.log(i);
// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
// const n = 10;
// for (let i = 1; i <= n; i++) if (i % 2 === 0) console.log(i);

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
// const n = 10;
// for (let i = 1; i <= n; i++) if (i % 2 !== 0) console.log(i);

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
// const n = 4;
// let sum = 0;
// for (let i = 1; i <= n; i++) sum += i;
// console.log(sum);

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
// const n = 4;
// let sum = 0;
// for (let i = 1; i <= n; i++) sum += i * (i + 1);
// console.log(sum);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
// const n = 2, m = 3;
// let result = 1;
// for(let i = 0; i < m; i++) result *= n;
// console.log(result);

// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
// const n = 3;
// let result = 1;
// for (let i = 1; i <= n; i++) result *= i;
// console.log(result);

// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *

// const n = 5;
// for (let i = 0; i < n; i++) {
//     let str = '';
//     for (let j = 0; j < n - i; j++) {
//         str += '*';
//     }
//     console.log(str);
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

// const randomNumber = Math.floor(Math.random() * 10);
// console.log(randomNumber);
// let guess = Number(prompt('Nhập số: '));
// let count = 1;

// while (guess !== randomNumber) {
//     count++;
//     guess = Number(prompt('Bạn đã đoán sai! Thử lại: '));
// }

// alert(`
// Bạn đã đoán đúng!
// Số được chọn là: ${randomNumber}
// Số lần bạn đoán là: ${count}
// `);