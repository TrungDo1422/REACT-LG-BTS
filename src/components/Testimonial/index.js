import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.scss';
import quote2 from '~/assets/image/testimonial/style5/quote2.png';

function Testimonial(props) {
    return (
        <div className="home-styles">
            {props.testimonial.testimonial?.map((item) => (
                <div key={item._id} className="container">
                    <h2 className="name-alumni">{item.title}</h2>
                    <div className="row">
                        <div className="col-12 m-auto">
                            <OwlCarousel
                                className="owl-theme"
                                loop
                                margin={15}
                                autoPlay
                                autoplayTimeout={5000}
                                autoplayHoverPause
                                dotsSpeed={750}
                                smartSpeed={750}
                                dots
                                responsiveClass
                                responsive={{
                                    0: {
                                        items: 1,
                                    },
                                    900: {
                                        items: 2,
                                    },
                                }}
                            >
                                {item.testimonial?.map((item) => (
                                    <div key={item._id} className="item">
                                        <div className="author-desc" style={{ minHeight: '440px' }}>
                                            <div className="desc">
                                                <img className="quote" src={quote2} alt="" />
                                                {item.content}
                                            </div>
                                            <div className="author-img">
                                                <img src={item.avataUrl} alt="" />
                                            </div>
                                        </div>
                                        <div className="author-part">
                                            <div className="name">{item.name}</div>
                                            <span className="designation">{item.Plus}</span>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Testimonial;
