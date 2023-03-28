// ARRAY

/*
    Cho 1 mảng có dạng:
    - 1/ Viết function tìm ra developer lớn tuổi nhất
    - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
    - 3/ Viết function tìm ra những developer nam
    - 4/ Viết function tính tổng tuổi của tất cả developer
    - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng
    - 6/ Viết function tìm ra developer có nhiều skills nhất
    - 7/ Viết function tìm ra những developer nào có skill là JS
    - 8/ Viết function tìm ra những developer có gender là male và có skill JS
    - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất
    - 10/ Viết function trả về 1 object có dạng 
    {
        males: [{...}],
        females: [{...}]
    }
    Trong đó:
        + males là mảng tất cả các developers có gender là male
        + females là mảng tất cả các developers có gender là female
    
*/


const developers = [
    {
        name: "Nguyễn Văn Tí",
        age: 22,
        gender: 'male',
        skills: ['JS', 'Java', 'C#', 'HTML', 'CSS']
    },
    {
        name: "Nguyễn Văn Tèo",
        age: 25,
        gender: 'male',
        skills: ['Swift', 'Java', 'Kotlin', 'JS']
    },
    {
        name: "Nguyễn Thị Đào",
        age: 19,
        gender: 'female',
        skills: ['C++', 'Go', 'Rust']
    },
    {
        name: "Nguyễn Thị Hoa",
        age: 21,
        gender: 'female',
        skills: ['JS', 'TS']
    },
    {
        name: "Nguyễn Văn Linh",
        age: 18,
        gender: 'male',
        skills: ['Python', 'SQL']
    },
    {
        name: "Nguyễn Thị Hồng",
        age: 23,
        gender: 'female',
        skills: ['Assembly', 'C', 'C++']
    }
];

//     - 1/ Viết function tìm ra developer lớn tuổi nhất
// function oldestDev() {
//     let _oldestDev = developers[0];
    // for (let i = 1; i < developers.length; i++)
    //     if(developers[i]['age'] > _oldestDev['age']) _oldestDev = developers[i];
    // console.log(_oldestDev);
// }
// oldestDev();

//     - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
// console.log(developers.sort(function(a,b){return a['age']-b['age'];}));

//     - 3/ Viết function tìm ra những developer nam => dùng filter
// const checkGender = (value)  => {
//     return value['gender'] == "male";
// };
// console.log(developers.filter(checkGender));


//     - 4/ Viết function tính tổng tuổi của tất cả developer
// function totalAge() {
//     let sum=0;
//     for(let i=0; i<developers.length; i++) sum += developers[i]['age'];
//     alert(sum);
// }
// totalAge();

//     - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng
// const uniqueSkill = (arr1, arr2) => {
//     for(let i=0; i<arr2.length; i++)
//         if(!arr1.includes(arr2[i])) arr1.push(arr2[i]);
//     return arr1;
// };
// const allSkills = () => {
//     let tempArr = [];
//     for(let i=0; i<developers.length; i++)
//         uniqueSkill(tempArr, developers[i]['skills']);
//     console.log(tempArr);
// }
// allSkills();

//     - 6/ Viết function tìm ra developer có nhiều skills nhất
// function mostSkill() {
//     let _mostSkill = developers[0]
//     for (let i = 1; i < developers.length; i++)
//         if(developers[i]['skills'].length > _mostSkill['skills'].length) _mostSkill = developers[i];
//     console.log(_mostSkill);
// }
// mostSkill();

//     - 7/ Viết function tìm ra những developer nào có skill là JS
// const skillJS = (dev) => {
//     return dev['skills'].includes("JS");
// };
// console.log(developers.filter(skillJS));

//     - 8/ Viết function tìm ra những developer có gender là male và có skill JS
// const devMaleJS = (dev) => {
//     return dev['skills'].includes("JS") && dev['gender'] == "male";
// };
// console.log(developers.filter(devMaleJS));

//     - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất
// console.log(developers.sort(function(a,b){return b['skills'].length-a['skills'].length;}));