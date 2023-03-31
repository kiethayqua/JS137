// // Find the sum of all elements.
// const arr1 = [1, 2, 3, 4, 5];

// Remove duplicates from an array.
// let arr2 = [1, 2, 2, 4, 5, 5, 6];
// let newArr= [];
// arr2.forEach(function(number){if(!newArr.includes(number)){newArr.push(number)}})
// console.log(newArr)

// // // Find the index of a specific element in an array.
// // const arr3 = ['iOS', 'Android', 'WindowPhone'];

// // // Reverse an array.
// // const arr4 = [1, 2, 3, 4, 5, 6];

// // // Filter out even numbers from an array.
// // const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // // Find the maximum and minimum values in an array of numbers.
// // const arr6 = [1, -3, 99, 120, 50, 15];

// // // Find the common elements between two arrays.
// // const arr7 = [1, 2, 3, 5, 9];
// // const arr8 = [2, 4, 1, 9, 0];

// // // Map an array of numbers to their squares.
// // const arr9 = [1, 2, 3, 4, 5];

// // let danhTinhHao = {
// //     id: 1,
// //     name: "Hao",
// //     age: 23,
// //     School: "MindX",
// // }
// // for(let thuocTinh in danhTinhHao){
// //     console.log("đặc điểm của thuộc tính " + thuocTinh + " có giá trị là "+ danhTinhHao[thuocTinh]);
// // }
// // let a = 0
// // let b=0
// //  function nhapSo(label){
// //      let input = NaN;
// //      do{
// //          input=Number(prompt("Nhập số " + label + " vào đây nhé"));
// //           console.log(input)
// //       }while(isNaN(input));
// //       return input
// //   }
// // a = nhapSo("A")
// // b = nhapSo("B")
// // console.log(a+b)

// // function nhapSo(a,b){return (a+b)}
// // console.log(nhapSo(20,30))

// // nhapSo()
// // let input = NaN
// // function nhapSo(){
// //     do{
// //         input=prompt("Mời bạn nhập số");
// //     }while(
// //         input<0 && isNaN(input)
// //     );
// //     return input
// // }



// // setInterval(function(){
// //     console.log("Sau 3 giây")
// // },1000)

// // function workEverysecond(second,work){
// //     setTimeout(work,second);
// // }
// // function sayHello(){console.log("Xin Chào")};
// // workEverysecond(5000, sayHello);
// // console.log(sayHello)

// // let sum=(a,b,c)=> {return a+b+c};
// // sum(1,2,3)
// // console.log(sum(1,2,3))
const $title = document.getElementById('big-title');
console.log($title)
//Truy xuất phần tử bằng class
const $doanVan = document.getElementsByClassName('doanVan');
console.log($doanVan)
for(const $motDoanVan of $doanVan){
    console.log($motDoanVan.children);
}
//truy xuất phần tử bẳng tên thẻ
const $img = document.getElementsByTagName('img');
console.log($img);
let $titleContent= $title.innerHTML;
console.log($titleContent);
$title.innerHTML = "Hello Trang tiếp";
console.log($titleContent);

let $doanvancon =document.getElementsByClassName('doanvancon');
let $thuoctinhAt= $title.getAttribute('thuoctinh')
console.log($thuoctinhAt)
$title.setAttribute('thuoctinh','Đây không phải là thuộc tính');
$title.setAttribute('thuoctinh2','đây là thuộc tính 2');
console.log($title)
$doanVan[1].setAttribute('id','chiHoa');
console.log($doanVan[1]);
$title.removeAttribute('thuoctinh2');
$title.style.color = 'green'
$title.style.backgroundColor='pink'
$title.style.width='500px';
for(let doanvanStyle of $doanVan){
    doanvanStyle.style.color='red'
}
console.log($doanVan[2].innerHTML)
let $link = document.createElement('a');
$link.innerHTML='This is link to somewhere';
$link.setAttribute('href', 'https://www.google.com/');
//document.body.append($link);
let $div = document.createElement('div');
$div.innerHTML='Đây là div mới';
$div.setAttribute('id','Chihua1');
document.body.append($div);
$title.after($link)
$title.onclick= function(){
    console.log('Bạn vừa click vào tiltle');
    alert('Bạn vừa clik vào')
}
function isInvalidEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
$inPutEmail = document.getElementById('my-email');
$inPutEmail.onchange=function(){
    let email=$inPutEmail.value;
    if(!isInvalidEmail(email)){
        alert('Bạn vừa nhập sai email');
    }
}
const $inputNumber1 = document.getElementById('number-1');
const $inputNumber2= document.getElementById('number-2');
const $buttonPlus=document.getElementById('button-plus');
const $buttonTru=document.getElementById('button-tru');
$buttonPlus.onclick=function(){
    let a= Number($inputNumber1.value);
    let b= Number($inputNumber1.value);
    alert(a+b);
}
$buttonTru.onclick=function(){
    let a= Number($inputNumber1.value);
    let b= Number($inputNumber2.value);
    alert(a-b);
}
$doanVan[1].onclick= function(){
    this.style.color= 'green';
}

