document.addEventListener('DOMContentLoaded', () => {


  const form = document.querySelector('#book-form');
  form.addEventListener('submit', handleFormSubmit);
});


  const handleFormSubmit = function(event){
    event.preventDefault();
    // getValue(item);
    const title = getValue('#title');
    const author = getValue('#author');
    // const category = getValue('#category');
    const subject = getValue('#genre');
    const container = document.querySelector('#book-list');
    addBookItem(title, author, subject, container);
  }

  const getValue = function(id){
    const item = document.querySelector(id);
    return item.value;
  }

  const addBookItem = function(title, author, subject, container){
    const string = document.createElement('p');
    string.textContent = `${title}, ${author}, ${subject}`;
    container.appendChild(string);
  }
