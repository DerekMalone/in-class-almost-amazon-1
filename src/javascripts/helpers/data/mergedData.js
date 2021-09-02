import { deleteBook, getAuthorBooks, getSingleBook } from './bookData';
import { deleteAuthor, getSingleAuthor } from './authorData';

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
      getAuthorBooks(authorObj.firebaseKey)
        .then((bookObj) => {
          console.warn(getAuthorBooks());
          resolve({ bookObj, ...authorObj });
        });
    }).catch(reject);
});

// const viewAuthorsBooks = async (authorfirebaseKey) => {
//   const authorObject = await getSingleAuthor(authorfirebaseKey);
//   console.warn(authorObject);
//   const book = await getAuthorBooks(authorObject.firebaseKey);
//   console.warn(book);
//   return { authorObject, ...book };
// };

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));
    // console.warn(deleteBooks);

    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, viewAuthorsBooks, deleteAuthorBooks };
