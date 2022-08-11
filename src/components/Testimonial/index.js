import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Testimonial.scss';
import quote2 from '~/assets/image/testimonial/style5/quote2.png';
import person1 from '~/assets/image/devplus/person1.png';
import person2 from '~/assets/image/devplus/person2.png';
import person3 from '~/assets/image/devplus/person3.png';

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
                                800: {
                                    items: 2,
                                },
                                1000: {
                                    items: 2,
                                },
                            }}
                        >
                            <div className="item">
                                <div className="author-desc" style={{ minHeight: '440px' }}>
                                    <div className="desc">
                                        <img className="quote" src={quote2} alt="" />
                                        This is an awesome programme which supports me too much in enhancing my skills
                                        and knowledge to become a developer. I feel very lucky because of joining
                                        Devplus.
                                    </div>
                                    <div className="author-img">
                                        <img src={person1} alt="" />
                                    </div>
                                </div>
                                <div className="author-part">
                                    <a className="name">Tien Thinh</a>
                                    <span className="designation">Member Devplus ++</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="author-desc" style={{ minHeight: '440px' }}>
                                    <div className="desc">
                                        <img className="quote" src={quote2} alt="" />I learnt a lot of knowledge from
                                        experienced seniors of Dev plus. They help me to understand the procedure in
                                        running a real project. Additionally, taking part in activities such as
                                        workshops promote my soft skills.
                                    </div>
                                    <div className="author-img">
                                        <img src={person2} alt="" />
                                    </div>
                                </div>
                                <div className="author-part">
                                    <a className="name">Quynh Nga</a>
                                    <span className="designation">Member Devplus ++</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="author-desc" style={{ minHeight: '440px' }}>
                                    <div className="desc">
                                        <img className="quote" src={quote2} alt="" />
                                        Dev plus help me to re-train about knowledge with technology, experience how to
                                        do the real project with senior developers by testing their current project, and
                                        share more experience with them. enjoy more events and workshops.
                                    </div>
                                    <div className="author-img">
                                        <img src={person3} alt="" />
                                    </div>
                                </div>
                                <div className="author-part">
                                    <a className="name">Thatsadaphone Inthapakdy</a>
                                    <span className="designation">Member Devplus +</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
