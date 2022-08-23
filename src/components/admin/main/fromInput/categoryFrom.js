import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import categoryApi from '~/api/categoryApi';


const CategoryForm = ({ setEdit, id }) => {
    const initState = {
        title: "",
        content: "",
        description: ""


    };
    const [categoryData, setCategoryData] = useState(initState);
    const { title, content, description } = categoryData;




    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await categoryApi.patch({ id, title, content, description });
        setCategoryData({
            ...categoryData,
            res
        })
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

export default CategoryForm