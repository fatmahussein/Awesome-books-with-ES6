export default class BookStore {
  constructor() {
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.addBtn = document.getElementById('add');
    this.books = [];

    this.addBtn.addEventListener('click', () => this.addNewBook());
    this.displayBooks();

    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section');
    this.showSection('list'); // Show the initial section

    this.navLinks.forEach((navLink) => {
      navLink.addEventListener('click', (event) => {
        event.preventDefault();
        const section = event.target.getAttribute('data-section');
        this.showSection(section);
      });
    });
  }

  displayBooks() {
    const booksList = document.getElementById('books');
    booksList.innerHTML = '';
    this.books.forEach((book, index) => {
      const row = document.createElement('tr');

      const titleCell = document.createElement('td');
      titleCell.textContent = `"${book.title}" by ${book.author}`;
      row.appendChild(titleCell);

      const removeCell = document.createElement('td');
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove');
      removeCell.appendChild(removeBtn);
      row.appendChild(removeCell);

      booksList.appendChild(row);

      removeBtn.addEventListener('click', () => this.removeBook(index));
    });
  }

  addNewBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;

    if (title && author) {
      const book = { title, author };
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
      this.titleInput.value = '';
      this.authorInput.value = '';
    }
  }

  removeBook(index) {
    if (index >= 0 && index < this.books.length) {
      this.books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.displayBooks();
    }
  }

  showSection(sectionName) {
    this.sections.forEach((section) => {
      if (section.id === `${sectionName}-section`) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
}