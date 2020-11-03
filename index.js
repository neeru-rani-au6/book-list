const root = document.getElementById("root");
const bookListData = [];
//button for add a book.
const addBookBtn = `<button id="addBtn" onclick="openForm()">Add a book</button>`;
// model for write details about book.
const addBook = `<div class="model" id="bookModal">
<form  class="modal-content" id="bookForm" >
<div class="m-10">
<label for="Title" class="m-5"><b>Title: </b></label>
<input type="text" id="title" class="book-form-input" placeholder="Enter Title" name="Title" required>
</div>
<div class="m-10">
<label for="Author" class="m-5"><b>Author: </b></label>
<input type="text" id="author" class="book-form-input" placeholder="Enter Author" name="Author" >
</div>
<div class="m-10">
<label for="Genre" class="m-5"><b>Genre: </b></label>
<input type="text" id="genre" class="book-form-input" placeholder="Enter Genre" name="Genre">
</div>
<button type="submit" class="btn">Submit</button>
</form>
</div>`


root.innerHTML = `<div>
<h1 class='book-title'>Book List</h1>
<div class="btn-container">
  ${addBookBtn}
  </div>
  <div id="bookList"></div>
  ${addBook}
</div>`
const bookList = document.getElementById("bookList");
bookList.innerHTML =  "<div>Book list is empty</div>";
var modal = document.getElementById("bookModal");
var btn = document.getElementById("addBtn");
// for open model.
btn.onclick = function () {
  modal.style.display = "block";
}
// for close model when click outside the model.
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// for showing book list.
const generateBookListTable = () => {
  bookList.innerHTML = "";
  for (let book of bookListData) {
    bookList.innerHTML +=
      `<ul class="booklist">
    <li><b>Title:</b> ${book.title}</li>
    <li><b>Author:</b>  ${book.author}</li>
    <li><b>Genre:</b> ${book.genre}</li>
  </ul>
  `
  }
}
// for add book in home page.
const handleSubmit = (event) => {
  event.preventDefault();
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const genre = document.getElementById('genre');
  bookListData.unshift({
    title: title.value,
    author: author.value,
    genre: genre.value
  });
  title.value = "";
  author.value = "";
  genre.value = "";
  console.log(bookListData);
  modal.style.display = "none";
  generateBookListTable();
}
document.getElementById("bookForm").addEventListener("submit", handleSubmit);
