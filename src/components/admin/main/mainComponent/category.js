import React, { useState } from 'react';
import { Delete, Close, EditTwoTone } from '@material-ui/icons'
import CategoryForm from '../fromInput/categoryFrom';




const Category = (props) => {

  const [showmodal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);

  console.log(props.data.categories)
  const handlemodal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  return (
    <div>
      <div className={`overlay ${!showmodal ? `overlay-none` : ``}`}>
        <div className="content">
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
                            Categories data
                          </ul>

                        </td>
                        <td>
                          <button
                            className="btn btn-outline-info p-1"
                            onClick={() => setEdit(true)}
                          >
                            <EditTwoTone />
                          </button>

                          <button className='btn btn-danger col-6 p-1'><Delete /></button>

                          {edit && <CategoryForm setEdit={setEdit} datas={props.data.about} id={item._id} />}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className="modal-footer">
                  <button onClick={closeModal} className="btn btn-danger">
                    <Close />
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <button onClick={handlemodal} className="btn btn-primary">Open about</button>
    </div>
    // <div>
    //   <div className='category_modal' id='category-modal'>
    //     <div className='modal_body'>
    //       <a className='close-btn' href='#exit'>&times;</a>
    //       <div className='table_card'>
    //         <table className="table">
    //           <thead>
    //             <tr>
    //               <th scope="col">Icons</th>
    //               <th scope="col">Title</th>
    //               <th scope="col">Content</th>
    //               <th scope="col text-center">Action</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr> <td><img src={Image} alt='# ' /></td>
    //               <td>Otto</td>
    //               <td>hihi</td>

    //               <td>
    //                 <a className='btn btn-primary'>Create</a>|
    //                 <a className='btn btn-secondary'>Update</a>|
    //                 <a className='btn btn-danger'>Delete</a>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Category