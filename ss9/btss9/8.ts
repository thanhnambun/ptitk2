type T = {
  name: string;
};
type U = {
  age: number;
};

function mergeObjects(input: T, obj2: U): T & U {
    return { ...input, ...obj2 };
}
