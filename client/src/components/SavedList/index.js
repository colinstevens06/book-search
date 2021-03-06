import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    <li className="list-group-item" style={{ marginBottom: 15 }}>
      <Container>
        <Row>
          <Col size="xs-2 sm-2">
            <Thumbnail src={props.image} />
          </Col>


          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <p><strong>By: </strong>{props.authors}</p>
            <p>
              {props.description}
            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.link}
            >
              Learn more about the book
            </a>
          </Col>

          <Col size="xs-2 sm-1">
            <Button
              className={"btn btn-primary"}
              click={props.click}
              value={props.id}

            >              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
