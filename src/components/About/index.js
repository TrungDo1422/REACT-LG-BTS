import { Col, Row } from 'antd';
import './About.scss';

function About({ about, notice }) {
    return (
        <div>
            <div className="about">
                <div>
                    <Row>
                        <Col lg={{ span: 8 }} md={24} sm={24} xs={24} className="order-last">
                            {notice.notice?.map((item) => (
                                <div key={item._id} className="about-road">
                                    <h4> {item.title} </h4>

                                    <ul>
                                        {item.notice?.map((road) => (
                                            <li key={road._id} className="d-flex" style={{ animationDelay: '300ms' }}>
                                                <div className="numb">
                                                    <span>{road.stt}</span>
                                                </div>
                                                <div className="desc">{road.description}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Col>

                        <Col lg={{ span: 16 }} md={24} sm={24} xs={24}>
                            {about.about?.map((item) => (
                                <div key={item._id} className="about-content">
                                    <div className="about-subtitle">{item.title}</div>
                                    <div className="about-title">
                                        <h2>{item.content}</h2>
                                    </div>
                                    <div className="about-desc">{item.description}</div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default About;
