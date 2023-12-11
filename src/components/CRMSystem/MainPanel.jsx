// src/components/CRMSystem/MainPanel.jsx

import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Inbox from "../../items/Inbox";

const emailTemplates = [
  "Hello",
  "How are you",
  "I'm here to help you",
  "How do you do?",
  "Do you want help?",
];

const MainPanel = ({
  selectedCompany,
  selectedContact,
  setSelectedContact,
  emails, // Assuming you have a list of emails in your application state
}) => {
  const [selectedTab, setSelectedTab] = useState("email");
  const [selectedTemplate, setSelectedTemplate] = useState(emailTemplates[0]);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Load notes from local storage when component mounts or when selectedContact changes
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, [selectedContact]);

  // Save notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Save notes to local storage when the page is about to be unloaded (refresh or close)
  useEffect(() => {
    const handleUnload = (event) => {
      localStorage.setItem("notes", JSON.stringify(notes));
    };

    window.addEventListener("unload", handleUnload);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, [notes]);

  const handleNotesChange = (e) => {
    if (setSelectedContact) {
      setSelectedContact((prevContact) => ({
        ...prevContact,
        notes: e.target.value,
      }));
    }
  };

  const handleSendEmail = () => {
    if (selectedContact) {
      console.log(
        `Sending email to ${selectedContact.email} using template: "${selectedTemplate}"`
      );
    }
  };

  const handleAddNote = () => {
    if (selectedContact && newNote.trim() !== "") {
      const newNoteItem = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        contactName: selectedContact.name,
        note: newNote,
      };

      setNotes((prevNotes) => [...prevNotes, newNoteItem]);
      setNewNote("");
    }
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleInboxTabClick = () => {
    setSelectedTab("email");
    setSelectedTemplate(emailTemplates[0]); // Reset the selected template when switching to the "Inbox" tab
  };

  const renderEmailContent = () => {
    
      return (
 <Inbox />
      );
    
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "documents":
        return <div>Documents Tab Content</div>;
      case "email":
        return renderEmailContent();
      case "notes":
        return (
          <div>
            {selectedContact && (
              <div>
                <br />
                <div>
                  <h5>Please Add Notes</h5>
                  <div>
                    <textarea
                      className="txtarea"
                      placeholder="Enter new note..."
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                    />
                    <Button onClick={handleAddNote}>Add Note</Button>
                  </div>
                  {notes.length > 0 && (
                    <div style={{ overflowX: "auto" }}>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Delete</th>
                            <th>Date</th>
                            <th>Contact Name</th>
                            <th>Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {notes.map((note) => (
                            <tr key={note.id}>
                              <td>
                                <Button
                                  variant="danger"
                                  onClick={() => handleDeleteNote(note.id)}
                                >
                                  Delete
                                </Button>
                              </td>
                              <td>{note.date}</td>
                              <td>{note.contactName}</td>
                              <td>{note.note}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </div>
              </div>
            )}
            <style>
              {`
                .txtarea {
                  width: 100%;
                  overflow: hidden;
                  display: flex;
                  align-items: center;
                  margin-right: 10px;
                  margin-bottom: 10px;
                }
              `}
            </style>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav
        variant="tabs"
        activeKey={selectedTab}
        onSelect={(tab) => {
          if (tab === "email") {
            handleInboxTabClick();
          } else {
            setSelectedTab(tab);
          }
        }}
      >
        <Nav.Item>
          <Nav.Link eventKey="email" onSelect={handleInboxTabClick}>
            Inbox
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="documents">Documents</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="notes">Notes</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="energy">Energy</Nav.Link>
        </Nav.Item>
      </Nav>
      <Col xs={12} md={9}>
        {renderTabContent()}
      </Col>
    </div>
  );
};

export default MainPanel;
