//Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
for(let output1 = 1; output1 <= 100 ; output1++) {
    console.log (output1);
}

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
for(let output2 = 100; output2 >= 1 ; output2--) {
    console.log(output2)
} 

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
const n3 = 3;
for (let i1 = 1; i1<n3; i1++){
  if(i1%2 == 1){
    console.log(i1);
  }
}

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
let n4 = 4;
for (let i2 = 1; i2 <= n4; i2++){
  if(i2%2 == 1){
    console.log(i2);
  }
}

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
let n5 = 5;
for (let i3 = 1; i3 <= n5; i3++){
    n5 = n5 + i3;
}
console.log (n5);

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
const n6 = 5;
for (i4= 1; i4 <= n6; i4++){
  result = n6 * ( n6 + 1);
}
console.log ("Kết quả: ", result);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
let n7 = 2;
let m7 = 3;
while (n7 <= m7) {
  result = n7**m7;
}
console.log ("Kết quả: ", result);

// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
let n8 = 3;
let m8 = 1;
for (i5= 1; i5 <= n8; i5++){
  m8 *= i5;
}
console.log ("Kết quả: ",m8);

// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *


// Bài 10: Xây dựng chương trình game đoán số từ 0..9(số được random)
// - Cho phép nhập từ trình duyệt với nội dung - 'Nhập số: '
// - Mỗi lần đoán sai, thông báo và cho nhập lại - 'Bạn đã đoán sai! Thử lại: '
// - Trò chơi kết thúc khi đoán đúng số được random
// - In ra kết qủa và số lần đã đoán
// VD:
// Bạn đã đoán đúng!
// Số được chọn là: <number>
// Số lần bạn đoán là: <number>//

const computerNumber = Math.floor(Math.random ()* 10);
console.log (computerNumber);
const guess = Number (prompt ("Nhập số"))
console.log ("Số đã nhập: " + guess);

while (guess != computerNumber){
  const timesOfGuessing = 0;
  totalOfGuessing = Number (timesOfGuessing + 1);
  console.log ("Số lần bạn đoán: " + totalOfGuessing);
  if (guess == computerNumber){
    alert ("Bạn đã đoán đúng! " + "Số được chọn là: " + computerNumber);
  } else {
    alert ("Bạn đã đoán sai! Thử lại:");}
}















  

