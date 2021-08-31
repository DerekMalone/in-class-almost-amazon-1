const clearDom = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
};

export default clearDom;
