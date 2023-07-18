// eslint-disable-next-line import/no-extraneous-dependencies
import { DateTime } from 'luxon';
import BookStore from '../modules/books.js';

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
const time = DateTime.now();
const t = document.querySelector('#current-time'); //= > 2017
t.textContent = time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
// setInterval(updateTime, 1000);
