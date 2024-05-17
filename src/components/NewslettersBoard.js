import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NewslettersBoard = ({ newsletters }) => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {newsletters.map((newsletter, index) => (
          <Col key={index} className='h-100'>
            <Card className="card-content h-100">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body className="card-body-flex">
                <Card.Title>{newsletter.title}</Card.Title>
                <Card.Text className="card-text-scrollable">
                  {newsletter.author}<br />
                  {newsletter.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer">
                <Button variant="primary" href={newsletter.link}>Assine</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>      
    );
};

export default NewslettersBoard;
