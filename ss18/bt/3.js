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
function cachingDecorator(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    const cache = {};
    descriptor.value = function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log(`Retrieving result from cache for arguments: ${args}`);
            return cache[key];
        }
        else {
            const result = originalMethod.apply(this, args);
            console.log(`Caching result for arguments: ${args}`);
            cache[key] = result;
            return result;
        }
    };
    return descriptor;
}
class Example1 {
    static calculateSum(a, b) {
        console.log("Calculating sum...");
        return a + b;
    }
}
__decorate([
    cachingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example1, "calculateSum", null);
console.log(Example1.calculateSum(2, 3));
console.log(Example1.calculateSum(2, 3));
console.log(Example1.calculateSum(4, 5));
