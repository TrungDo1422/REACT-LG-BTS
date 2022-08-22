import React, { useState } from 'react';
import bannerApi from '~/api/bannerApi'
import { HighlightOffSharp, SaveSharp } from '@material-ui/icons'


const BannerForm = ({ setEdit, id }) => {
    const initState = {
        title: "",
        content: ""

    };
    const [bannerData, setBannerData] = useState(initState);
    const { title, content } = bannerData;


    const onInputChange = (e) => {
        const { name, value } = e.target;
        setBannerData({ ...bannerData, [name]: value });
    };

    console.log("sfhfiusahfu", id);

    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await bannerApi.patch({ id, title, content });
        console.log(res);
        setBannerData({ ...bannerData, res })
        setEdit(false)
    }


    return (
        <div>
            <form
                className='mt-4 form-group'
                onSubmit={onSubmit}
            >
                <input
                    type='text'
                    placeholder='Enter title !'
                    className='form-control '
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