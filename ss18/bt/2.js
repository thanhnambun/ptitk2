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
function timingDecorator(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const startTime = performance.now();
        const result = originalMethod.apply(this, args);
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Function name: ${propertyName}`);
        console.log(`Arguments: ${args}`);
        console.log(`Execution time: ${executionTime} milliseconds`);
        console.log(`Result: ${result}`);
        return result;
    };
    return descriptor;
}
class Example {
    static sampleFunction(num) {
        let result = 0;
        for (let i = 0; i < num; i++) {
            result += Math.sqrt(i);
        }
        return result;
    }
}
__decorate([
    timingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], Example, "sampleFunction", null);
const result1 = Example.sampleFunction(100000);
