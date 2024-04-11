"use strict";
// - Giống any nhưng chặt hơn.
// - Khi sử dụng phải kiểm tra điều kiện.
// any
function typeAny2(userName) {
    console.log(userName.toUpperCase());
}
typeAny2('hoa');
// unknown
function typeAny3(userName) {
    if (typeof userName == 'string')
        console.log(userName.toUpperCase());
    else
        console.log("khong phai la string");
}
typeAny3(20);
