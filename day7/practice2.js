// Bài 1: In ra màn hình các số từ 1..100 theo thứ tự tăng dần
// for(i=0;i<=100;i++){
//     console.log(i);
// }
// Bài 2: In ra màn hình các số từ 1..100 theo thứ tự giảm dần
//  for(i=100;i>=0;i--){
//     console.log(i);
//  }
// Bài 3: Cho số nguyên n bất kì, in các số chẵn từ 1..n
// let n =10;
// let result=0;
// for(i=0;i<=n;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// Bài 4: Cho số nguyên n bất kì, in các số lẻ từ 1..n
// let n =20;
// for(i=0;i<=20;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }
// Bài 5: Cho số nguyên n bất kì, tính tổng các số từ 1..n
// 1+2+3+4+5+6+7
// let result=0;
// let n=7;
// for(i=0;i<=n;i++){
//     result=result+i;
// }
// console.log(result);

// Bài 6: Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
//n=7= 1.2 + 2.3 + 3.4 + 4.5 + 5.6 + 6.7 + 7.8
//
// let result=0;
// let n=7;
// for(let i=1;i<=7;i++){
//     result=result+i*(i+1);
//     console.log(result);
// }
// console.log(result);
//vòng lặp 1 :result= 1 + 1*(1+1)=3
//vòng lặp 2 :result= 3 + 2*(2+1)=9
//console.log(result6);
// Bài 7: Cho các số nguyên n và m bất kì, tính n^m VD: 2^3 = 8
// 5*5*5*5*5*5*5
// let result=1;
// let n=5;
// let m=7;
// for(let i=0;i<=m;i++){
//     result=result*n;
//     console.log(result);
// }
// console.log(result);


// Bài 8: Cho số nguyên n bất kì, tính n! VD: 3! = 1*2*3 = 6
// let n=3;
// let result=1;
// for(i=1;i<=3;i++){
//     result=result*i;
// }
// console.log(result);
// Bài 9: Vẽ tam giác có dạng sau:
// *****
// ****
// ***
// **
// *
// let i;
// let j;
// let char=" ";
// for(i=0;i<5;i++){
//     for(j=0;j<i;j++){
//         char+="*";
//         console.log(char);
//     }
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