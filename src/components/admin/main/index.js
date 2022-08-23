import React, { useEffect, useState } from 'react';
import './main.scss';

import aboutApi from '~/api/aboutApi';
import bannerApi from '~/api/bannerApi';
import categoriesApi from '~/api/categoriesApi';
import popularApi from '~/api/popularApi';
import ctaApi from '~/api/ctaApi';
import concernApi from '~/api/concernApi';
import testimonialApi from '~/api/testimonialApi';


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
    const [popularDatas, setPopularDatas] = useState([]);
    const [ctaDatas, setCtaDatas] = useState([]);
    const [concernDatas, setConcernDatas] = useState([]);
    const [alumniDatas, setAlumniDatas] = useState([]);


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
                const response = await categoriesApi.getAll();
                setCategoryDatas(response)
                console.log(response.categories)
            } catch (error) {
                console.log('Failed to fetch category list: ', error);
            }
        }
        fetchCategori();
    }, []);
    //Popular----------------
    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const response = await popularApi.getAll();
                setPopularDatas(response)
            } catch (error) {
                console.log('Failed to fetch popular list: ', error);
            }
        }
        fetchPopular();
    }, []);
    //CTA====----------------
    useEffect(() => {
        const fetchCtaData = async () => {
            try {
                const response = await ctaApi.getAll();
                setCtaDatas(response)
            } catch (error) {
                console.log('Failed to fetch Cta data: ', error);
            }
        }
        fetchCtaData();
    }, []);
    //Concern----------------
    useEffect(() => {
        const fetchConcern = async () => {
            try {
                const response = await concernApi.getAll();
                setConcernDatas(response)
            } catch (error) {
                console.log('Failed to fetch Concern data: ', error);
            }
        }
        fetchConcern();
    }, []);
    //Concern----------------
    useEffect(() => {
        const fetchALumniData = async () => {
            try {
                const response = await testimonialApi.getAll();
                setAlumniDatas(response)
            } catch (error) {
                console.log('Failed to fetch fetch aLumni Data data: ', error);
            }
        }
        fetchALumniData();
    }, []);
    return (
        <div>
            <div className="content-wrapper">
                <div className='admin_content '>
                    <div className='m-5' />
                    <Banner data={bannerDatas} />
                    <About data={aboutDatas} />
                    <Category data={categoryDatas} />
                    <Popular data={popularDatas} />
                    <Cta data={ctaDatas} />
                    <Concern data={concernDatas} />
                    <Alumni data={alumniDatas} />
                </div>
            </div>
        </div>
    )
}

export default Main