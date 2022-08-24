import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useState } from 'react';
import categoryApi from '~/api/categoriesApi'


const CategoryForm = ({ setEdit, id, title, setLoading }) => {
    const initState = {
        title: title,
    };
    const [categoryData, setCategoryData] = useState(initState);
    const [valueInput, setValueInput] = useState(title);


    const onInputChange = (event) => {
        setValueInput(event.target.value)
    };


    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await categoryApi.patch({ id, title: valueInput });
        setCategoryData({
            ...categoryData,
            res
        })
        setEdit(false)
        setLoading(true)
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
                    value={valueInput}
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

export default CategoryForm