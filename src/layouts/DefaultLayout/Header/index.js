import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'antd';
import React from 'react';
import './Header.scss';

function Header() {
    return (
        <div className="header">
            <div className="container_son">
                <Row justify="center">
                    <Col lg={{ span: 4 }}>
                        <div className="header-logo">
                            <img alt="" src="https://devplus.edu.vn/assets/images/devplus/Artboard_2.png" />
                        </div>
                    </Col>
                    <Col lg={{ span: 16 }}>
                        <div className="header-menu">
                            <ul>
                                <li>
                                    <a href="# ">HOME</a>
                                </li>
                                <li>
                                    <a href="# ">ABOUT DEVPLUS</a>
                                </li>
                                <li>
                                    <a href="# ">OUR PROGRAMME +</a>
                                </li>
                                <li>
                                    <a href="# ">DEVPLUS ACTIVITIES</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <div className="header-icon">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Header;
