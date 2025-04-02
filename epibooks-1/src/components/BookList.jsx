import SingleBook from "./SinlgeBook"
import { Container } from "react-bootstrap"

function BookList({ books }) {
  return (
    <Container className="d-flex flex-wrap">
      {books.map((book) => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </Container>
  )
}
export default BookList
