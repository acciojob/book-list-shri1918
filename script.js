//your JS code here. If required.
// Get form and table elements
const form = document.querySelector('.form-group');
const tableBody = document.querySelector('#book-list');

// Add event listener to form submit button
form.addEventListener('submit', addBookToList);

// Function to add book data to table
function addBookToList(e) {
  e.preventDefault();

  // Get input values
  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;
  const isbnInput = document.querySelector('#isbn').value;

  // Create table row
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${titleInput}</td>
    <td>${authorInput}</td>
    <td>${isbnInput}</td>
    <td><button class="btn btn-danger delete">Clear</button></td>
  `;

  // Add row to table body
  tableBody.appendChild(tableRow);

  // Clear input fields
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}

// Add event listener to table for delete button
tableBody.addEventListener('click', deleteBook);

// Function to delete book row from table
function deleteBook(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
}
