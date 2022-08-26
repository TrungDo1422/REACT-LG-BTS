import './banner.scss'
import React, { useEffect, useState } from 'react';
import bannerApi from '~/api/bannerApi';
import { Add, Delete, EditTwoTone, SaveSharp, HighlightOffSharp } from '@material-ui/icons';
import BannerForm from '../../components/admin/bannerForm'


const Banner = () => {

    const [onEdit, setOnEdit] = useState(false);
    const [onCreate, setOnCreate] = useState(false);

    const [bannerDatas, setBannerDatas] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


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

    const handleDelete = async (item) => {
        const newID = { id: item._id }
        await bannerApi.deleteDataAPI(newID);
        setLoading(true);

    }
    const onTitleInputChange = (event) => {
        setTitle(event.target.value);
    };
    const oncontentInputChange = (event) => {
        setContent(event.target.value);
    };

    const onSubmit = async(event) => {
        setLoading(false)
        event.preventDefault();
        const res = await bannerApi.createBanner({ title, content });
        setBannerDatas({
            ...bannerDatas,
            res,
        });
        setOnCreate(false);
        setLoading(true)
    }


    return (
        <div className='pd-50'>
            <h2 className='text-center text-dark'>Banner manager</h2>
            <div className='banner_card border' id='banner'>

                {
                    bannerDatas?.banner?.map((item, index) => (
                        <div key={index}>
                            <ul>
                                <li>
                                    <div className='d-flex p2 justify-content-around'>
                                        <div className='col-5'>
                                            <h6>{item.title}</h6>
                                        </div>
                                        <div className='col-5'>
                                            <p>{item.content}</p>
                                        </div>
                                        <div className='col-2'>
                                            <button
                                                className="size-40 btn btn-outline-info p-1"
                                                onClick={() => setOnEdit(true)}
                                            >
                                                <EditTwoTone />
                                            </button>
                                            <button onClick={() => handleDelete(item)} className='size-40 btn btn-danger col-4 p-1'><Delete /></button>
                                        </div>
                                    </div>
                                </li>
                                <hr />

                            </ul>
                            {
                                onEdit &&
                                <BannerForm
                                    setLoading={setLoading}
                                    setOnEdit={setOnEdit}
                                    id={item._id}
                                    title={item.title}
                                    content={item.content}
                                />
                            }
                        </div>
                    ))
                }
                <button onClick={() => setOnCreate(true)} className='size-40 btn btn-primary col-4 p-1'><Add /></button>
                {
                    onCreate &&
                    <div>
                        <form className="mt-4 form-group" onSubmit={onSubmit} >
                            <input
                                type="text"
                                placeholder='Enter new title...'
                                className="form-control mb-4"
                                id="title"
                                name="title"
                                value={title}
                                required
                                onChange={onTitleInputChange}
                            />

                            <input
                                type="text"
                                placeholder='Enter new content...'
                                className="form-control mb-4"
                                id="content"
                                name="content"
                                value={content}
                                required
                                onChange={oncontentInputChange}
                            />

                            <button className=" size-40 btn btn-primary " type="submit" value="Submit" >
                                <SaveSharp />
                            </button>
                            <button className=" size-40 btn btn-warning" type="submit" onClick={() => setOnCreate(false)}>
                                <HighlightOffSharp />
                            </button>
                        </form>
                    </div>
                }
            </div>
        </div>

    )
}

export default Banner