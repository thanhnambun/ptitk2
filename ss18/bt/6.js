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
function typeCheckDecorator(...types) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            for (let i = 0; i < args.length; i++) {
                if (typeof args[i] !== types[i]) {
                    throw new Error(`Invalid parameter type at index ${i}. Expected type: ${types[i]}`);
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Sử dụng:
class Example3 {
    greet(message, age) {
        console.log(`Message: ${message}, Age: ${age}`);
    }
}
__decorate([
    typeCheckDecorator('string', 'number'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Example3.prototype, "greet", null);
const example = new Example3();
example.greet("Hello", 25);
example.greet(25, "Hello");
