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

// 1/ Viết function tìm ra developer lớn tuổi nhất
function maxAge_developers (name, age) {
    this.name = name;
    this.age = age;
    console.log(`Developers lớn tuổi nhất: ${name}, ${age}`)
}

const maxAge_developers = developers [0] {
   if (maxAge_developers.age)
   



// 2/ Viết function trả về danh sách developer đã được sắp xếp theo tuổi từ thấp đến cao
Array.sort()

// 3/ Viết function tìm ra những developer nam
Array.filter (gender = "male")
// 4/ Viết function tính tổng tuổi của tất cả developer
Array.reduce

// 5/ Viết function tổng hợp tất cả các skills của tất cả developers trong mảng
// Array.Set (add vào k bị trùng, bị trùng thì loại)

// 6/ Viết function tìm ra developer có nhiều skills nhất
//Array.length

// 7/ Viết function tìm ra những developer nào có skill là JS
//Quét qua 1 lượt và Array.filter + includes


// 8/ Viết function tìm ra những developer có gender là male và có skill JS
//Kết hợp câu 3 và câu 7

// 9/ Viết function sắp xếp thứ tự developer có nhiều skill nhất -> ít nhất
//array.length


// 10/ Viết function trả về 1 object có dạng 
/*{
    males: [{...}],
    females: [{...}]
}
Trong đó:
    + males là mảng tất cả các developers có gender là male
    + females là mảng tất cả các developers có gender là female

*/
//Tạo 2 biến male và female 
// dùng filter và reduce