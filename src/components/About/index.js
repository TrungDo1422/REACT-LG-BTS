import { Col, Row } from 'antd';
import './About.scss';

function About({ about, notice }) {
    return (
        <div>
            <div className="about">
                <div>
                    <Row>
                        <Col lg={{ span: 8 }} md={24} sm={24} xs={24} className="order-last">
                            <div className="about-road">
                                <h4> ROAD TO BE A DEVPLUS </h4>

                                <ul>
                                    {notice.notice?.map((item) => (
                                        <li key={item._id} className="d-flex" style={{ animationDelay: '300ms' }}>
                                            <div className="numb">
                                                <span>{item.stt}</span>
                                            </div>
                                            <div className="desc">{item.description}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
