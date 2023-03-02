import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import LinearProgress from '@mui/material/LinearProgress';
import AuthContainer from "./components/auth/AuthContainer";
import PagesContainer from "./components/pages/PagesContainer";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Eap from "./components/pages/eap/Eap";
import EducationalResources from "./components/pages/educational-resources/EducationalResources";
import Profile from "./components/pages/profile/Profile";
import Achievements from "./components/pages/achievements/Achievements";
import DailyActivities from "./components/pages/daily-activities/DailyActivities";
import RelaxingActivities from "./components/pages/relaxing-activities/RelaxingActivities";
import Leaderboard from "./components/pages/leaderboard/Leaderboard";

import './App.scss';

function App() {
  const loading = useSelector((store) => store.app.barLoading);

  return (
    <Suspense fallback={<div>Please wait while loading...</div>}>
      {loading ? <LinearProgress /> : ""}

      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={"website"}></Route>

            <Route path="/auth/login" element={<AuthContainer />}></Route>

            <Route path="/pages/" element={<PagesContainer />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="eap" element={<Eap />} />
              <Route path="set-reminders" element={"set-reminders"} />
              <Route path="relaxing-activities" element={<RelaxingActivities />} />
              <Route path="daily-activities" element={<DailyActivities />} />
              <Route path="educational-resources" element={<EducationalResources />} />
              <Route path="profile" element={<Profile />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="leaderboard" element={<Leaderboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
