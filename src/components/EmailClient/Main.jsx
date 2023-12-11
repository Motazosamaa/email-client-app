// src/components/EmailClient/Main.jsx

import React, { useState } from "react";
import CompanyList from "../CRMSystem/CompanyList";
import ContactColumn from "../CRMSystem/ContactColumn";
import MainPanel from "../CRMSystem/MainPanel";
import exampleCompanies from "../../data/exampleCompanies";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Main = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const emailsData = [
    {
      to: "john@example.com",
      subject: "Meeting Tomorrow",
      content: "Hi John, let's meet tomorrow at 2 PM.",
    },
    {
      to: "mary@example.com",
      subject: "Project Update",
      content: "Hi Mary, here is the latest update on our project.",
    },
    // ... other emails
  ];

  const handleSelectCompany = (companyName) => {
    const selectedCompany = exampleCompanies.find(
      (company) => company.name === companyName
    );
    setSelectedCompany(selectedCompany);
    setSelectedContact(null); // Reset selectedContact when a new company is selected
  };

  const handleSelectContact = (contact) => {
    setSelectedContact({
      ...contact,
      setNotes: (notes) => {
        setSelectedContact((prevContact) => ({
          ...prevContact,
          notes: notes,
        }));
      },
    });
  };

  return (
    <Container fluid>
      <Row className="mx-0">
        <Col xs={12} sm={6} md={ 3} className="border ">
          <CompanyList
            companies={exampleCompanies}
            onSelectCompany={handleSelectCompany}
          />
        </Col>
        <Col xs={12} sm={6} md={3} className="border d-flex justify-content-center">
     
            <ContactColumn
              selectedCompany={selectedCompany}
              onSelectContact={handleSelectContact}
            />
        </Col>
        <Col xs={12} sm={12} md={6} className="border">
              <MainPanel
                selectedCompany={selectedCompany}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
              />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
