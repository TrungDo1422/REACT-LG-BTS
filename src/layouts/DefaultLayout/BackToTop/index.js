import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { BackTop } from 'antd';
import React from 'react';
import './BackToTop.scss';

function BackToTop() {
    return (
        <div>
            <BackTop>
                <div className="back-top">
                    <FontAwesomeIcon className="icon" icon={faAngleUp} />
                </div>
            </BackTop>
        </div>
    );
}

export default BackToTop;
