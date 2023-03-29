// ARRAY

/*
    Cho 1 mảng có dạng:
    - 1/ Viết function tìm ra developer lớn tuổi nhất
    - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
    - 3/ Viết function tìm ra những developer nam/ dùng filter
    - 4/ Viết function tính tổng tuổi của tất cả developer/ dùng reduce
    - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng/ 
    - 6/ Viết function tìm ra developer có nhiều skills nhất. dùng skill.length
    - 7/ Viết function tìm ra những developer nào có skill là JS ,,,dùng filter/ có inclue là js
    - 8/ Viết function tìm ra những developer có gender là male và có skill JS
    - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất
    - 10/ Viết function trả về 1 object có dạng /// dùng filter
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

//Câu 1

let ageDeveloper = developers[0]
 function maxAge (){
    for(let y=0;y<developers.length;y++){

    if(developers[y].age>ageDeveloper.age){
        ageDeveloper=developers[y] ;
 }
} return ageDeveloper;
 }
 let maxDeveloper=maxAge();
console.log(maxDeveloper);

//Câu 3S

let maleDeveloper= developers.filter(function(developer,index){return developer.gender =='male';})
console.log(maleDeveloper)

//Câu 4
function totalAge(accumulator,index){
    let total = accumulator + index.age
    return total
}
let totalAgeDevelopers = developers.reduce(totalAge,0)
console.log(totalAgeDevelopers)


//Câu 2

// let sortAgeDevelop= developers.sort(function(a,b){
//     return a.age - b.age
// })
// console.log(sortAgeDevelop)

// //câu 9
// let sortKillDevelop= developers.sort(function(a,b){
//     return a.skills.length - b.skills.length;
// })
// console.log(sortKillDevelop)

// Câu 6
let currrentLength = developers[2];
function developerskill(index){
    if(currrentLength.skills.length<index.skills.length){
        currrentLength=index;
    };
console.log(currrentLength);
};
let maxSkillDev = developers.forEach(developerskill)



//Câu 7 
function developerSkillJs (index){
    return index.skills.includes('JS');
}
let deveSkillJS = developers.filter(developerSkillJs);
console.log(deveSkillJS);

//Câu 8
function maleJS(index){
    return index.gender =='male' && index.skills.includes('Js');
}
let maleDevSkillJs = developers.filter(maleJS);
console.log(maleDevSkillJs);