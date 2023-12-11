// src/components/EmailClient/CRMSystem/ContactColumn.jsx
import ListGroup from 'react-bootstrap/ListGroup';

import React from 'react';

// Circular avatar component
const Avatar = ({ name, imageSrc }) => {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <div className="avatar">
      {imageSrc ? (
        <img src={imageSrc} alt={`${name}'s avatar`} className="avatar-image" />
      ) : (
        <div className="initials">{initials}</div>
      )}
    </div>
  );
};

const ContactColumn = ({ selectedCompany, onSelectContact }) => {
  return (
    <div>
      <h3>Contact </h3>


      {selectedCompany && (
         <ListGroup>
          {selectedCompany.contacts.map((contact, index) => (
            <ListGroup.Item variant="primary" key={index} onClick={() => onSelectContact(contact)}>
              <Avatar name={contact.name} imageSrc={contact.imageSrc} />
              <span>{contact.name}</span>
            </ListGroup.Item>
          ))}
         </ListGroup>
      )}

      {/* Styles for the Avatar component */}
      <style>
        {`
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            margin-right: 10px;
          }

          .avatar-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .initials {
            width: 100%;
            height: 100%;
            background-color: #007bff;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default ContactColumn;
