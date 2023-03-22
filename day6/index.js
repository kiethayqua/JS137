/* Phần 1: biến, kiểu dữ liệu, toán tử cơ bản */

// Khai báo biến thể hiện họ của anh/chị

// khai báo biến thể hiện tên của anh/chị 

// Khai báo biến thể hiện tuổi của anh/chị

// Tăng tuổi của anh chị lên 1 đơn vị và in ra màn hình

// Dùng cú pháp template string để in ra nội dung "<họ> <tên> - <tuổi>"

// Khai báo biến kiểu boolean thể hiện anh/chị có phải là Developer hay không


/* Phần 2: Phép toán */

// Tạo 2 biến a và b là 2 số

// Cộng 2 số a và b và in ra kết quả

// Lấy số a trừ số b và in ra kết quả

// Bình phương số a và in ra kết quả

// Khai báo biến c = 5 và chia lấy dư c với 2 sau đó in ra kết quả

// Khai báo biến d bằng một số bất kì, dùng toán tử ++ để tăng d lên 1 đơn vị, sau đó in ra kết quả

// Khai báo biến e bằng một số bất kì, dùng phép gán -= để giảm biến e đi 2 đơn vị, sau đó in ra kết quả


/* Phần 3: Toán tử so sánh */

// Khai báo biến number1 = 5 và number2 = "5"

// In ra màn hình kết quả so sánh number1 == number2

// In ra màn hình kết quả so sánh number1 === number2

// Giải thích sự khác nhau giữa so sánh == và ===

// Khai báo 2 biến x = true, y = false

// In ra màn hình kết quả của logic x && y

// In ra màn hình kết qủa của logic x || y

// Giải thích sự khác nhau giữa && và ||

// In ra màn hình kết quả của logic x && !y

// Giải thích tại sao x && !y lại cho ra kết qủa true


//prompt(" khi nào giàu")

// let person= prompt("Mời bạn nhập tên của mình");
// let text="";
// if(person==null || person==''){
//     text="huhu bạn không muốn nhập tên hả"
// }
// else{
//     text="Xinchao" + person +"!";
// }
// console.log(text);

// let myString = "lam sao biet khi nào sao"
// console.log(myString.lastIndexOf("sao"));
// console.log(myString.length)
// console.log(myString.slice(8,12))
// let hao= " hoc mindx truong nay day nhanh qua"
// console.log(hao.slice(11));
// let duAn="                   hoc js tại mindx nhung js kho qua                  "
// console.log(duAn.replace(/js/g,"Javascrip"));
// console.log(duAn.toUpperCase());
// console.log(duAn);
// duAn=duAn.trim();
// console.log(duAn);
// console.log(duAn.split(" "));

// let number=20;
// let number2= number / "fh";
// console.log(number2);
// console.log(isNaN(number2));
// number= number.toString();
// console.log(number);
// number=Number(number);
// console.log(number)
// console.log(typeof(number));
// let Pi= 305.238974;
// console.log(Pi.toFixed(3))


// console.log(myString.slice(0,3));
// let badmintonRacket=[
//     "Yonex",
//     "Mizuno",
//     "Lining",
//     "Victor",
// ]
// console.log(typeof(badmintonRacket))
// console.log(badmintonRacket[2]);
// console.log(badmintonRacket.length);
// console.log(badmintonRacket.toString())
// console.log(badmintonRacket.join(""))

// console.log(badmintonRacket.pop())
// console.log(badmintonRacket);
// //Array
// let truongHoc=[
//     "MindX",
//     "Trần Khai Nguyên",
//     "Kim Đồng",
// ]

// //String
// let truongHoc1="Tran khai nguyên";

// //Array
// console.log(truongHoc.pop());
// console.log(truongHoc);

// //String
// console.log(truongHoc1.slice(3,5));
// console.log(truongHoc1)
// console.log(truongHoc.push("Vihao","Vihien"));
// console.log(truongHoc);
// console.log(truongHoc.shift())
// console.log(truongHoc)
// console.log(truongHoc.pop())
// console.log(truongHoc.pop())
// console.log(truongHoc.pop())
// console.log(truongHoc)
// console.log(truongHoc.length)
// let family=[
//     "Ba",
//     "Me",
//     "Anh",
//     "Chi",
// ]
// console.log(family.pop());
// console.log(family);
// console.log(family.shift());
// console.log(family);
// console.log(family.shift());
// console.log(family.shift());
// console.log(family);
// console.log(family.shift());
// console.log(family.unshift("Ba", "Me"));
// console.log(family);
// console.log(family.push("Anh","Chi"));
// console.log(family.splice(2,0,"Em"));
// console.log(family);
// console.log(family.splice(2,2));
// console.log(family);
// console.log(family.toString());
// console.log(family);

