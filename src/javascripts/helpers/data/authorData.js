// API CALLS FOR AUTHORS

import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthor = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey, userId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthor(userId).then((response) => resolve(response));
    })
    .catch(reject);
});

// CREATE AUTHOR
const createAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthor(authorObj.uid).then((authorsArray) => resolve(authorsArray)); // can also be written as getAuthor().then(resolve);
        });
    }).catch((error) => reject(error));
});
// GET SINGLE AUTHOR
// GET SINGLE BOOK
const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data)) // use data if getting multiple items back
    .catch(reject);
});
// UPDATE AUTHOR
const updateAuthor = (authorObj, userId) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthor(userId).then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS

// FILTER ON FAVORITE AUTHORS
const favAuthors = (userId) => new Promise((resolve, reject) => {
  getAuthor(userId)
    .then((userAuthers) => {
      const faveBooks = userAuthers.filter((author) => author.favorite);
      resolve(faveBooks);
    }).catch(reject);
});

export {
  getAuthor, createAuthor, favAuthors, deleteAuthor, getSingleAuthor, updateAuthor
};
