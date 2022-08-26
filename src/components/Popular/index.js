import React from 'react';
import './popular.scss';
import { Col, Row, Card } from 'antd';

const Popular = () => {
    return (
        <div className="campus_container pt-30 pb-30">
            <div className="pd-70">
                <div>
                    <h2 className="Head_title">Our main campus</h2>
                </div>
                <div className="campus_Cards">
                    <Row gutter={[32, 32]}>
                        <Col md={12} lg={8} sm={24} xs={24} className="pr-pl">
                            <Card
                                className="card-item"
                                hoverable
                                cover={
                                    <img
                                        src="https://raw.githubusercontent.com/TrungDo1422/REACT-LG-BTS/main/src/assets/image/devplus/One_plus.png"
                                        alt="#"
                                    />
                                }
                            >
                                <div className="textCard">
                                    <span>One plus (+) Programing foundation</span>
                                </div>
                            </Card>
                        </Col>
                        <Col md={12} lg={8} sm={24} xs={24} className="pr-pl">
                            <Card
                                className="card-item"
                                hoverable
                                cover={
                                    <img
                                        alt="#"
                                        src="https://raw.githubusercontent.com/TrungDo1422/REACT-LG-BTS/main/src/assets/image/devplus/Two_plus.png"
                                    />
                                }
                            >
                                <div className="textCard">
                                    <span s>Two plus (++) Skill up to to get ready</span>
                                </div>
                            </Card>
                        </Col>
                        <Col md={12} lg={8} sm={24} xs={24} className="pr-pl">
                            <Card
                                className="card-item"
                                hoverable
                                cover={
                                    <img
                                        alt="#"
                                        src="https://raw.githubusercontent.com/TrungDo1422/REACT-LG-BTS/main/src/assets/image/devplus/Three_plus.png"
                                    />
                                }
                            >
                                <div className="textCard">
                                    <span>Three plus (+++) How to become a senior</span>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};
export default Popular;
