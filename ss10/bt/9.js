"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        console.log("List of books in the library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Title: ${book.getTitle()}, Author: ${book.getAuthor()}`);
        });
    }
}
const book1 = new Book("Title 1", "Author 1");
const book2 = new Book("Title 2", "Author 2");
const book3 = new Book("Title 3", "Author 3");
const book4 = new Book("Title 4", "Author 4");
const book5 = new Book("Title 5", "Author 5");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
