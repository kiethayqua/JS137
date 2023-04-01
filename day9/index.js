// ARRAY

/*
    Cho 1 mảng có dạng:
    - 1/ Viết function tìm ra developer lớn tuổi nhất
    - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
    - 3/ Viết function tìm ra những developer nam -filter
    - 4/ Viết function tính tổng tuổi của tất cả developer - reduce
    - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng - 
    - 6/ Viết function tìm ra developer có nhiều skills nhất -.lengh
    - 7/ Viết function tìm ra những developer nào có skill là JS - filter -include
    - 8/ Viết function tìm ra những developer có gender là male và có skill JS - &&
    - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất - lengh
    - 10/ Viết function trả về 1 object có dạng 
    {
        males: [{...}],
        females: [{...}] 
    }
    Trong đó:
        + males là mảng tất cả các developers có gender là male
        + females là mảng tất cả các developers có gender là female
    - reduce
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

//Câu 1:

// function maxAgeDev(developers) {
//     const maxAge = developers.reduce((pre, cur) => pre.age > cur.age ? pre : cur);
//     return maxAge;
// };
// console.log(maxAgeDev(developers));

//sửa bài tập
// function findMaxAgedeveloper(developers = []){
//     if(!Array.isArray(developers) || !developers.length) return;

//     let maxAgeDeveloper = developers[0];
//     developers.forEach((developer) => {
//         if(developer.age > maxAgeDeveloper.age) maxAgeDeveloper = developer;
//     });
//     return maxAgeDeveloper;
// }
// console.log(findMaxAgedeveloper(developers))


//Câu 2:

// function sortedDevelopers(developers){
//     const sortAge = developers.sort((a, b) => a.age - b.age);
//     return sortAge;
// };
// console.log(sortedDevelopers(developers));


//Câu 3:

// function findMaleDevelopers(developers){
//     const maleDevelopers = developers.filter(dev => dev.gender === 'male');
//     return maleDevelopers;
// };
// console.log(findMaleDevelopers(developers));


//Câu 4:

// function sumAgeDeveloper(developers) {
//     const sumAge = developers.reduce((pre, cur) => pre + cur.age, 0);
//     return sumAge;
// };
// console.log(sumAgeDeveloper(developers));


//Câu 5:

// const allSkill = [];
// function getAllSkill(developers) {
//     developers.forEach(dev => {
//         dev.skills.forEach(skill => {
//             if(!allSkill.includes(skill)){
//                 allSkill.push(skill);
//             }
//         });
//     });
//     return allSkill
// };
// console.log(getAllSkill(developers));

//Sửa bài tập:
// function getAllSkills(developers = []) {
//     if(!Array.isArray(developers) || !developers.length) return;

//     const allSkills = developers.reduce((skills, developer) => {
//         return skills.concat(developer.skills);
//     }, []);

//     return new Set(allSkills);
// }
// console.log(getAllSkills(developers));

//Câu 6:

// function mostSkillDev(developers){
//     const mostSkill = developers.reduce((a, b) => a.skills.length > b.skills.length ? a : b);
//     return mostSkill;
// };
// console.log(mostSkillDev(developers));

//Câu 7:
// function jsOnlyDeveloper(developers) {
//     if(!Array.isArray(developers) || !developers.length) return;

//     return developers.filter((developer) => developer.skills.includes('JS'));
// }
// console.log(jsOnlyDeveloper(developers));
//Câu 8:
// function jsMaleDeveloper(developers) {
//     if(!Array.isArray(developers) || !developers.length) return;

//     return developers.filter((developer) => developer.skills.includes('JS') && developer.gender === 'male');
// }
// console.log(jsMaleDeveloper(developers));
//Câu 9:
function filteredSkillDeveloper(developers) {
    if(!Array.isArray(developers) || !developers.length) return;

    return developers.sort((a, b) => b.skills.length - a.skills.length);
}
console.log(filteredSkillDeveloper(developers));
//Câu 10:
// function getGenderFiltered(developers = []) {
//     if(!Array.isArray(developers) || !developers.length) return;

//     return developers.reduce((object, developer) => {
//         if(developer.gender === 'male') {
//             object.males.push(developer);
//         } else {
//             object.females.push(developer);
//         }
//         return object;
//     },{
//         males: [],
//         females: []
//     });
// }
// console.log(getGenderFiltered(developers));