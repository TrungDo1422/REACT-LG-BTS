import { Col, Row } from 'antd';
import './Categories.scss';

function Categories(props) {
    return (
        <div className="categories">
            <div>
                <Row>
                    <Col md={{ span: 24 }}>
                        <div className="categories-title">
                            <h2>What an engineer after Devplus will must have?</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {props.categories.categories?.map((item) => (
                        <Col key={item._id} lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={24}>
                            <div className="categories-item " style={{ animationDelay: '500ms' }}>
                                <div className="categories-icon">
                                    <img src={item.iconUrl} alt="" />
                                </div>
                                <div className="categories-content">
                                    <h4 className="title">{item.content}</h4>
                                    <span>{item.course}</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Categories;
