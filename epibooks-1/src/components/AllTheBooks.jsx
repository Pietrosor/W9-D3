import { Card, Col, Row, Button } from "react-bootstrap"
import horror from "../data/horror.json"

const AllTheBooks = () => {
  return (
    <Row className="g-2">
      {horror.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Button variant="primary">${book.price}</Button>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks
