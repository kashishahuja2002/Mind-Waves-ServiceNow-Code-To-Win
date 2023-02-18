import { BrowserRouter, Routes, Route } from "react-router-dom";

import PagesContainer from "./components/pages/PagesContainer";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"website"}></Route>

        <Route path="/auth/" element={"auth"}>
          <Route path="signup" element={"signup"} />
          <Route path="login" element={"login"} />
        </Route>

        <Route path="/pages/" element={<PagesContainer />}>
          <Route path="dashboard" element={"dashboard"} />
          <Route path="eap" element={"eap"} />
          <Route path="reminders-breaks" element={"reminders-breaks"} />
          <Route path="daily-activities" element={"daily-activities"} />
          <Route path="educational-resources" element={"educational-resources"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
