"use strict";
/*
    1. Array
    - Có 2 cách khai báo:
        + Tên Array: kiểu dữ liệu[] = []
        + Tên Array<kiểu dữ liệu> = []
*/
let students = ['hoa', 'hong'];
let numbers = [3, 4, 5];
/*
    2. Object
*/
let cat = {
    name: 'hongle',
    height: 150,
    age: 20,
};
/*
    3. Enum
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER"; // mặc định =1, muốn thay đổi phải gán giá trị mới
})(Role || (Role = {}));
let person = {
    name: 'le',
    age: 20,
    role: 0
};
/*
    4. Void
*/
function sayhello() {
    console.log("xinchao");
}
console.log(sayhello());
function sum(a, b) {
    return a + b;
}
sum(5, '6');
/*
    5. Unknown
        - Giống any nhưng chặt hơn.
        - Khi sử dụng phải kiểm tra điều kiện.
    */
// any
function typeAny(userName) {
    console.log(userName.toUpperCase());
}
typeAny('hoa');
// unknown
function typeAny1(userName) {
    if (typeof userName == 'string')
        console.log(userName.toUpperCase());
    else
        console.log("khong phai la string");
}
typeAny1(20);
/*
    6. Never
    - Thường dùng trong vòng lặp vô tận, không có điểm dừng.
*/
function typeNever() {
    while (true) {
        console.log("vong la vo tan");
    }
}
typeNever();
