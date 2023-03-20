/* eslint max-classes-per-file: ["error", 3] */
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class StorageInLocal {
  constructor() {
    this.numberOfBooks = this.getListBooks().length + 1;
  }

  getListBooks() {
    if (localStorage.getItem('awesomeBooks') === null) {
      this.awesomeBooks = [];
    } else {
      this.awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));
    }

    return this.awesomeBooks;
  }

  addBook(book) {
    const newBook = {
      id: this.numberOfBooks, title: book.title, author: book.author,
    };
    const awesomeBooks = this.getListBooks();
    awesomeBooks.push(newBook);
    localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
    this.numberOfBooks += 1;
  }

  removeBook(id) {
    const awesomeBooks = this.getListBooks();
    const filteredBooks = awesomeBooks.filter((book) => book.id !== id);
    localStorage.setItem('awesomeBooks', JSON.stringify(filteredBooks));
  }
}
