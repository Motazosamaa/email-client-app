import React from 'react';
import './reportTable.css';

const ReportTable = ({ reportData }) => {
    const headers = ['            ','Lead View', 'Lead Created', 'Email Added', 'Contact Added' , 'Decision Date' , 'Expire Date' , 'LOA sent' , 'Signed LOA'];

    return (
        <table className="report-table">
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {reportData.map((dataRow, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header, index) => (
                            <td key={index}>{dataRow[header]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ReportTable;