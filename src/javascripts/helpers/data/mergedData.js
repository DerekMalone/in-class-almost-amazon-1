import { getAuthorBooks, getSingleBook } from './bookData';
import { getSingleAuthor } from './authorData';

// const viewBookDetails = (bookfirebaseKey) => new Promise((resolve, reject) => {
//   getSingleBook(bookfirebaseKey)
//     .then((bookObject) => {
//       getSingleAuthor(bookObject.author_id)
//         .then((authorObject) => {
//           resolve({ authorObject, ...bookObject });
//         });
//     }).catch(reject);
// });

// SAME AS viewBookDetials ABOVE BUT USING ASYNC AWAIT METHOD (ASYNC IS A PROMISE AS WELL)
const viewBookDetails = async (bookfirebaseKey) => {
  const book = await getSingleBook(bookfirebaseKey);
  const authorObject = await getSingleAuthor(book.author_id);
  return { authorObject, ...book };
};

const viewAuthorsBooks = (authorfirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authorfirebaseKey)
    .then((authorObj) => {
      console.warn(authorObj);
      getAuthorBooks(authorObj.firebaseKey)
        .then((bookObj) => {
          console.warn(getAuthorBooks());
          console.warn(bookObj);
          resolve({ bookObj, ...authorObj });
        });
    }).catch(reject);
});

export { viewBookDetails, viewAuthorsBooks };
