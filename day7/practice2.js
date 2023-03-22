//Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
// for(let output = 1; output <= 100 ; output++) {
//     console.log (output);
// }

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
// for(let output = 100; output >= 1 ; output--) {
//     console.log(output)
// } 

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
// const n = 3;
// for (let i = 1; i <= n; i++){
//   if(i%2 == 1){
//     console.log(i);
//   }
// }

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
// let n = 4;
// for (let i = 1; i <= n; i++){
//   if(i%2 == 1){
//     console.log(i);
//   }
// }

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   result = n + 1;  
// }
// console.log (result);

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
// const n = 5;
// for (i= 1; i <= n; i++){
//   result = n * ( n + 1);
// }
// console.log ("Kết quả: ", result);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
// let n = 2;
// let m = 3;
// while (n <= m) {
//   result = n**m;
// }
// console.log ("Kết quả: ", result);

// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
// let n = 3;
// let m = 1;
// for (i= 1; i <= n; i++){
//   m *= i;
// }
// console.log ("Kết quả: ",m);

// Bài 9: Vẽ tam giác có dạng sau:
// 0. ***** // 0 >> 5 (4 = 5 - 1 )
// 1. **** // 0 >> 4 (4 = 5 - 2 )
// 2. *** // 0 >> 3 (4 = 5 - 3 )
// 3. ** //0 >> 2
// 4. * // 0 >> 1

// row: 5
// column: 4
// size : 5





// Bài 10: Xây dựng chương trình game đoán số từ 0..9(số được random)
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD:
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>//

// const computerNumber = Math.floor(Math.random ()* 10);
// console.log (computerNumber);
// const guess = Number (prompt ("Nhập số"))
// console.log ("Số đã nhập: " + guess);

// while (guess != computerNumber){
//   const timesOfGuessing = 0;
//   totalOfGuessing = Number (timesOfGuessing + 1);
//   console.log ("Số lần bạn đoán: " + totalOfGuessing);
//   if (guess == computerNumber){
//     alert ("Bạn đã đoán đúng! " + "Số được chọn là: " + computerNumber);
//   } else {
//     alert ("Bạn đã đoán sai! Thử lại:");}
// }















  

