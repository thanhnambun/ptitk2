class Student {
    id: number;
    name: string;
    _class: string;

    constructor(id: number, name: string, _class: string) {
        this.id = id;
        this.name = name;
        this._class = _class;
    }
}

function filterStudentsByClass(students: Student[], className: string): Student[] {
    return students.filter(student => student._class === className);
}

// Khởi tạo danh sách sinh viên
const studentlist: Student[] = [
    new Student(1, "Alice", "A"),
    new Student(2, "Bob", "B"),
    new Student(3, "Charlie", "A"),
    new Student(4, "David", "C"),
    new Student(5, "Eve", "B"),
    new Student(6, "Frank", "A")
];

const className: string = "A";
const classAStudents: Student[] = filterStudentsByClass(studentlist, className);

classAStudents.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Class: ${student._class}`);
});
