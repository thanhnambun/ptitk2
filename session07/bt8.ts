function isPrime(n: number): boolean {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function areAllPrimes(arr: number[]): boolean {
    for (let num of arr) {
        if (!isPrime(num)) {
            return false;
        }
    }
    return true;
}

const numberList: number[] = [2, 3, 5, 7, 11];
console.log(areAllPrimes(numberList)); 

const nonPrimes: number[] = [4, 6, 8, 9, 10];
console.log(areAllPrimes(nonPrimes)); 
