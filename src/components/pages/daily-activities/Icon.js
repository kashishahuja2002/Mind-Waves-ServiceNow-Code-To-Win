import React from 'react';
import '../../../styles/pages/WaterTracker/WaterTracker.scss';


const Icon = ({ handleClick }) => {
    return (
        <button className="icon" onClick={handleClick}>
            +
        </button>
    );
};

export default Icon;

