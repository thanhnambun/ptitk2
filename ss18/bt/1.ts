function logFunctionInfo(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Function name: ${propertyName}`);
        console.log(`Arguments: ${args}`);

        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);

        return result;
    }

    return descriptor;
}

class Calculator {
    @logFunctionInfo
    add(a: number, b: number): number {
        return a + b;
    }
}

const calculator = new Calculator();
const result = calculator.add(3, 5);
