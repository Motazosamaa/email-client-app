import React, { useEffect, useState } from "react";
import ContactCard from "../CRMSystem/Contactcard";
import { useLocation } from "react-router-dom";
import exampleCompanies from "../../data/exampleCompanies";
import Modal from "react-bootstrap/Modal";
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
      e.target[0].value == "" ||
      e.target[1].value == "" ||
      e.target[2].value == "" ||
      e.target[3].value == ""
    ) {
    } else {
      navigator("/");
      let newUser = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
        address: e.target[3].value,
        notes: "Some notes about Eva.",
      };
      SetNewData({ ...data, ...newUser });
    }
  };
  useEffect(() => {
    if (data.name != undefined) {
      let found = exampleCompanies.find((x) => x.name == state.name);
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
    >
      <Modal.Header
        closeButton
        onClick={() => {
          navigator("/");
        }}
      >
        <Modal.Title>
          {" "}
          <p class="title">company information </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="d-flex flex-column flex-lg-row   justify-content-center align-items-center ">
          {" "}
          <form
            class="form border m-5"
            onSubmit={(e) => {
              setFormData(e);
            }}
          >
            <div class="flex">
              <label>
                <input type="text" class="input" />
                <span className="text-primary">company</span>
              </label>

              <label>
                <input type="text" class="input" />
                <span className="text-primary">company Phone</span>
              </label>
            </div>
            <div className="flex">
              <label>
                <input type="text" class="input" />
                <span className="text-primary">company city</span>
              </label>

              <label>
                <input type="text" class="input" />
                <span className="text-primary">company zip</span>
              </label>
            </div>

            <div className="flex">
              <label>
                <input required="" placeholder="" type="text" class="input" />
                <span className="text-primary"> Company DUN#</span>
              </label>
              <label>
                <input required="" placeholder="" type="text" class="input" />
                <span className="text-primary"> Revenue</span>
              </label>
            </div>
            <div className="flex">
              <div>
                <label htmlFor="">companyState:</label>
                <select name="" id="">
                  <option value="texas">texas</option>
                </select>{" "}
              </div>
              <div>
                <label htmlFor="">LeadPool:</label>
                <select name="" id="">
                  <option value="texas">texas</option>
                </select>{" "}
              </div>
            </div>
            <input type="submit" class="submit" value={"save"} />
          </form>
          {state == null ? " " : <ContactCard contact={state.contacts[0]} />}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactPage;
