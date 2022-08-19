import React from 'react';
import './main.scss';
import Banner from '~/components/Banner'
import About from '~/components/About';
import Categories from '~/components/Categories';
import Popular from '~/components/Popular';
import CTA from '~/components/CTA';
import Concern from '~/components/Concern';
import Testimonial from '~/components/Testimonial';
import Image from '~/assets/image/devplus/logo_loading.png';

const Main = () => {
    return (<div>
        <div className="content-wrapper">
            <div className='modal_container' id='exit'>
                <Banner id='banner'/>
                <About id='about'/>
                <Categories id='category' />
                <Popular />
                <CTA />
                <Concern />
                <Testimonial />
                {/* ---------------banner---------------- */}
                <div className='banner_modal' id='banner-modal'>
                    <div className='modal_body'>
                        <a className='close-btn' href='#banner'>&times;</a>
                        <div className='table_card'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                        <td>
                                            <a className='btn btn-primary'>Update</a>|
                                            <a className='btn btn-danger'>Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* ---------------------------about-------------- */}
                <div className='about_modal' id='about-modal'>
                    <div className='modal_body'>
                        <a className='close-btn' href='#about'>&times;</a>
                        <div className='table_card'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Otto</td>
                                        <td>hihi</td>
                                        <td>Otto</td>
                                        <td>
                                            <a className='btn btn-primary'>Update</a>|
                                            <a className='btn btn-danger'>Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* ----------------------categories------------------- */}
                <div className='category_modal' id='category-modal'>
                    <div className='modal_body'>
                        <a className='close-btn' href='#about'>&times;</a>
                        <div className='table_card'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Icons</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Otto</td>
                                        <td>hihi</td>
                                        <td><img src={Image} alt='# '/></td>
                                        <td>
                                            <a className='btn btn-primary'>Update</a>|
                                            <a className='btn btn-danger'>Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Main