const data=[
    {image:'https://images2.thanhnien.vn/Uploaded/phongdt/2022_08_04/spider-man-2363.jpg',
     title:'Túi xách nữ xinh, phong cách hàn quốc',
     price:1000,
     sold: 100,
    },
    {image:'https://media.gq-magazine.co.uk/photos/63468efef4f48bee2acb7062/master/pass/Tom-Holland-Spiderman-what-we-know-so-far.jpg',
    title:'Dép chữ C thuê máy Hàn Quốc, sản xuất tại trung Quốc',
    price:5000000,
    sold: 100,
   },
   {image:'https://m.media-amazon.com/images/M/MV5BODlhOGM4MGMtYjBjMi00MWQ2LTk4OWUtYzQ2YzE0NWZkODlkXkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR88,0,500,281_.jpg',
   title:'Túi xách nữ xinh, phong cách hàn quốc',
   price:1000,
   sold: 100,
  },
  {image:'https://hips.hearstapps.com/hmg-prod/images/opw-16070-r2-1552140832.jpg?crop=0.901xw:0.885xh;0.0986xw,0.115xh&resize=1200:*',
  title:'Túi xách nữ xinh, phong cách hàn quốc',
  price:1000,
  sold: 100,
 },
 {image:'https://upload.wikimedia.org/wikipedia/en/1/18/Benedict_Cumberbatch_as_Doctor_Strange.jpeg',
 title:'Túi xách nữ xinh, phong cách hàn quốc',
 price:1000,
 sold: 100,
},
{image:'https://static.wikia.nocookie.net/marveldatabase/images/6/63/Stephen_Strange_%28Earth-199999%29_from_Doctor_Strange_in_the_Multiverse_of_Madness_Promo_001.jpg/revision/latest?cb=20220504144907',
title:'Túi xách nữ xinh, phong cách hàn quốc',
price:1000,
sold: 100,
},
{image:'https://ironusa.vtexassets.com/arquivos/ids/196906/090214_0.jpg?v=637913412188030000',
title:'Túi xách nữ xinh, phong cách hàn quốc',
price:1000,
sold: 100,
},
{image:'https://www.pinkvilla.com/imageresize/ironmansocial_1.jpg?width=752&t=pvorg',
title:'Túi xách nữ xinh, phong cách hàn quốc',
price:1000,
sold: 100,
},
{image:'https://www.pinkvilla.com/imageresize/ironmansocial_1.jpg?width=752&t=pvorg',
title:'túi xánh nữ',
price:1000,
sold: 100,
},
{imge:'https://www.pinkvilla.com/imageresize/ironmansocial_1.jpg?width=752&t=pvorg',
title:'Túi xách nữ xinh, phong cách hàn quốc',
price:1000,
sold: 100,
},
{image:'https://www.pinkvilla.com/imageresize/ironmansocial_1.jpg?width=752&t=pvorg',
title:'Túi xách nữ xinh, phong cách hàn quốc',
price:1000,
sold: 100,
},
{image:'https://www.pinkvilla.com/imageresize/ironmansocial_1.jpg?width=752&t=pvorg',
title:'Túi xách nữ xinh, phong cách hàn quốc',
price:1000,
sold: 100,
},

]