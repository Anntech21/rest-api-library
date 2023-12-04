const express = require("express");
const fs = require("fs").promises;

const app = express();
app.use(express.json());

//----Get all book begins----
const getBooks = async() => {
  const data = await fs.readFile("../data/book.json", "utf8");
  return data;
};    
getBooks();

const getBook = async (id) => {
  const data = await fs.readFile("../data/book.json", "utf8");
  return JSON.parse(data)[id];
};

//---jacjie code----

app.get(“/books/:id", async (req, res) => {
  const id = Number(req.params.id);
  const book = await getBook(id);
  const jsonBook = JSON.stringify(book, null, 2);
  res.send(jsonBook);
);
rest-api-library

//-----Get Book Ends----- Create new book begins -----

const createBook = async (title, author, available) => {

  const bookArray = await fs.readFile("../data/book.json", "utf8");
  const bookList = JSON.parse(bookArray);
  const newBook = {title: title, 
  author: author,
  available: available 
}

bookList.push(newBook);
const jsonAddBook = JSON.stringify(bookList, null, 2);
await fs.writeFile("../data/book.json". jsonAddBook);
}

//-----Update a book--------
const updateBook = async (id, title, author, available) => {
const data = await fs.readFile("../data/book.json", "utf8");
const updatedBook = (title: title, author: author, available: available);
const book = JSON.parse(data).map((book, i) => {
  return i === id ? available : book;
});
}

//------Delete a book------
const deleteBook = async (id) => {
  const data = await fs.readFile("../data/book.json", "utf8");
  const book = JSON.parse(data).filter((book, i) => i === id);
  const jsonBook = JSON.stringify(book,null,2);
  await fs.writeFile("../data/book.json", jsonBook);
};

//-----Save a Book------
const saveBook = async (newBook) => {
const data = await fs.readFile("../data/book.json", "utf8");
  const recipe = [...JSON.parse(data), newBook];
  const jsonVersion = JSON.stringify(book, null, 2);
  await fs.writeFile("../data/book.json", jsonVersion, "utf8");
}

app.post("/create-book", async (req, res) => {
await createBook(req.body.name, req.body.bookShelve, req.body.list);
res.status[201].json('You added a new book');
});


app.listen(3000, () => {
  console.log("server listening on port 3000.");
});
