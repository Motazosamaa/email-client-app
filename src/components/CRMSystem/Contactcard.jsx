import React from 'react';
import Card from 'react-bootstrap/Card';

const ContactCard = ({ contact, onSelectContact }) => {
  return (
    <Card
      key={contact.name}
      style={{ width: '18rem', marginBottom: '10px' }}
      onClick={onSelectContact}
    >
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>Email: {contact.email}</Card.Text>
        <Card.Text>Phone: {contact.phone}</Card.Text>
        <Card.Text>Address: {contact.address}</Card.Text>
        <Card.Text>{contact.notes}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
