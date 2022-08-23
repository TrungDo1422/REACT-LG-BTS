import './Banner.scss';

function Banner(props) {
    return (
        <div>
            <div>
                {Array.isArray(props.banner.banner)
                    ? props.banner.banner?.map((item) => (
                          <div key={item._id}>
                              <div id="slider">
                                  <div className="text-content ">
                                      <h2
                                          className="text-heading capitalize fadeInLeft"
                                          data-wow-delay="300ms"
                                          data-wow-duration="3000ms"
                                          style={{
                                              color: 'white',
                                              visibility: 'visible',
                                              animationDuration: '3000ms',
                                              animationDelay: '900ms',
                                              animationName: 'fadeInLeft',
                                          }}
                                      >
                                          {item.title}
                                      </h2>
                                      <div
                                          className="text-description fadeInRight"
                                          data-wow-delay="900ms"
                                          data-wow-duration="3000ms"
                                          style={{
                                              visibility: 'visible',
                                              animationDuration: '3000ms',
                                              animationDelay: '900ms',
                                              animationName: 'fadeInRight',
                                          }}
                                      >
                                          {item.content}
                                      </div>
                                      <div
                                          className="btn-learn-more fadeInUp"
                                          data-wow-delay="1500ms"
                                          data-wow-duration="2000ms"
                                          style={{
                                              visibility: 'visible',
                                              animationDuration: '2000ms',
                                              animationDelay: '900ms',
                                              animationName: 'fadeInUp',
                                          }}
                                      >
                                          <a
                                              className="banner-style-custom"
                                              href="https://stunited.typeform.com/registration "
                                          >
                                              LEARN MORE
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default Banner;
