// API CALLS FOR AUTHORS

import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthor = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
// CREATE AUTHOR
const createAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthor().then((authorsArray) => resolve(authorsArray)); // can also be written as getAuthor().then(resolve);
        });
    }).catch((error) => reject(error));
});
// UPDATE AUTHOR
// SEARCH AUTHORS

export { getAuthor, createAuthor };
