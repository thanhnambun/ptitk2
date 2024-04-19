"use strict";
function swapElements(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let myArray = [1, 2, 3, 4, 5];
myArray = swapElements(myArray, 5, 2);
console.log(myArray);
