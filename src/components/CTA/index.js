import React from 'react';
import { Row, Col, Image } from 'antd';
import './CTA.scss';

const CTA = () => {
    return (
        <div className="section_container">
            <Row>
                <Col lg={{ span: 12 }} className="pd-20">
                    <Image
                        preview={false}
                        className="img_course"
                        src="https://raw.githubusercontent.com/TrungDo1422/REACT-LG-BTS/main/src/assets/image/devplus/Admission_for_2021.png"
                    />
                </Col>
                <Col lg={{ span: 12 }} className="pd-20 ">
                    <div className="desc_content">
                        <div className="sec-title mb-40">
                            <h2 className="title_Desc">Admission for 2021</h2>
                            <div className="description_text">
                                Disclaimer: This position is expected to start around Feb 2022 and continue through the
                                entire Summer term. We ask for a minimum of 12 weeks, full-time, for most internships.
                                Please consider before submitting an application.
                            </div>
                            <div className="description_text">
                                Devplus aims to provide students the chance to work with our clients and awesome mentors
                                to level up your programing skillset in the RIGHT path. With your education and
                                experience, you will be able to take on real-world challenges from day one.
                            </div>
                        </div>
                        <a
                            className="btn_Apply"
                            href="https://stunited.typeform.com/registration"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            APPLY NOW
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default CTA;
