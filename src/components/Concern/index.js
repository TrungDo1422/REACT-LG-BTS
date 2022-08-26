/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Collapse, Row } from 'antd';
import './concern.scss';

const { Panel } = Collapse;

function Concern(props) {
    const [colors, setColors] = useState('#226fb7');
    const onChange = (key) => {
        console.log(key);
        setColors('#fff');
    };

    return (
        <div className="question_container ">
            <div>
                <Row>
                    <Col lg={12} md={24} sm={24} xs={24}>
                        <div className="list_container  ">
                            <div className="ques_title">
                                <h2 className="h2">Some common concerns</h2>
                            </div>
                            {props.concern.faq?.map((item) => (
                                <Collapse
                                    accordion
                                    onChange={onChange}
                                    className="list_collapse "
                                >
                                    <Panel
                                        header={item.content}
                                        className="item p-2"
                                        style={{ background: colors }}
                                    >
                                        <p>{item.description}</p>
                                    </Panel>
                                </Collapse>
                            ))}
                        </div>
                    </Col>
                    <Col lg={12} md={24} sm={24} xs={24}>
                        <div className="img_container ">
                            <div className="img_media icon_media" id="bg">
                                <a href="#my-modal">
                                    <i className="btn-play">
                                        <FontAwesomeIcon icon={faPlay} />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="modal_container">
                    <div className="modal" id="my-modal">
                        <div className="modal_body">
                            <a className="close-btn" href="#bg">
                                &times;
                            </a>
                            <iframe src="//www.youtube.com/embed/mUjhiT0zSKI?autoplay=1" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concern;
