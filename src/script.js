const myLibrary = [
    {
        "author": "nathan",
        "title": "the book",
        "pages": 250,
        "read": false
    },
    {
        "author": "tolkein",
        "title": "fellowship",
        "pages": 460,
        "read": true
    }
];

// Book Object constructor //
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    const userAddedBook = new Book(author, title, pages, read);
    myLibrary.push(userAddedBook);
}