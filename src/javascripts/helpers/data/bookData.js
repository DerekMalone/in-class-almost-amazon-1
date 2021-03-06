import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => {
      getBooks(userId).then((response) => resolve(response));
    })
    .catch(reject);
});

// CREATE BOOK
const createBook = (bookObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks(bookObj.uid).then((booksArray) => resolve(booksArray)); // can also be written as getBooks().then(resolve);
        });
    }).catch((error) => reject(error));
});
// GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data)) // use data if getting multiple items back
    .catch(reject);
});

// UPDATE BOOK
const updateBook = (userId, bookObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getBooks(userId).then(resolve))
    .catch(reject);
});

// SEARCH BOOKS

// FILTER BOOKS ON SALE
const booksOnSale = (userId) => new Promise((resolve, reject) => {
  getBooks(userId)
    .then((userBooks) => {
      const onSaleBooks = userBooks.filter((book) => book.sale);
      resolve(onSaleBooks);
    }).catch(reject);
});

const getAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((reject)); // can also write as .catch(reject)
});

export {
  getBooks, createBook, booksOnSale, deleteBook, getSingleBook, updateBook, getAuthorBooks
};
