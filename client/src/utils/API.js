import axios from "axios";

const query = "https://www.googleapis.com/books/v1/volumes?q="
const apiKey = process.env.API_KEY

export default {
  // Gets all books
  searchBooks: function (input) {
    return axios.get(query + input.split(" ").join("+") + apiKey)
  },

  getBooks: function () {
    return axios.get("/api/books");
  },

  // // Gets the book with the given id
  // getBook: function (id) {
  //   return axios.get("/api/books/" + id);
  // },

  // // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },


  // // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
