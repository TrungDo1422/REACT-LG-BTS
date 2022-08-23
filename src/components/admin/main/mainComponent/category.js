import { Delete, EditTwoTone } from '@material-ui/icons';
import React, { useState } from 'react';
import CategoryForm from '../fromInput/categoryFrom';




const Category = (props) => {

  const [edit, setEdit] = useState(false);

  return (
    <div className='pd-50 '>
      <div className='category_card border' id='category' >
        <h3 className='text-info'>Categories manager</h3>
        {
          props.data?.categories?.map((item, index) => (
            <div key={index}>
              <div className="modal-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Categories</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.title}</td>
                      <td>
                        <ul>
                          {
                            item?.categories?.map((c, index) => (
                              <ul className='border m-1' key={index}>
                                <li>  <img src={c.iconUrl} alt="" style={{ width: '25px', height: '25px' }} /></li>
                                <li> <strong>{c.content}</strong> </li>
                                <li> <small>{c.course}</small></li>
                                <li><small>{c.course}</small></li>
                                <li>
                                  <button
                                    className="size-40 btn btn-outline-info p-1"
                                    onClick={() => setEdit(true)}
                                  >
                                    <EditTwoTone />
                                  </button>

                                  <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                                </li>
                              </ul>
                            ))
                          }
                        </ul>

                      </td>
                      <td>
                        <button
                          className="size-40 btn btn-outline-info p-1"
                          onClick={() => setEdit(true)}
                        >
                          <EditTwoTone />
                        </button>

                        <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="border">
                  {edit && <CategoryForm setEdit={setEdit}  id={item._id} />}
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