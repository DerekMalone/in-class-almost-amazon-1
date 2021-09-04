import clearDom from '../../helpers/clearDOM';

const viewAuthor = (obj) => {
  clearDom();
  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        </div>
      </div>
      <div class="text-white ms-5 details">
        <h2>${obj.first_name} ${obj.last_name}</h2>
        <p>${obj.email}</p>
        <hr>      
      </div>
        <div id="books-for-author"></div>
      </div>
    </div>
      `;
  console.warn(obj.bookObj);
  obj.bookObj.forEach((item) => {
    document.querySelector('#books-for-author').innerHTML += `
    <div class="card">
    <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
    <div class="card-body" style="height: 180px;">
      <h5 class="card-title">${item.title}</h5>
        <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
    </div>
  </div>
        `;
  });
};

export default viewAuthor;
