import React, { Component } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

class SingleBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  toggleSelection = () => {
    this.setState({ selected: !this.state.selected })
  }

  render() {
    const { book } = this.props
    return (
      <Card
        style={{
          width: "200px",
          border: this.state.selected ? "2px solid red" : "none",
        }}
        className="m-3"
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={this.toggleSelection}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
