"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
function decorator(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.address = "Ha Noi";
        }
        sayhello() {
            console.log("Hello");
        }
    };
}
let Student = class Student {
    constructor(name) {
        this.useName = name;
    }
};
Student = __decorate([
    decorator,
    __metadata("design:paramtypes", [String])
], Student);
// khởi tạo đối tượng
let std1 = new Student("minh thu");
// muốn đi thêm thuộc tính age cho đối tượng std1.
// dùng decorator
console.log(std1);
//  closure : hàm lồng nhau
function timtong() {
    return function (a, b) {
        return a + b;
    };
}
let tong = timtong();
console.log(tong(1, 2));
function closure() {
    let a = 5;
    function test() {
        console.log(a);
    }
    test();
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
function decorMethod(target, propertyKey, descriptor) {
    console.log(11111, target);
    // trong descriptor có chứa 1 dối tượng có chứa thuộc tính value
    //  nhờ có cái này ta mới có thể m
    descriptor.value = function (a, b) {
        return (a + b) * 2;
    };
}
class Test {
    //  viết phuong thức cho class test
    // đặt decorator
    //  taọ fun tính tổng 
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    decorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "sum", null);
