import { getAuthorBooks, getSingleBook } from './bookData';
import { getSingleAuthor } from './authorData';

const viewBookDetails = (bookfirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookfirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorsBooks = (authorfirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorfirebaseKey)
    .then((authorObj) => {
      console.warn(authorObj);
      getAuthorBooks(authorObj.firebaseKey)
        .then((bookObj) => {
          console.warn(getAuthorBooks());
          console.warn(bookObj);
          resolve({ ...bookObj, ...authorObj });
        });
    }).catch(reject);
});

export { viewBookDetails, viewAuthorsBooks };
