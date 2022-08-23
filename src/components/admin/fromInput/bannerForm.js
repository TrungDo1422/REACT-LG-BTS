import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import bannerApi from '~/api/bannerApi';



const BannerForm = ({ setLoading, setEdit, id, title, content }) => {
    const initState = {
        title: title,
        content: content
    };

    const [bannerData, setBannerData] = useState(initState);



    const onInputChange = (e) => {
        setBannerData(e.target.value);
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await bannerApi.patch({ id, title, content });
        setBannerData({
            ...bannerData,
            res
        })
        setEdit(false)
        setLoading(true)
    }


    return (
        <div className='card'>
            <strong>Banner</strong>

            <form
                className='mt-4 form-group'
                onSubmit={onSubmit}
            >

                <input
                    type='text'
                    className='form-control mb-4'
                    id="title"
                    name="title"
                    value={title}
                    required
                    onChange={onInputChange}
                />

                <input type='text'
                    className='form-control mb-4'
                    id="content"
                    name="content"
                    value={content}
                    required
                    onChange={onInputChange}
                />



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