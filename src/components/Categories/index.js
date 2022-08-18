import { Col, Row } from 'antd';
import './Categories.scss';
import CategoryItem from '~/api/CategoryItem';

function Categories() {
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
                    {CategoryItem.map((item, index) => (
                        <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={24}>
                            <div className="categories-item " style={{ animationDelay: '500ms' }}>
                                <div className="categories-icon">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="categories-content">
                                    <h4 className="title">{item.title}</h4>
                                    <span>{item.content}</span>
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
