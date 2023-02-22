import React from 'react';
import '../../../styles/pages/WaterTracker/WaterTracker.scss';


const Glass = ({ waterLevel }) => {
    return (
        <div className="glass">
            <div className="water" style={{ height: `${waterLevel}%` }}></div>
        </div>
    );
};

export default Glass;