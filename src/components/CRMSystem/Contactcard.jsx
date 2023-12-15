import React from 'react';
import Card from 'react-bootstrap/Card';

import './ContactCard.css'; // Import a custom CSS file for additional styling

const ContactCard = ({ contact, onSelectContact }) => {
  return (
    <Card
      className="custom-contact-card"
      onClick={onSelectContact}
    >
      <Card.Body>
        <Card.Title className="contact-name">
          {contact.name}
        </Card.Title>
        <Card.Text>Email: {contact.email}</Card.Text>
        <Card.Text>Phone: {contact.phone}</Card.Text>
        <Card.Text>Address: {contact.address.city}</Card.Text>
        <Card.Text className="contact-notes">{contact.notes}</Card.Text>

      </Card.Body>
    </Card>
  );
};

export default ContactCard;
