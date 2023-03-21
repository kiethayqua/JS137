// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần

// for (i = 1; i <= 100; i++)
// console.log(i);

// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần

// for (i = 100; i >= 1; i--)
// console.log(i);

// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n

// let n = prompt('Nhập vào giá trị của số nguyên n: ')

// for (i = 1; i <= n; i++)

// if(i % 2 === 0){
//     console.log(i);
// }

// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n

// let n = prompt('Nhập vào giá trị của số nguyên n: ')

// for (i = 1; i <= n; i++)

// if(i % 2 !== 0){
//     console.log(i);
// }

// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n

// let n = prompt('Nhập vào giá trị của số nguyên n: ');
// let sum = 0;

// for (i = 1; i <= n; i++)
// sum+=i;

// console.log(sum);


// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).

// let n = prompt('Nhập vào giá trị của số nguyên n: ');
// let S = 1;

// for (i = 2; i <= n; i++)
// S*=i;

// console.log(S);

// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8

// let n = prompt('Nhập vào giá trị của số nguyên n: ');
// let m = prompt('Nhập vào giá trị của số nguyên m: ');
// const a = n;

// for (i = 1; i < m; i++)
// n = n*a;
// console.log(n);


// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6

// let s = 1;
// let n = prompt('Nhập vào giá trị của số nguyên n: ');
// for (i = 1; i <= n; i++)
// s *= i;
// console.log(s);

// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *



// for (i = 5; i >= 0; i--){
//     let s = '';
//     for(j = 1; j <= i; j++)
//     s += '*';
// console.log(s);
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

// let randomNumber = Math.floor(Math.random() * 10);
// let count = 1;
// alert('Chào mừng đến với trò chơi đoán số!');
// alert('Hãy nhập vào số bạn chọn');
// let m = prompt();

// while (m != randomNumber) { 
//      count ++;
//      alert('Bạn đã đoán sai! Mời đoán lại:')
//      let n = prompt();
//      m=n;
// }

//     alert('Bạn đã đoán đúng!');
//     alert('Số được chọn là: ' + m);
//     alert('Số lần bạn đoán là: ' + count); 
      

