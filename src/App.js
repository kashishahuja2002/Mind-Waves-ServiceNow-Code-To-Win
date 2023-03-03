import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import LinearProgress from '@mui/material/LinearProgress';

import LandingPage from './components/landing-page/LandingPage';
import AuthContainer from "./components/auth/AuthContainer";
import PagesContainer from "./components/pages/PagesContainer";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Eap from "./components/pages/eap/Eap";
import SetReminders from './components/pages/set-reminders/SetReminders';
import RelaxingActivities from "./components/pages/relaxing-activities/RelaxingActivities";
import DailyActivities from "./components/pages/daily-activities/DailyActivities";
import EducationalResources from "./components/pages/educational-resources/EducationalResources";
import Achievements from "./components/pages/achievements/Achievements";
import Leaderboard from "./components/pages/leaderboard/Leaderboard";
import Profile from "./components/pages/profile/Profile";

import './App.scss';

function App() {
  const loading = useSelector((store) => store.app.barLoading);

  return (
    <Suspense fallback={<div>Please wait while loading...</div>}>
      {loading ? <LinearProgress /> : ""}

      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>

            <Route path="/auth/login" element={<AuthContainer />}></Route>

            <Route path="/pages/" element={<PagesContainer />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="eap" element={<Eap />} />
              <Route path="set-reminders" element={<SetReminders />} />
              <Route path="relaxing-activities" element={<RelaxingActivities />} />
              <Route path="daily-activities" element={<DailyActivities />} />
              <Route path="educational-resources" element={<EducationalResources />} />
              <Route path="achievements" element={<Achievements />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<AuthContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
