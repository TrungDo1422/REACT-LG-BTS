import { Col, Row } from 'antd';
import './footer.scss';
import location from '~/assets/image/icon/location.png';
import call from '~/assets/image/icon/call.png';
import mail from '~/assets/image/icon/mail.png';
import artboard2 from '~/assets/image/devplus/Artboard_2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div>
            <>
                <div className="footer">
                    <div className="container-footer">
                        <div className="footer-top">
                            <Row className='row' gutter={30} justify="center">
                                <Col lg={6} md={24} sm={24} xs={24}>
                                    <h4 className="widget-title">DEVELOP THE SKILLS TO MOVE FAST AND STAY AHEAD.</h4>
                                    <ul className="site-map">
                                        <li>
                                            Devplus is not a training center, it’s battle campus for you to level up
                                            your skillsets and ready to onboard any projects in our “kindest” companies
                                            listing
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={6} md={24} sm={24} xs={24}>
                                    <h4 className="widget-title">FOR DEVPLUS</h4>
                                    <ul className="site-map">
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
                                <Col lg={6} md={24} sm={24} xs={24}>
                                    <h4 className="widget-title">OUR CAMPUS</h4>
                                    <ul className="site-map">
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
                                <Col lg={6} md={24} sm={24} xs={24}>
                                    <h4 className="widget-title">ADDRESS</h4>
                                    <ul className="address-widget">
                                        <li>
                                            <img src={location} style={{ color: '#ffffff' }} alt="" />
                                            <div className="infor-company">
                                                368 Đường Trần Hưng Đạo, An Hải, An Hải Tây, Sơn Trà, Đà Nẵng
                                            </div>
                                        </li>
                                        <li>
                                            <img src={call} alt="" />
                                            <div className="infor-company">
                                                <a href="tel:0368492885">(+84) 368492885</a>
                                            </div>
                                        </li>
                                        <li>
                                            <img src={mail} alt="" />
                                            <div className="infor-company">
                                                <a href="mailto:hello@stunited.vn">hello@stunited.vn</a>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <Row justify="space-between">
                                <Col>
                                    <div className="footer-logo">
                                        <a href="# ">
                                            <img src={artboard2} alt="" />
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                    <ul className="footer-social">
                                        <li>
                                            <a href="https://www.facebook.com/Devplusprogramme">
                                                <FontAwesomeIcon className="iconfb" icon={faFacebookF} />
                                            </a>
                                        </li>
                                        <li>Facebook</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                {/* footer end */}
                {/* start scrollUp  */}
                <a href="#top" className="to-top">
                    <i className="fa-solid fa-angle-up" />
                </a>
            </>
        </div>
    );
}

export default Footer;
