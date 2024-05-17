import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BooksBoard = ({ books }) => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {books.map((book, index) => (
          <Col key={index} className='h-100'>
            <Card className="card-content h-100">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body className="card-body-flex">
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.category}</Card.Subtitle>
                <Card.Text className="card-text-scrollable">
                  {book.author}<br />
                  {book.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Button variant="primary" href={book.link}>Compre</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>      
    );
};

export default BooksBoard;
