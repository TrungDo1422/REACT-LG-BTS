import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import categoryApi from '~/api/categoriesApi'


const CategoryForm = ({ setEdit, id, title }) => {
    const initState = {
        title: title,
    };
    const [categoryData, setCategoryData] = useState(initState);


    const onInputChange = (event) => {
        const { name, value } = event.target;
        setCategoryData({ ...categoryData, [name]: value });
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await categoryApi({ id, title });
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
                    placeholder='Enter category title'
                    className='form-control m-3'
                    id="title"
                    name="title"
                    value={title}
                    required
                    onChange={onInputChange}
                />
            </form>
        
        </div>
    )
}

export default CategoryForm