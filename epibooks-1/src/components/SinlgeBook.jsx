import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function SingleBook({ book }) {
  return (
    <Card style={{ width: "200px" }} className="m-3">
      <Card.Img variant="top" src={book.img} alt={book.title} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Button variant="primary">${book.price}</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
