class Book {
    title: string;
    author: string;
    price: number;

    constructor(title: string, author: string, price: number) {
        this.title = title;
        this.author = author;
        this.price = price;
    }

    printBook(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`);
    }

    updateBook(title: string, author: string, price: number): void {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99);

console.log("Thông tin đối tượng ban đầu:");
myBook.printBook();

myBook.updateBook("To Kill a Mockingbird", "Harper Lee", 12.99);

console.log("Thông tin đối tượng sau khi cập nhật:");
myBook.printBook();
