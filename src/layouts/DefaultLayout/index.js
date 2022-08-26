import { useEffect, useState } from 'react';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Header from './Header';
import menuImgApi from '~/api/menuImgApi';
import navbarApi from '../../api/navbarAPi';

function DefaultLayout({ children }) {
    const [menuImg, setMenuImg] = useState([]);
    const [navbar, setNavbar] = useState([]);

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await navbarApi.getAll();

                setNavbar(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        const fetchImageData = async () => {
            try {
                const response = await menuImgApi.getAll();

                setMenuImg(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchBannerData();
        fetchImageData();
    }, []);
    return (
        <div>
            <Header menuImg={menuImg} navbar={navbar} />
            <div>
                <BackToTop />
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
