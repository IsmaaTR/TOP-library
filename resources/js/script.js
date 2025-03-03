const myLibrary = [];

/**
 * Constructor of a book
 * @param {*} title The title of the book
 * @param {*} author The author of the book
 * @param {*} genre The genre of the book
 * @param {*} finished Marks if the book is finished or not
 */
function Book(title, author, genre, finished) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.finished = finished;
}

/**
 * Creates a new book and adds it to the library
 * @param {*} title The title of the book
 * @param {*} author The author of the book
 * @param {*} genre The genre of the book
 * @param {*} finished Marks if the book is finished or not 
 */
function addBook(title, author, genre, finished) {
    const book = new Book(title, author, genre, finished);
    myLibrary.push(book);
}