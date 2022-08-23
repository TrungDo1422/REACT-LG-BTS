import { Col, Row } from 'antd';
import './Categories.scss';

function Categories(props) {
    return (
        <div className="categories">
            {props.categories.categories?.map((item) => (
                <div key={item._id}>
                    <Row>
                        <Col md={{ span: 24 }}>
                            <div className="categories-title">
                                <h2>{item.title}</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {item.categories.map((icon) => (
                            <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={24}>
                                <div key={icon._id} className="categories-item " style={{ animationDelay: '500ms' }}>
                                    <div className="categories-icon">
                                        <img src={icon.iconUrl} alt="" />
                                    </div>
                                    <div className="categories-content">
                                        <h4 className="title">{icon.content}</h4>
                                        <span>{icon.course}</span>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            ))}
        </div>
    );
}

export default Categories;
