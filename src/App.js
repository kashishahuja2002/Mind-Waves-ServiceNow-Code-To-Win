import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthContainer from "./components/auth/AuthContainer";
import PagesContainer from "./components/pages/PagesContainer";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Eap from "./components/pages/eap/Eap";
import EducationalResources from "./components/pages/educational-resources/EducationalResources";

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"website"}></Route>

          <Route path="/auth/login" element={<AuthContainer />}></Route>

          <Route path="/pages/" element={<PagesContainer />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="eap" element={<Eap />} />
            <Route path="set-reminders" element={"set-reminders"} />
            <Route path="daily-activities" element={"daily-activities"} />
            <Route path="educational-resources" element={<EducationalResources />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
