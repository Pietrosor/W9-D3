import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import romance from "../data/romance.json"

function SingleBook() {
  return (
    <>
      {romance.map((book) => (
        <Card key={book.asin} style={{ width: "18rem" }} className="m-3">
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.category}</Card.Text>
            <Button variant="primary">${book.price}</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default SingleBook
