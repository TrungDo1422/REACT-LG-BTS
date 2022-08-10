import React from 'react';
import './popular.scss';
import { Col, Row, Card } from 'antd';

const Popular = () => {
    return (
        <div className="campus_container pt-94 pb-70 md-pt-64 md-pb-40">
            <div>
                <h2>Our main campus</h2>
            </div>
            <div className='campus_Cards'>
                <Row justify="space-evenly" gutter={[32, 32]}>
                    <Col xs={{ span: 12, offset: 1, }} md={{ span: 12, offset: 1, }} lg={{ span: 6, offset: 2, }} >
                        <div className="courses-item">
                            <Card
                                className='card-item'
                                hoverable
                                style={{ width: '100%', }}
                                cover={<img alt="example"
                                    src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />}
                            >
                                <span style={{ fontSize: '26px', fontWeight: 700 }}>One plus (+) Programing foundation</span>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1, }} lg={{ span: 6, offset: 2, }} >
                        <div className="courses-item">
                            <Card
                                className='card-item'
                                hoverable
                                style={{ width: '100%', }}
                                cover={<img alt="example"
                                    src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />}
                            >
                                <span style={{ fontSize: '26px', fontWeight: 700 }}>Two plus (++) Skill up to to get ready</span>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={{ span: 12, offset: 1, }} lg={{ span: 6, offset: 2, }} >
                        <div className="courses-item">
                            <Card
                                className='card-item'
                                hoverable
                                style={{ width: '100%', }}
                                cover={<img alt="example"
                                    src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' />}
                            >
                                <span style={{ fontSize: '26px', fontWeight: 700 }}>Three plus (+++) How to become a senior</span>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    )
}
export default Popular