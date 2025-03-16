class Book {
    constructor(id, title, author, genre, finished) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.finished = finished;
    }

    toggleRead() {
        this.finished ? this.finished = false : this.finished = true;
    }
}