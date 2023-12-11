import React from "react";
import "./inbox.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Inbox() {
  return (
    <div className="w-100">
    
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
        <div className=" w-100 p-0">
        <div className="row mx-0">
          <div className="col-md-12">
            <div className="grid email">
              <div className="grid-body">
                <div className="row mx-0">
                  

                  <div className="col-md-12">
                    <div className="row mx-0">
                      <div className="col-sm-6">
                        <label

                          className=""
                        >
                          <div
                            className="icheckbox_square-blue"
                            style={
                              {
                                /*position: relative;*/
                              }
                            }
                          >
                            <input
                              type="checkbox"
                              id="check-all"
                              className="icheck"
                              style={
                                {
                                  /*position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);*/
                                }
                              }
                            />
                            <ins
                              className="iCheck-helper"
                              style={
                                {
                                  /*position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);*/
                                }
                              }
                            ></ins>
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
                          <tr>
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
                              <a href="#/">Gmail</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">011:30 PM</td>
                          </tr>
                          <tr>
                            <td className="action">
                              <input type="checkbox" />
                            </td>
                            <td className="action">
                              <i className="fa fa-star-o"></i>
                            </td>
                            <td className="action">
                              <i className="fa fa-bookmark"></i>
                            </td>
                            <td className="name">
                              <a href="#/">john.doe</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">10:30 PM</td>
                          </tr>
                          <tr className="read">
                            <td className="action">
                              <input type="checkbox" />
                            </td>
                            <td className="action">
                              <i className="fa fa-star"></i>
                            </td>
                            <td className="action">
                              <i className="fa fa-bookmark"></i>
                            </td>
                            <td className="name">
                              <a href="#/">Alice Johnson</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">10:20 PM</td>
                          </tr>
                          <tr>
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
                              <a href="#/">Emma White</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">08:30 PM</td>
                          </tr>
                          <tr className="read">
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
                              <a href="#/">Larry Gardner</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">08:30 PM</td>
                          </tr>
                          <tr className="read">
                            <td className="action">
                              <input type="checkbox" />
                            </td>
                            <td className="action">
                              <i className="fa fa-star-o"></i>
                            </td>
                            <td className="action">
                              <i className="fa fa-bookmark"></i>
                            </td>
                            <td className="name">
                              <a href="#/">Larry Gardner</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">08:30 PM</td>
                          </tr>
                          <tr>
                            <td className="action">
                              <input type="checkbox" />
                            </td>
                            <td className="action">
                              <i className="fa fa-star"></i>
                            </td>
                            <td className="action">
                              <i className="fa fa-bookmark-o"></i>
                            </td>
                            <td className="name">
                              <a href="#/">Larry Gardner</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">08:30 PM</td>
                          </tr>
                          <tr>
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
                              <a href="#/">Larry Gardner</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">08:30 PM</td>
                          </tr>
                          <tr className="read">
                            <td className="action">
                              <input type="checkbox" />
                            </td>
                            <td className="action">
                              <i className="fa fa-star"></i>
                            </td>
                            <td className="action">
                              <i className="fa fa-bookmark"></i>
                            </td>
                            <td className="name">
                              <a href="#/">Larry Gardner</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">08:30 PM</td>
                          </tr>
                          <tr>
                            <td className="action">
                              <input type="checkbox" />
                            </td>
                            <td className="action">
                              <i className="fa fa-star"></i>
                            </td>
                            <td className="action">
                              <i className="fa fa-bookmark-o"></i>
                            </td>
                            <td className="name">
                              <a href="#/">Larry Gardner</a>
                            </td>
                            <td className="subject">
                              <a href="#/">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed{" "}
                              </a>
                            </td>
                            <td className="time">08:30 PM</td>
                          </tr>
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
                  </div>

                  <div
                    className="modal fade"
                    id="compose-modal"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div className="modal-wrapper">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header bg-blue">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              ×
                            </button>
                            <h4 className="modal-title">
                              <i className="fa fa-envelope"></i> Compose New Message
                            </h4>
                          </div>
                          <form action="#" method="post">
                            <div className="modal-body">
                              <div className="form-group">
                                <input
                                  name="to"
                                  type="email"
                                  className="form-control"
                                  placeholder="To"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  name="cc"
                                  type="email"
                                  className="form-control"
                                  placeholder="Cc"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  name="bcc"
                                  type="email"
                                  className="form-control"
                                  placeholder="Bcc"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  name="subject"
                                  type="email"
                                  className="form-control"
                                  placeholder="Subject"
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  id="email_message"
                                  className="form-control"
                                  placeholder="Message"
                                  style={
                                    {
                                      /*height: 120px;*/
                                    }
                                  }
                                ></textarea>
                              </div>
                              <div className="form-group">
                                {" "}
                                <input type="file" name="attachment" />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                              >
                                <i className="fa fa-times"></i> Discard
                              </button>
                              <button
                                type="submit"
                                className="btn btn-primary pull-right"
                              >
                                <i className="fa fa-envelope"></i> Send Message
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Inbox;
