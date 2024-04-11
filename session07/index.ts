
/* 
    1. Array
    - Có 2 cách khai báo:
        + Tên Array: kiểu dữ liệu[] = []
        + Tên Array<kiểu dữ liệu> = []
*/

let students : string[] =['hoa', 'hong']

let numbers :Array<number> = [3,4,5]


/* 
    2. Object
*/

let cat : {name: string, height: number, age: number}={
    name: 'hongle',
    height: 150,
    age: 20,
}

/* 
    3. Enum
*/

enum Role{
    ADMIN,  //mặc định bằng 0
    USER    // mặc định =1, muốn thay đổi phải gán giá trị mới
}

let person: {name: string, age: number, role: Role.ADMIN}={
    name:'le',
    age: 20,
    role: 0
}

/* 
    4. Void
*/

function sayhello(): void{
    console.log("xinchao");    
}
console.log(sayhello());

function sum(a:number, b: string) : string{
    return a+b;
}
sum(5,'6');


/* 
    5. Unknown
        - Giống any nhưng chặt hơn.
        - Khi sử dụng phải kiểm tra điều kiện.
    */
    // any
    function typeAny(userName: any) : void{
        console.log(userName.toUpperCase())
    }
    typeAny('hoa')

    // unknown
    function typeAny1(userName: unknown) : void{
        if (typeof userName=='string')
            console.log(userName.toUpperCase())
        else
        console.log("khong phai la string")
    }
    typeAny1(20)


/* 
    6. Never
    - Thường dùng trong vòng lặp vô tận, không có điểm dừng.
*/

function typeNever() : never{
    while(true){
        console.log("vong la vo tan");
    }   
}

typeNever()