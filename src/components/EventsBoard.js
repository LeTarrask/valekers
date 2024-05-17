import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EventsBoard = ({ events }) => {
    return (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {events.map((event, index) => (
          <Col key={index} className='h-100'>
            <Card className="card-content h-100">
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body className="card-body-flex">
                <Card.Title>{event.book} - {event.day}/{event.month}/{event.year}</Card.Title>
                <Card.Text className="card-text-scrollable">
                  {event.author}<br />
                  {event.moderator}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>      
    );
};

export default EventsBoard;
