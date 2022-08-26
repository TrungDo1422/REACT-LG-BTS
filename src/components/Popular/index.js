import React from 'react';
import './popular.scss';
import { Col, Row, Card } from 'antd';

const Popular = (props) => {
    return (
        <div className="campus_container pt-30 pb-30">
            <div className="pd-70">
                <div>
                    <h2 className="Head_title">Our main campus</h2>
                </div>
                <div className="campus_Cards">
                    <Row gutter={[32, 32]}>
                        {props.popular.popular?.map((item) => (
                            <Col key={item._id} md={12} lg={8} sm={24} xs={24} className="pr-pl">
                                <Card className="card-item" hoverable cover={<img src={item.imgUrl} alt="#" />}>
                                    <div className="textCard">
                                        <span>{item.content}</span>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};
export default Popular;
