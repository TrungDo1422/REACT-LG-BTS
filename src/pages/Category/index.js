import './category.scss'
import { Delete, EditTwoTone, Add } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import CategoryForm from '../../components/admin/fromInput/categoryFrom';
import categoriesApi from '~/api/categoriesApi';



const Category = () => {
  const [categoryDatas, setCategoryDatas] = useState([]);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchCategori = async () => {
      try {
        const response = await categoriesApi.getAll();
        setCategoryDatas(response)
        console.log(response.categories)
      } catch (error) {
        console.log('Failed to fetch category list: ', error);
      }
    }
    fetchCategori();
  }, []);

  return (
    <div className='pd-50 '>
      <h2 className='text-drak text-center'>Categories manager</h2>
      <div className='category_card' id='category'>

        {
          categoryDatas?.categories?.map((item, index) => (
            <div key={index}>
              <div className="card">
                <div className='d-flex p-4 m-2 justify-content-between'>
                  <div className='m-2'>
                    <strong>Title: </strong>
                    <smail>{item.title}</smail>
                  </div>
                  <div className='m-2'>
                    <button
                      className="size-40 btn btn-outline-info p-1"
                      onClick={() => setEdit(true)}
                    >
                      <EditTwoTone />
                    </button>

                    <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                  </div>

                </div>
                <ul>
                  {
                    item?.categories?.map((c, index) => (
                      <div className='d-flex p-4 m-4 justify-content-between border' key={index}>
                        <div className='m-2'>
                          <img className='m-10' src={c.iconUrl} alt="" style={{ width: '25px', height: '25px' }} />
                          <h6 className='m-10'>{c.content}</h6>
                          <p className='m-10'>{c.course}</p>
                        </div>
                        <div className='m-2'>
                          <button
                            className="size-40 btn btn-outline-info p-1"
                            onClick={() => setEdit(true)}
                          >
                            <Add />
                          </button>
                          <button className='size-40 btn btn-warning col-6 p-1'><EditTwoTone /></button>
                          <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                        </div>
                      </div>
                    ))
                  }
                </ul>

                <div className="border">
                  {edit && <CategoryForm setEdit={setEdit} data={categoryDatas.categories} id={item._id} />}
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category