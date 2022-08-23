import './Home.scss';
import About from '~/components/About';
import Banner from '~/components/Banner';
import Categories from '~/components/Categories';
import Concern from '~/components/Concern';
import CTA from '~/components/CTA';
import Popular from '~/components/Popular';
import Testimonial from '~/components/Testimonial';
import bannerApi from '~/api/bannerApi';
import aboutApi from '~/api/aboutApi';
import noticeApi from '~/api/noticeAPi';
import categoriesApi from '~/api/categoriesApi';
import popularApi from '~/api/popularApi';
import ctaApi from '~/api/ctaApi';
import concernApi from '~/api/concernApi';
import testimonialApi from '~/api/testimonialApi';
import { useEffect, useState } from 'react';

function Home() {
    const [banner, setBanner] = useState([]);
    const [about, setAbout] = useState([]);
    const [notice, setNotice] = useState([]);
    const [categories, setCategories] = useState([]);
    const [popular, setPopular] = useState([]);
    const [cta, setCta] = useState([]);
    const [concern, setConcern] = useState([]);
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await bannerApi.getAll();

                setBanner(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchBannerData();
    }, []);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await aboutApi.getAll();

                setAbout(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchAboutData();
    }, []);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await noticeApi.getAll();

                setNotice(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchAboutData();
    }, []);
    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await categoriesApi.getAll();

                setCategories(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchAboutData();
    }, []);
    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await popularApi.getAll();

                setPopular(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchAboutData();
    }, []);
    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await ctaApi.getAll();

                setCta(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchAboutData();
    }, []);
    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await concernApi.getAll();

                setConcern(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchAboutData();
    }, []);
    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await testimonialApi.getAll();

                setTestimonial(response);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchAboutData();
    }, []);

    return (
        <>
            <Banner banner={banner} />
            <About about={about} notice={notice} />
            <Categories categories={categories} />
            <Popular popular={popular} />
            <CTA cta={cta} />
            <Concern concern={concern} />
            <Testimonial testimonial={testimonial} />
        </>
    );
}

export default Home;
