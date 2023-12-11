import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Contactcard from './Contactcard';

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
      {selectedCompany && (
        <ListGroup>
          {selectedCompany.contacts.map((contact, index) => (
            <Contactcard
              key={index}
              contact={contact}
              onSelectContact={() => onSelectContact(contact)}
            />
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
            float: left;
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