// let stringCuatoi ="co cai nay cai kia";
// console.log(stringCuatoi.split(' '));
// console.log(stringCuatoi);
// console.log(typeof stringCuatoi)

// console.log(family);
// console.log(Array.isArray(family));
// console.log(family.splice(1,1,"Anh"));
// console.log(family);

// let family2=[
//     "1",
//     "2",
//     "3",
//     "4",
// ]
// console.log(family2.splice(1,1,"200"));
// console.log(family2);

// alert("Chào các bạn");
// // function thongBao(cacbanoi){
// //     alert(cacbanoi);
// // }

// // thongBao("ádasdasd");
// // thongBao()

// // function thongbao(tinnhan){
// //     console.log(tinnhan)
// // };

// // thongbao("vihao");
// // thongbao("vihao 2");

// // function vidu (nhapten){
// // console.log(nhapten);
// // }
// // vidu('HAO');

// // function thongBao(thongBaoalert, text){
// //     alert(thongBaoalert);
// //     console.log(text);

// // }
// // thongBao("chào bạn", "Hào");
// // thongBao("2")

// // function tinhToan(x,y,z,l,j){
// //     console.log(arguments.length);
// //     console.log("kết quả của 6 số là" + (x+y+z+l+j)/6);
// // }
// // tinhToan(6,7,8,9,10);
// // console.log("Anh oi", "anh oi", "anh oi");

// // alert("vi sao");

// // function tinhTong(){
// //     console.log(arguments);
// //     console.log(1+2);
// // }
// // tinhTong(1,2,3,4,5);

// // function tinhTong(){
// // console.log(arguments)
// // for( let a of arguments){
// //     console.log(a);
// // }
// // }
// // tinhTong("Hào","Kiệt","Hải","Duy")


// // function checkArgument(){
// //     for(var b of arguments){
// //         console.log(b);
// //     }
// //     console.log(b);
// // }
// // checkArgument("Vi","Hai","Chi");
// let isConfirm = confirm("Bạn đã đủ 18 tuổi chưa");
// console.log(isConfirm)

// function sum(number1, number2){
//     let phepcong = number1 + number2;
//     return phepcong;
// }
// sum(10,20);
// let ketQua1= sum(10,20);
// console.log(ketQua1);

// //5! = 1*2*3*4*5
// //
// function giaiThua(number){
//     let result=1;
//     for(i=1;i<=number;i++){
//         result=result*i;
//     }
//     console.log(result);
//     return result;
// }
// giaiThua(5);
// let resultGiaithua5 = giaiThua(5);
// console.log(resultGiaithua5);

// thuNghiem1("cố lên nha Hào ơi")

// function thuNghiem1(thuNghiem){
//     console.log(thuNghiem);
// }

// thuNghiem1("chỉ là thử nghiệm");


// let thunghiem2= function(thunghiem3){
//     console.log(thunghiem3);
// }
// console.log(thunghiem2(2));

let names=[
    "Hào",
    "Vinh",
    "Kiệt",
]
// ;
// console.log(names);

// //truy xuất giá trị 1 phần tử bất kỳ trong mảng
// console.log(names[1]);// lấy phần tử thứ 2 trong mảng
// names[0]="Hello"
// names[4]="Goopdbye"

// console.log(names);

// let array1 = ["a", "b", "c"];
// let array2 = ["a", "b", "c"];
// console.log(typeof (array1));
// console.log(array1+ array2);// chương trình tự động ép mảng về string khi thực hiện phép cộng
// // primitive datatype : string, number, boolean, null
//duyệt mảng
// cách 1: dùng for let i=0
// for(let i=0; i<names.length;i++){
//     console.log(names[i]);
// }
const number = [1, 7, 8, -3, 6, 10, 9]
// in ra số chẵn trong numbers
for(let i = 0; i< number.length; i++){
    if(number[i]%2==0)[console.log(number)]
}
// tính tổng phần tử
// tìm phần tử nhỏ nhất
number.unshift(1000,2000,3000);
console.log(number);
