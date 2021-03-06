import { showAuthors } from '../components/authors';
import { showBooks } from '../components/books';
import signOut from '../helpers/auth/signOut';
import { getAuthor, favAuthors } from '../helpers/data/authorData';
import { getBooks, booksOnSale } from '../helpers/data/bookData';

// navigation events
const navigationEvents = (userId) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    console.warn('Sale Books');
    booksOnSale(userId).then(showBooks);
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(userId).then(showBooks); // can also write as getBooks().then(showBooks);
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });

  // Show Authors Only
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthor(userId).then((authorsArray) => showAuthors(authorsArray));
  });

  // Favorite Authors
  document.querySelector('#fav-authors').addEventListener('click', () => {
    console.warn('Favorite Authors');
    favAuthors(userId).then(showAuthors);
  });

  // FIXME: STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
};

export default navigationEvents;
