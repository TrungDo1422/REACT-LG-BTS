import { useEffect, useState } from 'react';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';
import headerApi from '~/api/headerApi';
import navbarAPi from '~/api/navbarAPi';

function DefaultLayout({ children }) {
    const [header, setHeader] = useState([]);
    const [navbar, setNavbar] = useState([]);

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await headerApi.getAll();

                setHeader(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchBannerData();
    }, []);
    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await navbarAPi.getAll();

                setNavbar(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchBannerData();
    }, []);
    return (
        <div>
            <Header header={header} navbar={navbar}/>
            <div>
                <BackToTop />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
