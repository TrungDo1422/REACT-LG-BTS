import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Col, Drawer, Image, Row } from 'antd';
import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header({ menuImg, navbar }) {
    const [visible, setVisible] = useState(false);
    const [imageVisible, setImageVisible] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const showDrawer = () => {
        setVisible(true);
        // setImageVisible(true);
    };

    const onClose = () => {
        setVisible(false);
        // setImageVisible(false);
    };

    return (
        <div className="header_card">
            <div className="container_son">
                <Row className="header-wrap" justify="space-between">
                    <Col lg={{ span: 4 }} md={{ span: 4 }} sm={{ span: 12 }}>
                        <div className="header-logo">
                            <img
                                alt=""
                                src="https://res.cloudinary.com/lg-btg/image/upload/v1661341722/image-uploader/imldukwwlmliqzjzacxw.png"
                            />
                        </div>
                    </Col>
                    <Col className="cc" lg={{ span: 16 }}>
                        <div className="header-menu">
                            <ul>
                                <li>
                                    <Link className="header-menu-home" to={'/'}>
                                        HOME
                                    </Link>
                                </li>
                                <li>
                                    <a href="# ">ABOUT DEVPLUS</a>
                                </li>
                                <li className="header-menu-list">
                                    <a href="# ">
                                        OUR PROGRAMME
                                        <span className="header-menu-list-item">+</span>
                                        <span className="header-menu-list-item">-</span>
                                    </a>
                                    <div className="header-submenu">
                                        <ul className="header-submenu-list">
                                            <li>
                                                <Link to={'/onePlus'}>One Plus Campus</Link>
                                            </li>
                                            <li>
                                                <Link to={'/twoPlus'}>Two Plus Campus</Link>
                                            </li>
                                            <li>
                                                <a href="/threePlus">Three Plus Campus</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="# ">DEVPLUS ACTIVITIES</a>
                                </li>
                                <li>
                                    <Link className="" to={'/admin'}>
                                        ADMIN MANAGE
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="cc" lg={{ span: 4 }}>
                        <div className="header-icon" onClick={showDrawer}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </Col>
                    <Col md={{ span: 6 }} sm={{ span: 12 }}>
                        <div
                            className="header-icon-menu"
                            onClick={() => {
                                setSidebar(!sidebar);
                            }}
                        >
                            <FontAwesomeIcon icon={faBars} />
                            {sidebar ? (
                                <ul className="navbar-submenu">
                                    <li>
                                        <a href="# ">Home</a>
                                    </li>
                                    <li>
                                        <a href="# ">About Devplus</a>
                                    </li>
                                    <li>
                                        <a href="# ">Our Programme</a>
                                    </li>
                                    <li>
                                        <a href="# ">Devplus ACTIVITIES</a>
                                    </li>
                                </ul>
                            ) : (
                                <div />
                            )}
                        </div>
                    </Col>
                </Row>
                <Drawer placement="right" closable={false} visible={visible} width={500} mask={false}>
                    <div className="navbar">
                        <div className="close-icon" onClick={onClose}>
                            <FontAwesomeIcon className="close-icon-x" icon={faXmark} />
                        </div>
                        {navbar.navbar?.map((item) => (
                            <div key={item._id}>
                                <div className="navbar-logo">
                                    <img className="navbar-logo-img" alt="" src={item.logoUrl} />
                                </div>
                                <p className="navbar-desc">{item.content}</p>
                            </div>
                        ))}

                        <Row gutter={[10, 10]}>
                            {menuImg.uploadImg?.map((item) => (
                                <Col key={item._id} lg={{ span: 8 }}>
                                    <>
                                        <Image
                                            className="navbar-img"
                                            preview={{
                                                imageVisible: false,
                                            }}
                                            src={item.uploadImg}
                                            onClick={() => setImageVisible(true)}
                                        />
                                        <div
                                            style={{
                                                display: 'none',
                                            }}
                                        >
                                            <Image.PreviewGroup
                                                preview={{
                                                    imageVisible,
                                                    onVisibleChange: (vis) => setImageVisible(vis),
                                                }}
                                            >
                                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                                                <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                                            </Image.PreviewGroup>
                                        </div>
                                    </>
                                </Col>
                            ))}

                            {/* <Image
                                preview={{
                                    visible: false,
                                }}
                                width={200}
                                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                onClick={() => setVisible(true)}
                            /> */}

                            <img className="navbar-map" alt="" src="https://devplus.edu.vn/assets/images/map.png" />
                            <img
                                className="navbar-fb"
                                alt=""
                                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Facebook%2BIcon%2BBlack.png"
                            />
                            {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                        </Row>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}

export default Header;
