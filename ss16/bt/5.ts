let variable1: undefined;
let variable2: number = 10;
let variable3;

console.log("Biến 1:", variable1);
console.log("Biến 2:", variable2);
console.log("Biến 3:", variable3);
// Biến variable1 được khai báo với kiểu dữ liệu undefined và không có giá trị được gán cho nó, nên khi in ra, nó sẽ hiển thị giá trị undefined.
//Biến variable2 được khai báo với kiểu dữ liệu number và gán giá trị là 10. Khi in ra, nó sẽ hiển thị giá trị 10.
//Biến variable3 được khai báo mà không có kiểu dữ liệu được chỉ định (implicit typing). Trong TypeScript, nếu biến được khai báo mà không có kiểu dữ liệu, kiểu dữ liệu của biến sẽ là kiểu any. Do đó, khi in ra, nó cũng sẽ hiển thị giá trị undefined vì không có giá trị nào được gán cho nó.
