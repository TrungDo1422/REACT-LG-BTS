import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.scss';
import quote2 from '~/assets/image/testimonial/style5/quote2.png';
import TestimonialItem from '~/api/TestimonialItem';

function Testimonial() {
    return (
        <div className="home-styles">
            <div className="container">
                <h2 className="name-alumni">What alumni saying</h2>
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
                            {TestimonialItem.map((item, index) => (
                                <div className="item">
                                    <div className="author-desc" style={{ minHeight: '440px' }}>
                                        <div className="desc">
                                            <img className="quote" src={quote2} alt="" />
                                            {item.content}
                                        </div>
                                        <div className="author-img">
                                            <img src={item.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="author-part">
                                        <a className="name">{item.name}</a>
                                        <span className="designation">{item.designation}</span>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
