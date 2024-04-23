function timingDecorator(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const startTime = performance.now();

        const result = originalMethod.apply(this, args);

        const endTime = performance.now();

        const executionTime = endTime - startTime;

        console.log(`Function name: ${propertyName}`);
        console.log(`Arguments: ${args}`);
        console.log(`Execution time: ${executionTime} milliseconds`);
        console.log(`Result: ${result}`);

        return result;
    }

    return descriptor;
}

class Example {
    @timingDecorator
    static sampleFunction(num: number): number {
        let result = 0;
        for (let i = 0; i < num; i++) {
            result += Math.sqrt(i);
        }
        return result;
    }
}

const result1 = Example.sampleFunction(100000);
