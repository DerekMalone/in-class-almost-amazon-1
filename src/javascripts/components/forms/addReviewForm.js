import clearDom from '../../helpers/clearDOM';

const addReviewForm = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
  <form id="book-form" class="mb-4">
  <div class="form-group">
        <label for="Review">Review</label>
        <textarea class="form-control" placeholder="Book Review" id="review" style="height: 100px">${obj.review || ''}</textarea>
      </div>
    <button type="submit" 
      id="submit-review" class="btn btn-primary">Submit Review
    </button>
  </form>
    `;
};

export default addReviewForm;
