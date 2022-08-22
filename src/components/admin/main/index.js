import React, { useState, useEffect } from 'react';
import './main.scss';
import Banner from './mainComponent/banner'
import About from './mainComponent/about'
import Category from './mainComponent/category'
import Popular from './mainComponent/popular'
import Cta from './mainComponent/cta'
import Concern from './mainComponent/concern'
import Alumni from './mainComponent/alumni';
import bannerApi from '~/api/bannerApi'
import aboutApi from '~/api/aboutApi';




const Main = () => {
    const [bannerDatas, setBannerDatas] = useState([]);
    const [aboutDatas, setAboutDatas] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const fetchBanner = async () => {
            try {
                setLoading(false)
                const response = await bannerApi.getAll();
                setBannerDatas(response)
                setLoading(true)
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }

        }
        fetchBanner();
    }, []);

    //About----------------
    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await aboutApi.getAll();
                setAboutDatas(response)
            } catch (error) {
                console.log('Failed to fetch about list: ', error);
            }

        }
        fetchAbout();
    }, []);
    return (
        <div>
            <div className="content-wrapper">
                <div className='modal_container' id='exit'>
                    <div className='mt-50 text-center h1 '>Data management</div>
                    <Banner data={bannerDatas} loading={loading} />
                    |
                    <About data={aboutDatas} />
                    <Category />
                    <Popular />
                    <Cta />
                    <Concern />
                    <Alumni />
                </div>
            </div>
        </div>
    )
}

export default Main