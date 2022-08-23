import React, { useState } from 'react';
import { Delete, Close, EditTwoTone } from '@material-ui/icons'
import CategoryForm from '../fromInput/categoryFrom';




const Category = (props) => {

  const [edit, setEdit] = useState(false);

  return (
    <div className='category_card m-4 p-2 border' id='category' >
      <h3 className='text-info'>Banner manager</h3>
      {
        props.data?.categories?.map((item, index) => (
          <div key={index}>
            <div className="modal-body">
              <table className="table">
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
                            <li key={index}>
                              <p>{c.content}</p>
                              <p>{c.course}</p>
                              <img src={c.iconUrl} alt="" />
                            </li>
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
                {edit && <CategoryForm setEdit={setEdit} datas={props.data.about} id={item._id} />}
              </div>
            </div>

          </div>
        ))
      }
    </div>

  )
}

export default Category