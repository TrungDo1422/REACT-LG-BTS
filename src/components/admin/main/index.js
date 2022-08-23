import React, { useEffect, useState } from 'react';
import aboutApi from '~/api/aboutApi';
import bannerApi from '~/api/bannerApi';
import categoryApi from '~/api/categoryApi';
import './main.scss';
import About from './mainComponent/about';
import Alumni from './mainComponent/alumni';
import Banner from './mainComponent/banner';
import Category from './mainComponent/category';
import Concern from './mainComponent/concern';
import Cta from './mainComponent/cta';
import Popular from './mainComponent/popular';




const Main = () => {
    const [bannerDatas, setBannerDatas] = useState([]);
    const [aboutDatas, setAboutDatas] = useState([]);
    const [categoryDatas, setCategoryDatas] = useState([]);



    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await bannerApi.getAll();
                setBannerDatas(response)
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
    //Category----------------
    useEffect(() => {
        const fetchCategori = async () => {
            try {
                const response = await categoryApi.getAll();
                setCategoryDatas(response)
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        }
        fetchCategori();
    }, []);
    return (
        <div>
            <div className="content-wrapper">
                <div className='modal_container' id='exit'>
                    <div className='mt-50 text-center h1 '>Data management</div>
                    <Banner data={bannerDatas} />
                    |
                    <About data={aboutDatas} />
                    |
                    <Category data={categoryDatas} />
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