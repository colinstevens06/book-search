import React, { useState, useEffect } from "react";

// COMPONENTS
import Nav from '../components/Nav'
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/SavedList"
import API from "../utils/API";

export default function SavedPage() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooksDB()
  }, [])


  const getBooksDB = () => {
    API.getBooks()
      .then(res => {
        setBooks(res.data)
      })
      .catch(err => console.log(err))
  }

  const deleteBook = (id) => {
    console.log("delete book")
    API.deleteBook(id)
      .then(res => getBooksDB())
      .catch(err => console.log(err))
  }


  return (
    <div>
      <Nav />
      <Jumbotron>
        <h1>React Google Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
      </Jumbotron>
      <Container>

        <Row>
          <Col size="xs-12">
            <BookList>
              {books.map(book => (
                < BookListItem
                  key={book._id}
                  id={book._id}
                  title={book.title}
                  authors={book.authors}
                  image={book.image}
                  description={book.description}
                  link={book.link}
                  click={() => deleteBook(book._id)}
                />
              ))}
            </BookList>
          </Col>
        </Row>

      </Container>

    </div>

  )
}