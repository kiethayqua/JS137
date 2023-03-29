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
//     console.log(maxAge);
// };
// maxAgeDev(developers);


//Câu 2:

// function sortedDevelopers(developers){
//     const sortAge = developers.sort((a, b) => a.age - b.age);
//     console.log(sortAge);
// };
// sortedDevelopers(developers);


//Câu 3:

// function findMaleDevelopers(developers){
//     const maleDevelopers = developers.filter(dev => dev.gender === 'male');
//     console.log(maleDevelopers);
// };
// findMaleDevelopers(developers);


//Câu 4:

// function sumAgeDeveloper(developers) {
//     const sumAge = developers.reduce((pre, cur) => pre + cur.age, 0);
//     console.log(sumAge);
// };
// sumAgeDeveloper(developers);


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
//     console.log(allSkill)
// };
// getAllSkill(developers);

//Câu 6:
function mostSkillDev(developers){
    const mostSkill = developers
}

//Câu 7:

//Câu 8:

//Câu 9:

//Câu 10: