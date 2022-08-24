import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import aboutApi from '~/api/aboutApi';


const AboutForm = ({ setLoading, setEdit, id, title, content, description }) => {
    const initState = {
        title: title,
        content: content,
        description: description
    };
    const [aboutData, setAboutData] = useState(initState);

    const [titleInput, setTitleInput] = useState(title);
    const [contentInput, setContentInput] = useState(content);
    const [descInput, setDescInput] = useState(description);



    const onTitleInputChange = (e) => {
        setTitleInput(e.target.value);
    };
    const onContentInputChange = (e) => {
        setContentInput(e.target.value);
    };
    const onDescInputChange = (e) => {
        setDescInput(e.target.value);
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await aboutApi.patch({ id, title: titleInput, content: contentInput, description: descInput });
        setAboutData({ ...aboutData, res })
        setEdit(false)
        setLoading(true)
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
                    value={titleInput}
                    required
                    onChange={onTitleInputChange}
                />
                <hr />
                <input type='text'
                    placeholder='Enter title !'
                    className='form-control'
                    id="content"
                    name="content"
                    value={contentInput}
                    required
                    onChange={onContentInputChange}
                />
                <hr />
                <input type='text'
                    placeholder='Enter description !'
                    className='form-control'
                    id="description"
                    name="description"
                    value={descInput}
                    required
                    onChange={onDescInputChange}
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