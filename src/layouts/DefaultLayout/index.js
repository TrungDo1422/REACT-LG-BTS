import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div >
                <BackToTop />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
