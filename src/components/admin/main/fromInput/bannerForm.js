import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import bannerApi from '~/api/bannerApi';



const BannerForm = ({ setEdit, id, datas }) => {
    const initState = {
        title: "",
        content: ""

    };
    const [bannerData, setBannerData] = useState(initState);
    const { title, content } = bannerData;



    useEffect(() => {
        setBannerData(datas);
    }, [datas]);

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setBannerData({ ...bannerData, [name]: value });
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await bannerApi.patch({ id, title, content });
        setBannerData({
            ...bannerData,
            res
        })
        setEdit(false)
    }


    return (
        <div className='bg-lightblue'>
            <form
                className='mt-4 form-group'
                onSubmit={onSubmit}
            >
                <input
                    type='text'
                    placeholder='Enter title'
                    className='form-control'
                    id="title"
                    name="title"
                    value={title}
                    required
                    onChange={onInputChange}
                />
                <hr />
                <input type='text'
                    placeholder='Enter title !'
                    className='form-control'
                    id="content"
                    name="content"
                    value={content}
                    required
                    onChange={onInputChange}
                />
                <hr />
                <button className='btn btn-primary col-6'
                    type='submit'

                >
                    <SaveSharp />
                </button>
                <button className='btn btn-warning col-6'
                    type='submit'
                    onClick={() => setEdit(false)}
                >
                    <HighlightOffSharp />
                </button>
            </form>

        </div>
    )
}

export default BannerForm