type CacheFunction = (args: any[]) => string; // Định dạng của hàm caching

function caching(cacheFn: CacheFunction): MethodDecorator {
  const cache = new Map<string, any>(); // Map để lưu trữ kết quả đã được cache

  return function (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const cacheKey = cacheFn(args); 
      if (cache.has(cacheKey)) {
        console.log("Cache hit!");
        return cache.get(cacheKey);
      } else {
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
  @caching((args: any[]) => args.join("-"))
  calculate(a: number, b: number): number {
    console.log("Calculating...");
    return a + b;
  }
}

const example4 = new Example4();
console.log(example4.calculate(2, 3));
console.log(example4.calculate(2, 3)); 
