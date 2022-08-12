import React from 'react';
import roadmapImg from '../../assets/image/devplus/roadmapdev1.png';
import './onePlus.scss';

function OnePlus() {
    return (
        <div className="one-plus">
            <div data-tilt data-tilt-axis="x">
                <div className="img-card">
                    <img className="image zoom slider" src={roadmapImg} alt="..." />
                </div>
            </div>
        </div>
    );
}

export default OnePlus;
