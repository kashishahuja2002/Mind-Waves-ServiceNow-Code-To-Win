import { BrowserRouter, Routes, Route } from "react-router-dom";
import Eap from "./components/pages/eap/Eap";
import PagesContainer from "./components/pages/PagesContainer";
import Dashboard from "./components/pages/dashboard/Dashboard";
import './App.scss';
import DailyActivities from "./components/pages/daily-activities/DailyActivities";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={"website"}></Route>

          <Route path="/auth" element={"auth"}></Route>

          <Route path="/pages/" element={<PagesContainer />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="eap" element={<Eap />} />
            <Route path="set-reminders" element={"set-reminders"} />
            <Route path="daily-activities" element={<DailyActivities />} />
            <Route path="educational-resources" element={"educational-resources"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
