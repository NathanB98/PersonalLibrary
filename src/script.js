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
    },
    {
        "author": "bordain",
        "title": "confidential",
        "pages": 290,
        "read": true
    },
    {
        "author": "rowling",
        "title": "potter",
        "pages": 340,
        "read": false
    }
];

const LIBRARY_GRID = document.querySelector('.library-container');

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

function displayLibrary() {
    for(let book of myLibrary) {
        initialiseBookCard(book);
    }
}

function initialiseBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const titlePara = document.createElement('p');
    titlePara.className = 'book-title';
    titlePara.textContent = book.title;
    const authorPara = document.createElement('p');
    authorPara.className = 'book-author';
    authorPara.textContent = book.author;
    const pagesPara = document.createElement('p');
    pagesPara.className = 'book-pages';
    pagesPara.textContent = book.pages;
    const readPara = document.createElement('p');
    readPara.className = 'book-read';
    readPara.textContent = book.read;

    bookCard.append(titlePara, authorPara, pagesPara, readPara);
    LIBRARY_GRID.appendChild(bookCard);
}

displayLibrary();