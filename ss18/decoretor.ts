/*
    Decorator:trang trí
    bản chất là hàm hoạc fun nhằm bổ sung cho class, method,
    property đối tượng 
    Decorator chia làm 5 loại 
    1.class

    2.method

    3.property

    4.parameter

    5.return
    ==> phạm vi áp dụng : Nest JS
*/
//  dùng để bổ sung thay đổi thuộc tính của đối tượng
// fun decorator để thêm thuộc tính  
function decorator<T extends{new(...args: any[]):{}}>(constructor:T) {
    return class extends constructor{
        address = "Ha Noi";
        sayhello() {
            console.log("Hello");
        }
    }
}
@decorator
class Student{
    useName: string;
    constructor(name : string){
        this.useName=name;
    }
}
 // khởi tạo đối tượng
 let std1 = new Student("minh thu");
 // muốn đi thêm thuộc tính age cho đối tượng std1.
 // dùng decorator
 console.log(std1 );
//  closure : hàm lồng nhau
function timtong() {
    return function(a:number,b:number){
        return a+b;
    }
}
let tong = timtong();
console.log(tong(1,2));
function closure() {
    let a =5
    function test() {
        console.log(a);
        
    }
    test()
}
closure();
//  ****************************************************
/*
    trang trí cho phương thức 
    phương thức và hàm khác nhau ntn?
    hàm là những fun tự định nghĩa 
    phương thức dùng trong đối tượng hoặc hàm 
    map, filter,forEach là hàm hay phương thức 
*/
// tạo fun decorator
// function decorator phải có 3 đối số 
function decorMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(11111, target);
    // trong descriptor có chứa 1 dối tượng có chứa thuộc tính value
    //  nhờ có cái này ta mới có thể m
    descriptor.value=function(a:number,b:number){
        return (a+b)*2
    }
  }
  class Test{
      //  viết phuong thức cho class test
      // đặt decorator
      //  taọ fun tính tổng 
      @decorMethod
    sum(a:number,b:number){
        return a+b;
    }
}