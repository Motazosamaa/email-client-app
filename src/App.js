import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactPage from "./components/EmailClient/ContactPage";
import CalendarPage from "./components/EmailClient/CalendarPage";
import Main from "./components/EmailClient/Main";
import Navb from "./items/Navbar";
import ReportTable from "./items/grid";

const App = () => {
  const reportData = [
    {
      "            ": "Today",
      "Lead View": "0",
      "Lead Created": "0",
      "Email Added": "0",
      "Contact Added": "0",
      "Decision Date": "0",
      "Expire Date": "0",
      "LOA sent": "0",
      "Signed LOA": "0",
    },
    {
      "            ": "Current Week",
      "Lead View": "0",
      "Lead Created": "0",
      "Email Added": "0",
      "Contact Added": "0",
      "Decision Date": "0",
      "Expire Date": "0",
      "LOA sent": "0",
      "Signed LOA": "0",
    },
    {
      "            ": "Current Month",
      "Lead View": "0",
      "Lead Created": "0",
      "Email Added": "0",
      "Contact Added": "0",
      "Decision Date": "0",
      "Expire Date": "0",
      "LOA sent": "0",
      "Signed LOA": "0",
    },
    // ... more data
  ];
  return (
    <Router>
      <div>
        <Navb />
        <br />
        <Routes>
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
