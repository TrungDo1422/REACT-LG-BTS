import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import bannerApi from '~/api/bannerApi';



const BannerForm = ({ setLoading, setEdit, id, title, content }) => {
    const initState = {
        title: title,
        content: content
    };

    const [bannerData, setBannerData] = useState(initState);
    const [titleInput, setTitleInput] = useState(title);
    const [contentInput, setContentInput] = useState(content);



    const onTitleInputChange = (event) => {
        setTitleInput(event.target.value)
       

    };
    const onContentInputChange = (event) => {
        setContentInput(event.target.value);

    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await bannerApi.patch({ id, title: titleInput, content: contentInput });
        setBannerData({
            ...bannerData, content: contentInput, title: titleInput,
            res
        })
        setEdit(false)
        setLoading(true)
    }

    return (
        <div className='bg-lightblue'>
            <form
                className='mt-4 form-group'
                onSubmit={onSubmit}
            >

                <input
                    type='text'
                    className='form-control mb-4'
                    id="title"
                    name="title"
                    value={titleInput}
                    required
                    onChange={onTitleInputChange}
                />

                <input type='text'
                    className='form-control mb-4'
                    id="content"
                    name="content"
                    value={contentInput}
                    required
                    onChange={onContentInputChange}
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