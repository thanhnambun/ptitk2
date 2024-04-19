function swapElements<T>(arr: T[], index1: number, index2: number){
    let temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] =temp
    return arr
}
let myArray: number[] = [1, 2, 3, 4, 5];
myArray = swapElements(myArray, 5, 2); 
console.log(myArray);
