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
