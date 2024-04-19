function add<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số thứ nhất không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ.";
    }
    return (Number(a) + Number(b)) as T;
}

function subtract<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số thứ nhất không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ.";
    }
    return (Number(a) - Number(b)) as T;
}

function multiply<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số thứ nhất không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ.";
    }
    return (Number(a) * Number(b)) as T;
}

function divide<T extends string | number>(a: T, b: T): T | string {
    if (typeof a === 'string' && isNaN(Number(a))) {
        return "Tham số thứ nhất không hợp lệ.";
    }
    if (typeof b === 'string' && isNaN(Number(b))) {
        return "Tham số thứ hai không hợp lệ.";
    }
    if (Number(b) === 0) {
        return "Không thể chia cho số 0.";
    }
    return (Number(a) / Number(b)) as T;
}

console.log("Phép cộng:", add(5, 3));
console.log("Phép trừ:", subtract(5, "3"));
console.log("Phép nhân:", multiply("5", 3));
console.log("Phép chia:", divide("10", "2"));
console.log("Phép chia cho 0:", divide(10, 0));
console.log("Tham số không hợp lệ:", add("abc", "def"));
