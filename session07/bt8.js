"use strict";
function isPrime(n) {
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
function areAllPrimes(arr) {
  for (let num of arr) {
    if (!isPrime(num)) {
      return false;
    }
  }
  return true;
}
const numberList = [2, 3, 5, 7, 11];
console.log(areAllPrimes(numberList));
const nonPrimes = [4, 6, 8, 9, 10];
console.log(areAllPrimes(nonPrimes));
