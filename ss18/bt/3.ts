function cachingDecorator(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const cache: { [key: string]: any } = {};

    descriptor.value = function(...args: any[]) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log(`Retrieving result from cache for arguments: ${args}`);
            return cache[key];
        } else {
            const result = originalMethod.apply(this, args);
            console.log(`Caching result for arguments: ${args}`);
            cache[key] = result;
            return result;
        }
    }

    return descriptor;
}

class Example1 {
    @cachingDecorator
    static calculateSum(a: number, b: number): number {
        console.log("Calculating sum...");
        return a + b;
    }
}

console.log(Example1.calculateSum(2, 3));
console.log(Example1.calculateSum(2, 3)); 
console.log(Example1.calculateSum(4, 5)); 
