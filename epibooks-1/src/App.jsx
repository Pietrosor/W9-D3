import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import SingleBook from "./components/SinlgeBook"
import { Container } from "react-bootstrap"
import fantasy from "./data/fantasy.json"
import romance from "./data/romance.json"
import horror from "./data/horror.json"
import scifi from "./data/scifi.json"
import history from "./data/history.json"
import BookList from "./components/BookList"

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <SingleBook book={fantasy[12]} />;
        <SingleBook book={horror[8]} />;
        <SingleBook book={romance[5]} />; */}
        <SingleBook book={scifi[1]} />;
        <SingleBook book={history[12]} />;
        <BookList books={romance} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
