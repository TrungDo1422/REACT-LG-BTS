import { Col, Row } from 'antd';
import './About.scss';

function About() {
    return (
        <div>
            <div className="about">
                <div>
                    <Row>
                        <Col lg={{ span: 8 }} md={24} sm={24} className="order-last">
                            <div className="about-road">
                                <h4>Road to be a devplus</h4>
                                <ul>
                                    <li className="d-flex" style={{ animationDelay: '300ms' }}>
                                        <div className="numb">
                                            <span>1</span>
                                        </div>
                                        <div className="desc">Apply Devplus</div>
                                    </li>
                                    <li className="d-flex" style={{ animationDelay: '400ms' }}>
                                        <div className="numb">
                                            <span>2</span>
                                        </div>
                                        <div className="desc">Testing and Interview</div>
                                    </li>
                                    <li className="d-flex" style={{ animationDelay: '500ms' }}>
                                        <div className="numb">
                                            <span>3</span>
                                        </div>
                                        <div className="desc">1st plus (+) campus</div>
                                    </li>
                                    <li className="d-flex" style={{ animationDelay: '600ms' }}>
                                        <div className="numb">
                                            <span>4</span>
                                        </div>
                                        <div className="desc">2nd plus (++) campus</div>
                                    </li>
                                    <li className="d-flex" style={{ animationDelay: '700ms' }}>
                                        <div className="numb">
                                            <span>5</span>
                                        </div>
                                        <div className="desc">Onboard &amp; start your career</div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={{ span: 16 }} md={24} sm={24}>
                            <div className="about-content">
                                <div className="about-subtitle">ABOUT DEVPLUS</div>
                                <div className="about-title">
                                    <h2>
                                        The Fact: Skilled labour shortage for software companies but full of freshers
                                        and low level juniors
                                    </h2>
                                </div>
                                <div className="about-desc">
                                    Our responsibility is filling the gap between the quality of graduate students and
                                    the quality of engineers. Devplus will help reducing the cost of re-training and
                                    accelerating the skill-up progress of students and freshers.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default About;
