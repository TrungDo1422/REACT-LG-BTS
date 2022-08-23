import './popular.scss'
import React, { useEffect, useState } from 'react';
import { Delete, EditTwoTone, Add } from '@material-ui/icons';

import popularApi from '~/api/popularApi';


const Popular = () => {

  const [edit, setEdit] = useState(false);
  const [popularDatas, setPopularDatas] = useState([]);


  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const response = await popularApi.getAll();
        setPopularDatas(response)
      } catch (error) {
        console.log('Failed to fetch popular list: ', error);
      }
    }
    fetchPopular();
  }, []);


  return (
    <div className='pd-50'>
      <h2 className='text-center p-2'>Popular manager</h2>
      <div className='popular_card border' id='popular'>
        {
          popularDatas?.popular?.map((item, index) => (
            <div key={index}>
              <div className="card">
                <div className="card-header">
                  <h4 className='text-center'>{item.title}</h4>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Popular: </h5>
                  {
                    item?.popular?.map((p, index) => (
                      <div className='d-flex justify-content-between' key={index}>
                        <div class="card p-2 m-3 col" style={{ width: '12rem' }} >
                          <img class="card-img-top" src={p.imgUrl} alt="Card image cap" />
                          <div class="card-body">
                            <p style={{ fontSize: '1rem' }} className="card-text">{p.content}</p>
                            <div className="card-footer d-flex justify-content-center">
                              <div>
                                <button className='size-40 btn btn-primary col-6 p-1'>< Add /></button>
                                <button
                                  className="size-40 btn btn-outline-info p-1"
                                  onClick={() => setEdit(true)}
                                >
                                  <EditTwoTone />
                                </button>

                                <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Popular