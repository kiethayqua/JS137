/*
    Cho 1 mảng có dạng:
    - 1/ Viết function tìm ra developer lớn tuổi nhất
    - 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
    - 3/ Viết function tìm ra những developer nam
    - 4/ Viết function tính tổng tuổi của tất cả developer
    - 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng  !!!!Chưa làm
    - 6/ Viết function tìm ra developer có nhiều skills nhất
    - 7/ Viết function tìm ra những developer nào có skill là JS .includes
    - 8/ Viết function tìm ra những developer có gender là male và có skill JS
    - 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất
    - 10/ Viết function trả về 1 object có dạng .push
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

function findOldest(arr) {
    let oldest = arr[0];
    let maxAge = arr[0].age;

    for (let i = 1; i < arr.length; i++)
    if (arr[i].age > maxAge){
     maxAge = arr[i].age;
     oldest = arr[i];
    }

    return oldest;
}

function youngToOld(arr) {
    for (let i = arr.length - 1; i > 0; i--)
        for (let j = 0; j < i; j++)                   // Tại sao điều kiện dừng (j < i - 1) ==> Sai?
        if (arr[j].age > arr[j+1].age){
            tmp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = tmp;
        }

    return arr;
}

function findMaleDev(arr){
    let maleDev = [];

    for (let i = 0; i < arr.length; i++)
        if(arr[i].gender === 'male') 
        maleDev.push(arr[i]);

    return maleDev; 
}

function sumAgeDev(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++)
    sum += arr[i].age;

    return sum;
}

function mostSkillsDev(arr){
    let skills = arr[0].skills.length;
    let dev = arr[0];

    for (let i = 0; i < arr.length; i++)
    if (arr[i].skills.length > skills){
    skills = arr[i].length
    dev = arr[i];
    }

    return dev;
}

function javascriptDevs(arr){
    let jsDevs = [];

    for (let i = 0; i < arr.length; i++)
    if (arr[i].skills.includes('JS'))
    jsDevs.push(arr[i]);
    
    return jsDevs;
}

function maleJsDevs(arr){
    let maleJsDevs = [];
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i].skills.includes('JS') && arr[i].gender === 'female')
        maleJsDevs.push(arr[i]);
    }

    return maleJsDevs;
}

function sortDevs(arr){
    for (let i = arr.length - 1; i > 0; i--)
        for (let j = 0; j < i; j++)
        if(arr[j].skills.length < arr[j+1].skills.length){
            tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }

    return arr;
    
}

function genderDevs(arr){
    let males = [];
    let females = [];

    for (let i = 0; i < arr.length; i++)
    if (arr[i].gender === 'male')
    males.push(arr[i]); else
    females.push(arr[i]);
    
    return {males, females};
}
