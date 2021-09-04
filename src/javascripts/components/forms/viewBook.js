import clearDom from '../../helpers/clearDOM';

const viewBook = (obj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <img src=${obj.image} alt=${obj.title} style="width: 300px;">
        <div class="mt-5">
          <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="review-book-btn--${obj.firebaseKey}" class="fas fa-couch btn btn-info"></i>
          <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
      <div class="text-white ms-5 details">
      <h5>${obj.title} by ${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
      Author's Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
      <hr>
      <p>${obj.description || 'Please add a description for this book.'}</p>
      <hr>
      <p>PRICE: ${obj.sale ? `$${obj.price} <span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>` : `$${obj.price}`}</p>      
      <hr>
      <div id="reviews-for-book">${obj.review || 'Be the first to add a review for this book.'}</div>
    </div>
    </div>`;
  obj.forEach((element) => {
    document.querySelector('#reviews-for-book').innerHTML += `
      <div class="card">
    <div class="card-body" style="height: 180px;">
        <p class="card-text">${element.review}</p>
        <hr>
    </div>
  </div>
      `;
  });
};

export default viewBook;
