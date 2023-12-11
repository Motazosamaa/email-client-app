import React from 'react';

const CompanyDetails = ({ selectedCompany }) => {
  return (
    <div>
      <h2>Company Details</h2>
      {selectedCompany && <p>{selectedCompany}</p>}
    </div>
  );
};

export default CompanyDetails;
