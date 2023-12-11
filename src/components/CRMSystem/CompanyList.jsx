import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const CompanyList = ({ companies, onSelectCompany }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCompany, setActiveCompany] = useState(null);

  const handleSelectCompany = (name) => {
    setActiveCompany(name);
    onSelectCompany(name);
  };

  const isCompanyActive = (name) => activeCompany === name;

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ListGroup>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredCompanies.map((company, index) => (
          <ListGroup.Item
            action
            key={index}
            onClick={() => handleSelectCompany(company.name)}
            style={{
              fontSize: "14px",
              backgroundColor: isCompanyActive(company.name)
                ? "#0766AD"
                : "white",
              color: isCompanyActive(company.name) ? "white" : "black",
              border: "1px solid #dee2e6",
            }}
          >
            {company.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CompanyList;
