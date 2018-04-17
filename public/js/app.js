document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#book-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete-all');
  deleteButton.addEventListener('click', handleDelete);
});

const handleFormSubmit = function(event){
  event.preventDefault();

  const title = this.title.value;
  const author = this.author.value;
  const category = document.querySelector('input[name="category"]:checked').value;
  const subject = this.genre.value;
  const container = document.querySelector('#book-list');

  addBookItem(title, author, category, subject, container);
  this.reset();
}

const addBookItem = function(title, author, category, subject, container){
  const string = document.createElement('p');
  string.textContent = `${title}, ${author}, ${category}, ${subject}`;
  container.appendChild(string);
}

const handleDelete = function() {
  const container = document.querySelector('#book-list');
  container.textContent = '';
}
