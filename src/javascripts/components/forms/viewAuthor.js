import clearDom from '../../helpers/clearDOM';

const viewAuthor = (obj, bookObj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
    < class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <img src=${obj.image || ''} alt=${obj.title || ''} style="width: 300px;">
        <div class="mt-5">
          <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
      <div class="text-white ms-5 details">
        <h5>${obj.first_name} ${obj.last_name}</h5>
        <p class="description">${obj.description || ''}</p>
        <hr>      
      </div>
      // <div class="card">
    <img class="card-img-top" src=${obj.bookObj.image} alt=${obj.bookObj.title} style="height: 400px;">
    <div class="card-body" style="height: 180px;">
    <h5 class="card-title">${bookObj.title}</h5>
        <p class="card-text bold">${obj.bookObj.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${obj.bookObj.price}` : `$${obj.bookObj.price}`}</p>
        <hr>
    </div>
    </div>
      `;
};

export default viewAuthor;
