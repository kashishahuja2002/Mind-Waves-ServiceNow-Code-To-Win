import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MonthlyAchievements from "./MonthlyAchievements";
import { getBadges } from '../../../redux/achievements/AchievementsActions';

import '../../../styles/pages/Achievements.scss';

const Achievements = () => {
    const achievements = useSelector((store) => store.achievements);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBadges("user/badges", achievements.monthlySum));
    }, [])

    return (
        achievements.badges.map((obj) =>(
            <MonthlyAchievements key={`achievements-${obj.month}`} data={obj} />
        ))
    );
}

export default Achievements;