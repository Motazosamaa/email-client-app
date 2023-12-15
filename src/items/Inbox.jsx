import React, { useState } from "react";
import "./inbox.css";
import "bootstrap/dist/css/bootstrap.min.css";


const replies = ["Hello", "Thank You", "Great", "Contact with me again"];

const Inbox = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [unreadMessages, setUnreadMessages] = useState(new Set());

  const handleMessageClick = (message) => {
    if (!unreadMessages.has(message)) {
      setUnreadMessages(new Set([...unreadMessages, message]));
    }
    setSelectedMessage(message);
  };

  const handleCloseMessage = () => {
    setSelectedMessage(null);
  };

  const handleReply = (reply) => {
    setReplyText(reply);
  };

  const handleSendReply = () => {
    console.log("Reply sent:", replyText);
    setReplyText(""); // Clear reply text after sending
  };

  return (
    <div className="container-fluid">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
    <div className="row">
        <div className="col-md-12">
          <div className="grid email">
            <div className="grid-body">
              {selectedMessage ? (
                <div className="row">
                  <div className="col-md-12">
                    <button
                      type="button"
                      className="close"
                      onClick={handleCloseMessage}
                    >
                      ×
                    </button>
                    <h4 className="modal-title">
                      <i className="fa fa-envelope"></i>{" "}
                      {selectedMessage.sender}
                    </h4>
                    <div className="modal-body">
                      <p>{selectedMessage.text}</p>
                      <div className="reply-section">
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="replyDropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Reply
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="replyDropdown"
                          >
                            {replies.map((reply, index) => (
                              <span
                                key={index}
                                className="dropdown-item"
                                onClick={() => handleReply(reply)}
                              >
                                {reply}
                              </span>
                            ))}
                          </div>
                        </div>
                        <textarea
                          readOnly
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Select Message "
                          className="form-control mt-2"
                        ></textarea>
                        <button
                          className="btn btn-primary mt-2"
                          onClick={handleSendReply}
                        >
                          Send Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                
                    <div className="row">
                    
                        <div className="col-sm-6">
                          <label className="">
                            <div className="icheckbox_square-blue">
                              <input
                                type="checkbox"
                                id="check-all"
                                className="icheck"
                              />
                              <ins className="iCheck-helper"></ins>
                            </div>
                          </label>
                          <div className="btn-group">
                            <ul className="dropdown-menu" role="menu">
                              <li>
                                <a href="#/">Mark as read</a>
                              </li>
                              <li>
                                <a href="#/">Mark as unread</a>
                              </li>
                              <li>
                                <a href="#/">Mark as important</a>
                              </li>
                              <li className="divider"></li>
                              <li>
                                <a href="#/">Report spam</a>
                              </li>
                              <li>
                                <a href="#/">Delete</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-6 search-form">
                          <form action="#" className="text-right">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control input-sm"
                                placeholder="Search"
                              />
                              <span className="input-group-btn">
                                <button
                                  type="submit"
                                  name="search"
                                  className="btn_ btn-primary btn-sm search"
                                >
                                  <i className="fa fa-search"></i>
                                </button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="padding"></div>

                      <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        {messages.map((message, index) => (
                          <tr
                            key={index}
                            className={
                              unreadMessages.has(message) ? "unread" : ""
                            }
                          >
                                <td className="action">
                                  <input type="checkbox" />
                                </td>
                                <td className="action">
                                  <i className="fa fa-star-o"></i>
                                </td>
                                <td className="action">
                                  <i className="fa fa-bookmark-o"></i>
                                </td>
                                <td className="name">
                                  <span
                                    role="button"
                                    onClick={() => handleMessageClick(message)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {message.sender}
                                  </span>
                                </td>
                                <td className="subject">
                                  <span
                                    role="button"
                                    onClick={() => handleMessageClick(message)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {message.subject}
                                  </span>
                                </td>
                                <td className="time">{message.time}</td>
                                <td className="action">
                                  <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => handleMessageClick(message)}
                                  >
                                    Reply
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <ul className="pagination">
                        <li className="disabled">
                          <a href="#/">«</a>
                        </li>
                        <li className="active">
                          <a href="#/">1</a>
                        </li>
                        <li>
                          <a href="#/">2</a>
                        </li>
                        <li>
                          <a href="#/">3</a>
                        </li>
                        <li>
                          <a href="#/">4</a>
                        </li>
                        <li>
                          <a href="#/">5</a>
                        </li>
                        <li>
                          <a href="#/">»</a>
                        </li>
                      </ul>

                      </>
   
                  )}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          );
        };

const messages = [
  { sender: "Gmail", subject: "This Message Sent By Gmail and so on ", time: "11:30 PM", text: "If you want to reset password click the link below ..." },
  { sender: "Motaz", subject: "Very Important.", time: "10:32 PM", text: "The meeting will be at 9:00 Pm" },
  { sender: "James", subject: "About The Task", time: "09:39 PM", text: "Hello User , James Here" },
  // Add more message objects as needed
];

export default Inbox;
