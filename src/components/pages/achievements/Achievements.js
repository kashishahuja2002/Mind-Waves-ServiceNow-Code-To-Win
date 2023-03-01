import React from "react";

import MonthlyAchievements from "./MonthlyAchievements";
import '../../../styles/pages/Achievements.scss';

const Achievements = () => {
    return (
        <>
            <MonthlyAchievements month="February" />
            <MonthlyAchievements month="January" />
        </>
    );
}

export default Achievements;