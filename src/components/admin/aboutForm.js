import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import aboutApi from '~/api/aboutApi';


const AboutForm = ({ setEdit, id }) => {
    const initState = {
        title: "",
        content: "",
        description :""
        

    };
    const [aboutData, setAboutData] = useState(initState);
    const { title, content , description} = aboutData;




    const onInputChange = (e) => {
        const { name, value } = e.target;
        setAboutData({ ...aboutData, [name]: value });
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await aboutApi.patch({ id, title, content , description});
        setAboutData({ ...aboutData, res })
        setEdit(false)
    }


    return (
        <div>
            <strong>About</strong>
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
                <input type='text'
                    placeholder='Enter description !'
                    className='form-control'
                    id="description"
                    name="description"
                    value={description}
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

export default AboutForm