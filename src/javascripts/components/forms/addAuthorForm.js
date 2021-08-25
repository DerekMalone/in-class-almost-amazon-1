const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-book-form" class="mb-4">
      <div class="form-group">
        <label for="first-name">Author's First Name</label>
        <input type="text" class="form-control" id="first-name" aria-describedby="authorFirstName" placeholder="Enter Author's First Name" required>
      </div>
      <div class="form-group">
        <label for="last-name">Author's Last Name</label>
        <input type="text" class="form-control" id="last-name" placeholder="Enter Author's Last Name" required>
      </div>
      <div class="form-group">
        <label for="price">Author's Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter Author's Email" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit New Author</button>
    </form>`;
};

export default addAuthorForm;
