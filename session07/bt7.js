"use strict";
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    printBook() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Price: $${this.price}`);
    }
    updateBook(title, author, price) {
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
