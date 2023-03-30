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
//Cau 1
function findOldDev(arr=[]) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    const maxAge = arr.reduce((pre, cur) =>  pre.age > cur.age ? pre : cur);

    return maxAge;
}

//Cau 2
function youngToOld(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    return arr.sort((a, b) => a.age - b.age);
}

//Cau 3
function findMaleDevs(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    return arr.filter((dev) => dev.gender === 'male');
}

//Cau 4
function sumAgeDevs(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    return arr.reduce((pre, cur) => {
        pre + cur.age;
    }, 0)
}

//Cau 5
function allSkills(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    a = arr.reduce((skills, developer) => {
        return skills.concat(developer.skills);
    })

    return new Set(a);
}

//Cau 6
function findMostSkills(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    return arr.reduce((pre, cur) => pre.skills.length > cur.skills.length ? pre : cur);
}

//Cau 6.2
function findMostSkills2(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    let mostSkillsDev = arr[0];
    arr.forEach((developer) => {
        if (developer.skills.length > mostSkillsDev.skills.length)
        mostSkillsDev = developer;
    })

    return mostSkillsDev;
}

//Cau 7
function findJsDevs(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    return arr.filter((developer) => developer.skills.includes('JS'));
}

//Cau 8
function findMaleJsDevs(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    return arr.filter((developer) => {
        developer.skills.includes('JS') && developer.gender === 'male'
    });
}

//Cau 9
function sortDevBySkills(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;
    
    return arr.sort((a, b) => b.skills.length - a.skills.length);
}

//Cau 10
function getGenderFiltered(arr) {
    if (!Array.isArray(arr) || !arr.length) return -1;

    return arr.reduce((object, developer) => {
        if (developer.gender === 'male')
            object.males.push(developer);
        else
            object.females.push(developer);
        return object;
    },
        {
        males: [],
        females: []
        }
    )
}

console.log(getGenderFiltered(developers));