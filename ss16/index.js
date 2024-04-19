"use strict";
// viết 1 chương trình nếu truyền 1 số thì in ra 1 số ,truyền vào cchữthì un ra chư
function checkType2(a, b) {
    if (Array.isArray(a)) {
        return [a[a.length - 1]];
    }
    return [a];
}
console.log(checkType2({ a: 6, b: [] }, [2]));
// let x = <T>(b: T){
//     return b;
// };
// let result13 = x(12)
