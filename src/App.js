import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagesContainer from "./components/pages/PagesContainer";
import Dashboard from "./components/pages/dashboard/Dashboard";

import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"website"}></Route>

          <Route path="/auth/" element={"auth"}>
            <Route path="signup" element={"signup"} />
            <Route path="login" element={"login"} />
          </Route>

          <Route path="/pages/" element={<PagesContainer />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="eap" element={"eap"} />
            <Route path="set-reminders" element={"set-reminders"} />
            <Route path="daily-activities" element={"daily-activities"} />
            <Route path="educational-resources" element={"educational-resources"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
