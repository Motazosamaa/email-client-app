import React, { useEffect, useState } from "react";
import ContactCard from "../CRMSystem/Contactcard";
import { useLocation } from "react-router-dom";
import exampleCompanies from "../../data/exampleCompanies";
import Modal from "react-bootstrap/Modal";
import "./ContactPage.css";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [show, setShow] = useState(false);
  const navigator = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let { state } = useLocation();
  let [data, SetNewData] = useState({});

  let setFormData = (e) => {
    e.preventDefault();
    if (
      e.target[0].value === "" ||
      e.target[1].value === "" ||
      e.target[2].value === "" ||
      e.target[3].value === ""
    ) {
      // Handle the case where the form fields are empty
    } else {
      navigator("/");
      let newUser = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        address: e.target[3].value,
        notes: "Some notes about the contact",
      };
      SetNewData({ ...data, ...newUser });
    }
  };

  useEffect(() => {
    if (data.name !== undefined) {
      let found = exampleCompanies.find((x) => x.name === state.name);
      console.log(found);
      found.contacts.push(data);
      console.log(data, "data");
      console.log(exampleCompanies, "table");
    }
  }, [data]);

  useEffect(() => {
    handleShow();
  }, []);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="modalParent"
      backdrop="static"
      keyboard={false}
      dialogClassName="full-height-modal"
      style={{ height: "100%", overflowY: "auto" }}
    >
      <Modal.Header closeButton onClick={() => navigator("/")}>
        <Modal.Title>
          <p className="title">Lead Details</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="d-flex flex-grow-1"
        style={{ maxHeight: "90%", overflowY: "auto" }}
      >
        <div className="d-flex flex-column justify-content-between align-items-start w-100">
          <form
            className="form ml-5  mt-4"
            style={{ height: "100%" }}
            onSubmit={(e) => {
              setFormData(e);
            }}
          >
            <div className="form-group row">
              <label htmlFor="company" className="col-form-label col-md-4">
                <span className="text-primary">Company:</span>
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control my-full-width"
                  id="company"
                  defaultValue={state ? state.name : ""}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="firstName" className="col-form-label col-md-4">
                <span className="text-primary">First Name:</span>
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control my-full-width"
                  defaultValue={state ? state.contacts[0].name : ""}
                  id="firstName"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="email" className="col-form-label col-md-4">
                <span className="text-primary">Email:</span>
              </label>
              <div className="col-md-8">
                <input
                  type="email"
                  className="form-control my-full-width"
                  id="email"
                  defaultValue={state ? state.contacts[0].email : ""}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="phoneMain" className="col-form-label col-md-4">
                <span className="text-primary">Phone (Main):</span>
              </label>
              <div className="col-md-8">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneMain"
                  defaultValue={state ? state.contacts[0].phone : ""}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="phoneContact" className="col-form-label col-md-4">
                <span className="text-primary">Phone (Direct):</span>
              </label>
              <div className="col-md-8">
                <input type="tel" className="form-control" id="phoneContact" />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="address" className="col-form-label col-md-4">
                <span className="text-primary">Address:</span>
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Street Address"
                  defaultValue={state ? state.contacts[0].address.city : ""}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  id="city"
                  placeholder="City"
                  defaultValue={state ? state.contacts[0].address.city : ""}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  id="state"
                  placeholder="State"
                  defaultValue={state ? state.contacts[0].address.state : ""}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  id="zip"
                  placeholder="ZIP Code"
                  defaultValue={state ? state.contacts[0].address.zip : ""}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="status" className="col-form-label col-md-4">
                <span className="text-primary">Status:</span>
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="status"
                  value={state ? state.contacts[0].status : ""}
                  readOnly
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="lastViewed" className="col-form-label col-md-4">
                <span className="text-primary">Last Viewed:</span>
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  id="lastViewed"
                  value={state ? state.contacts[0].lastView : ""}
                  readOnly
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                htmlFor="callbackDateTime"
                className="col-form-label col-md-4"
              >
                <span className="text-primary">Callback Date & Time:</span>
              </label>
              <div className="col-md-8">
                <input
                  type="datetime-local"
                  className="form-control"
                  id="callbackDateTime"
                />
              </div>
            </div>

            <div className="form-group row" style={{ marginBottom: "20px" }}>
  <label htmlFor="decisionDate" className="col-form-label col-md-4" style={{ whiteSpace: "nowrap" }}>
    <span className="text-primary" style={{ marginBottom: "20px" }}>Decision Date:</span>
  </label>
  <div className="col-md-8 my-full-width">
    <input
      type="datetime-local"
      className="form-control"
      id="decisionDate"
    />
  </div>
</div>

            <div className="form-group row" style={{ marginRight: "15px" }}>
              {/* This div creates the margin to the right of the last field */}
              <div className="col-md-12">{/* Empty div for spacing */}</div>
            </div>
          </form>
        </div>
        <div className="w-75 mt-0">
          {state == null ? " " : <ContactCard contact={state.contacts[0]} />}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactPage;
