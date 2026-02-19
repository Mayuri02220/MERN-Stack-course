import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const DetailsCards = ({CardTitle , CardDiscription}) => {
  return (
    <>
    <div>
      <Card style={{ width:'18rem'}}>
              <Card.Img variant="top" 
              src="https://www.shutterstock.com/image-photo/serenity-summer-day-durmitor-national-600nw-2623341111.jpg" />
              <Card.Body>
                <Card.Title>{CardTitle}</Card.Title>
                <Card.Text>
                 {CardDiscription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
    </div>
    </>
  );
};

export default DetailsCards;

