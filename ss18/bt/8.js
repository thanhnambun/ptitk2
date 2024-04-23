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
function caching(cacheFn) {
    const cache = new Map(); // Map để lưu trữ kết quả đã được cache
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const cacheKey = cacheFn(args);
            if (cache.has(cacheKey)) {
                console.log("Cache hit!");
                return cache.get(cacheKey);
            }
            else {
                console.log("Cache miss!");
                const result = originalMethod.apply(this, args);
                cache.set(cacheKey, result);
                return result;
            }
        };
        return descriptor;
    };
}
class Example4 {
    calculate(a, b) {
        console.log("Calculating...");
        return a + b;
    }
}
__decorate([
    caching((args) => args.join("-")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example4.prototype, "calculate", null);
const example4 = new Example4();
console.log(example4.calculate(2, 3));
console.log(example4.calculate(2, 3));
