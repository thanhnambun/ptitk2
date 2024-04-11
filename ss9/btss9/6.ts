function printStringOrArray(input: string | string[]) {
    if (typeof input === 'string') {
        console.log(input);
    } else {
        input.forEach(str => console.log(str)); 
    }
}

printStringOrArray("Hello"); 

printStringOrArray(["Hello", "World"]); 
