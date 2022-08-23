import './banner.scss'
import React, { useEffect, useState } from 'react';
import bannerApi from '~/api/bannerApi';
import { Delete, EditTwoTone } from '@material-ui/icons';
import BannerForm from '../../components/admin/fromInput/bannerForm'


const Banner = () => {

    const [edit, setEdit] = useState(false);
    const [bannerDatas, setBannerDatas] = useState([]);
    const [loading, setLoading] = useState(false)

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

    useEffect(() => {
        if (loading) {
            const fetchBanner = async () => {
                try {
                    const response = await bannerApi.getAll();
                    setBannerDatas(response)
                } catch (error) {
                    console.log('Failed to fetch banner list: ', error);
                }
            }
            fetchBanner();
            setLoading(false)
        }
    }, [loading])


    return (
        <div className='pd-50'>
            <h2 className='text-center text-dark'>Banner manager</h2>
            <div className='banner_card border' id='banner'>

                {
                    bannerDatas?.banner?.map((item, index) => (
                        <div key={index}>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col text">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <strong>{item.title}</strong></td>
                                        <td><small>{item.content}</small></td>
                                        <td>
                                            <button
                                                className="size-40 btn btn-outline-info p-1"
                                                onClick={() => setEdit(true)}
                                            >
                                                <EditTwoTone />
                                            </button>

                                            <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>


                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            {
                                edit &&
                                <BannerForm setLoading={setLoading}
                                    setEdit={setEdit}
                                    id={item._id}
                                    title={item.title}
                                    content={item.content}
                                />
                            }

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Banner