import { Col, Row } from 'antd';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">

                <div className="container">
                    <Row>
                        <Col span={12}>cot 1</Col>
                        <Col span={12}>cot 2</Col>
                    </Row>
                    <Row>
                        {/* lg={{ span: 6 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 } */}
                        <Col span={6}>
                            <h4 className="widget-title">DEVELOP THE SKILLS TO MOVE FAST AND STAY AHEAD.</h4>
                            <ul className="site-map text-white">
                                <li>
                                    Devplus is not a training center, it’s battle campus for you to level up your
                                    skillsets and ready to onboard any projects in our “kindest” companies listing
                                </li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h4 className="widget-title">FOR DEVPLUS</h4>
                            <ul className="site-map text-white">
                                <li>
                                    <a href="# ">Training space</a>
                                </li>
                                <li>
                                    <a href="# ">Alumni network</a>
                                </li>
                                <li>
                                    <a href="# ">Connect with experts</a>
                                </li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h4 className="widget-title">OUR CAMPUS</h4>
                            <ul className="site-map text-white">
                                <li>
                                    <a href="# ">One plus (+) Programing foundation</a>
                                </li>
                                <li>
                                    <a href="# ">Two plus (++) Skill up and onboard</a>
                                </li>
                                <li>
                                    <a href="# ">Three plus (+++) Become a senior</a>
                                </li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <h4 className="widget-title">ADDRESS</h4>
                            <ul className="address-widget text-white">
                                <li>
                                    {/* <img src="assets/images/icon/location.png" style="color: #ffffff" alt="" /> */}
                                    <div className="infor-company">
                                        368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Đà Nẵng
                                    </div>
                                </li>
                                <li>
                                    {/* <img src="assets/images/icon/call.png" alt="" /> */}
                                    <div className="infor-company">
                                        <a href="tel:0368492885">(+84) 368492885</a>
                                    </div>
                                </li>
                                <li>
                                    {/* <img src="assets/images/icon/mail.png" alt="" /> */}
                                    <div className="infor-company">
                                        <a href="mailto:hello@stunited.vn">hello@stunited.vn</a>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>

            </div>

        </div>
    );
}

export default Footer;
