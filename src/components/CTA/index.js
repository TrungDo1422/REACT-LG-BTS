/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Row, Col, Image } from 'antd';
import './CTA.scss';

const CTA = (props) => {
    return (
        <div className="section_container">
            {props.cta.cta?.map((item) => (
                <Row key={item._id}>
                    <Col lg={{ span: 12 }} className="pd-20">
                        <Image preview={false} className="img_course" src={item.imgUrl} />
                    </Col>
                    <Col lg={{ span: 12 }} className="pd-20 ">
                        <div className="desc_content">
                            <div className="sec-title mb-40">
                                <h2 className="title_Desc">{item.title}</h2>
                                {item.cta.map((item) => (
                                    <div className="description_text">{item.content}</div>
                                ))}
                            </div>
                            <a className="btn_Apply" href="https://stunited.typeform.com/registration" target="_blank">
                                Apply Now
                            </a>
                        </div>
                    </Col>
                </Row>
            ))}
        </div>
    );
};

export default CTA;
