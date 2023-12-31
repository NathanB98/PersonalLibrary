const myLibrary = [
    {
        "author": "J.R.R. Tolkien",
        "title": "The Fellowship of the Ring",
        "pages": 423,
        "read": true
    },
    {
        "author": "J.K. Rowling",
        "title": "Harry Potter and the Half-Blood Prince",
        "pages": 607,
        "read": false
    },
    {
        "author": "Anthony Bourdain",
        "title": "Kitchen Confidential",
        "pages": 320,
        "read": true
    },
    {
        "author": "Ernst Jünger",
        "title": "Storm of Steel",
        "pages": 187,
        "read": true
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

    const readStatusBtn = document.createElement('button');
    readStatusBtn.className = 'book-read-toggle';
    readStatusBtn.textContent = 'Change Read Status';
    readStatusBtn.addEventListener('click', () => {
        console.log(book);
        if(book.read === true) {
            book.read = false
        } else {
            book.read = true
        }
        clearLibraryDisplay();
        displayLibrary();
    });

    const removeBtn = document.createElement('button');
    removeBtn.className = 'book-remove-btn';
    removeBtn.textContent = 'Remove Book';
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(bookCard.dataset.index, 1);
        bookCard.remove();
        clearLibraryDisplay();
        displayLibrary();
    });

    bookCard.append(titlePara, authorPara, pagesPara, readPara, readStatusBtn, removeBtn);
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
});

displayLibrary();