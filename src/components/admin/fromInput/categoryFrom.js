import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import categoryApi from '~/api/categoriesApi'


const CategoryForm = ({ setEdit, id }) => {
    const initState = {
        title: "",
        content: "",
        categories: []


    };
    const [categoryData, setCategoryData] = useState(initState);
    const { title, content, categories } = categoryData;




    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await categoryApi({ id, title, content, categories });
        setCategoryData({
            ...categoryData,
            res
        }) 
        setEdit(false)
    }


    return (
        <div>
            <strong>Categories</strong>
            <form
                className='mt-4 form-group'
                onSubmit={onSubmit}
            >
                <input
                    type='text'
                    placeholder='Enter category title'
                    className='form-control'
                    id="title"
                    name="title"
                    value={title}
                    required
                    onChange={onInputChange}
                />
                <hr />
                <input type='text'
                    placeholder='Enter content!'
                    className='form-control'
                    id="content"
                    name="content"
                    value={content}
                    required
                    onChange={onInputChange}
                />
                <hr />

                <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Categories</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

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