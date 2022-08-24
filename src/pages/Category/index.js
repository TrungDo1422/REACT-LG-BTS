import './category.scss'
import { Delete, EditTwoTone, Add } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import CategoryForm from '../../components/admin/categoryFrom';
import categoriesApi from '~/api/categoriesApi';



const Category = () => {
  const [categoryDatas, setCategoryDatas] = useState([]);

  const [edit, setEdit] = useState(false);

  const [loading, setLoading] = useState(false);

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
  useEffect(() => {
    if (loading) {
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
    }
    setLoading(false);
  }, [loading]);

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
                    <h4>{item.title}</h4>
                    <div>
                      {edit &&
                        <CategoryForm
                          setEdit={setEdit}
                          id={item._id}
                          title={item.title}
                          setLoading={setLoading}
                        />}
                    </div>
                  </div>
                  <div className='m-2'>
                    <button
                      className="size-40 btn btn-outline-info p-1"
                      onClick={() => setEdit(true)}
                    >
                      <EditTwoTone />
                    </button>
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
                        </div>
                      </div>
                    ))
                  }
                </ul>

                <div className='d-flex p2 justify-content-between'>
                  <div className='m-2'>
                    <button
                      className="size-40 btn btn-outline-info p-1"
                      onClick={() => setEdit(true)}
                    >
                      <Add />
                    </button>
                  </div>
                  <div className='m-2'>
                    <button className='size-40 btn btn-danger p-1'><Delete /></button>
                  </div>
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