import clearDom from '../helpers/clearDOM';

// FIXME: STUDENTS show your authors
const showAuthors = (array) => {
  clearDom();
  // CREATE A BUTTON TO ADD AUTHOR
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  array.forEach((obj) => {
    document.querySelector('#store').innerHTML += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${obj.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author-btn--${obj.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
