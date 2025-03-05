const myLibrary = [];

showBooks();

/**
 * Shows the existing books to the user
 */
function showBooks() {
    const bookContainer = document.querySelector('#books-container');

    myLibrary.forEach( book => {
        const bookCard = createBookCardDiv(book);
        bookContainer.appendChild(bookCard);
    });
}

/**
 * Creates a new div that will show the book information
 * @param {*} book the book to show
 */
function createBookCardDiv(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    // Card Header
    const cardHeader = createBookCardHeader(book.title);
    bookCard.appendChild(cardHeader);

    // Card content
    const cardContent = createBookCardContent(book.author, book.genre);
    bookCard.appendChild(cardContent);

    // Card footer
    book.finished ? bookCard.classList.add('finished') : bookCard.classList.add('not-finished');

    return bookCard;
}

/**
 * Creates the div for the card header
 * @param {*} title book title
 * @returns the card header
 */
function createBookCardHeader(title) {
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const titleParagraph = document.createElement('p');
    titleParagraph.classList.add('book-title');
    titleParagraph.innerText =  title;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book');
    deleteButton.insertAdjacentHTML("beforeend", 
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
        </svg>`
    );
    deleteButton.addEventListener('click', function() {

    });

    cardHeader.appendChild(titleParagraph);
    cardHeader.appendChild(deleteButton);

    return cardHeader;
}

/**
 * Creates the div for the card content
 * @param {*} author book author
 * @param {*} genre book genre
 * @returns the card content
 */
function createBookCardContent(author, genre) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const authorParagraph = document.createElement('p');
    authorParagraph.innerText = `Author: ${author}`;
    authorParagraph.classList.add('book-author');

    const genreParagraph = document.createElement('p');
    genreParagraph.innerText = `Genre: ${genre}`;
    genreParagraph.classList.add('book-genre');

    cardContent.appendChild(authorParagraph);
    cardContent.appendChild(genreParagraph);

    return cardContent;
}

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