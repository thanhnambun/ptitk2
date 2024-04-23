function typeCheckDecorator(...types: string[]): MethodDecorator {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        
        descriptor.value = function (...args: any[]) {
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
    @typeCheckDecorator('string', 'number')
    greet(message: string, age: number): void {
        console.log(`Message: ${message}, Age: ${age}`);
    }
}

const example = new Example3();
example.greet("Hello", 25);
example.greet(25, "Hello");
