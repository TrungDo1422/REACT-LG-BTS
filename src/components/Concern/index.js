import React, { useState } from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Collapse, Row } from 'antd';
import './concern.scss';

const { Panel } = Collapse;

function Concern() {
    const [color, setColor] = useState('#226fb7')
    const onChange = (key, color) => {
        console.log(key)
        setColor('#fff')
    };


    return (
        <div className="question_container ">
            <Row>
                <Col lg={12} md={24} sm={24} xs={24}>
                    <div className="list_container  ">
                        <div className="ques_title">
                            <h2 className="h2">Some common concerns</h2>
                        </div>
                        <Collapse accordion defaultActiveKey={['1']} onChange={onChange} className="list_collapse">
                            <Panel header="Do I need to be fulltime during the campus?" key="1"
                                className='item'
                                style={{ background: color }}>
                                <p>
                                    Yes, it's mandatory. Fulltime as well as full commitment
                                    in order to obtain the best achievement.
                                </p>
                            </Panel>
                            <Panel header="Does Devplus offer free courses?" key="2" className='item'>
                                <p>
                                    Yes, it's kind of a scholarship. But, you need to pass our
                                    challenge through test and interview round.
                                </p>
                            </Panel>
                            <Panel header=" Which course will be suitable with me?" key="3" className='item' >
                                <p>
                                    The first plus (+) course is designed to students who
                                    would like to join the OJT (on-job-train) programme. Next
                                    level, the second plus (++) course will suitable for one
                                    who got the first plus or fresher, who would like to be
                                    trained in order to ready to onboard the real projects.
                                    The third plus (+++) course is intended to the alumni of
                                    the second plus degree or junior who would like to reach a
                                    specific tech-stack: AI, Blockchain, Devops...
                                </p>
                            </Panel>
                            <Panel header="Does Devplus guarantee a job after graduating?" key="4" className='item'>
                                <p>
                                    Yes, it's could be a good job. Once you get the second
                                    plus (++) you will ready to onboard the projects of our
                                    partners, the most highly recommended places to work.
                                </p>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
                <Col lg={12} md={24} sm={24} xs={24}>
                    <div className="img_container ">
                        <div className="img_media icon_media" id='bg'>
                            <a href='#my-modal'>
                                <i className='btn-play'>
                                    <FontAwesomeIcon icon={faPlay} style={{}} />
                                </i>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className='modal_container'>
                <div className='modal' id='my-modal'>
                    <div className='modal_body'>
                        <a className='close-btn' href='#bg'>&times;</a>
                        <iframe
                            src="//www.youtube.com/embed/mUjhiT0zSKI?autoplay=1"
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Concern;