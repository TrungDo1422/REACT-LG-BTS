/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Collapse, Row } from 'antd';
import './concern.scss';

const { Panel } = Collapse;

function Concern(props) {
    const [color, setColor] = useState('#226fb7');
    const onChange = (key, color) => {
        console.log(key);
        setColor('#fff');
    };

    return (
        <div className="question_container ">
            {props.concern.faq?.map((item) => (
                <div>
                    <Row>
                        <Col lg={12} md={24} sm={24} xs={24}>
                            <div className="list_container  ">
                                <div className="ques_title">
                                    <h2 className="h2">{item.title}</h2>
                                </div>
                                {item.faq?.map((item) => (
                                    <Collapse
                                        accordion
                                        // defaultActiveKey={item._id[1]}
                                        onChange={onChange}
                                        className="list_collapse"
                                    >
                                        <Panel
                                            header={item.content}
                                            // key={item._id}
                                            className="item"
                                            style={{ background: color }}
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
                                <iframe src={item.linkVideo} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Concern;
