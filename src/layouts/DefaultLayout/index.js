import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <BackToTop />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
