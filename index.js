import BookStore from './books.js';
import { updateTime } from './date.js';

const bookStore = new BookStore();

// Retrieve books from local storage on page load
window.addEventListener('load', () => {
  const storage = localStorage.getItem('books');
  if (storage) {
    bookStore.books = JSON.parse(storage);
    bookStore.displayBooks();
  }
});
// Update the time every second
setInterval(updateTime, 1000);
