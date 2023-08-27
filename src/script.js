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
const ADD_BOOK_BUTTON = document.querySelector('.add-button');
const MODAL_DIALOG = document.querySelector('.modal-form');
const BOOK_FORM = document.querySelector('.book-form');
const MODAL_SUBMIT_BUTTON = document.querySelector('.submit-btn');
const BOOK_TITLE_INPUT = document.querySelector('#title-input');
const BOOK_AUTHOR_INPUT = document.querySelector('#author-input');
const BOOK_PAGES_INPUT = document.querySelector('#pages-input');
const BOOK_READ_INPUT = document.querySelector('#read-status-check');

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

function clearLibraryDisplay() {
    LIBRARY_GRID.innerHTML = "";
}

function displayLibrary() {
    for(let book of myLibrary) {
        initialiseBookCard(book);
    }
}

function initialiseBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.dataset.index = myLibrary.indexOf(book);

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

ADD_BOOK_BUTTON.addEventListener('click', () => {
    MODAL_DIALOG.showModal();
});

MODAL_SUBMIT_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    
    let titleInput = BOOK_TITLE_INPUT.value;
    let authorInput = BOOK_AUTHOR_INPUT.value;
    let pagesInput = BOOK_PAGES_INPUT.value;
    let readInput = BOOK_READ_INPUT.checked;

    addBookToLibrary(authorInput, titleInput, pagesInput, readInput);

    MODAL_DIALOG.close();
    BOOK_FORM.reset();

    clearLibraryDisplay();
    displayLibrary();
})

displayLibrary();