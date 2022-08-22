import React, { useState } from 'react';
import BannerForm from '../fromInput/bannerForm'
import { Delete, Close, EditTwoTone } from '@material-ui/icons'

function About(props) {
  const [showmodal, setShowModal] = useState(false);

  const [edit, setEdit] = useState(false);



  const handlemodal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  // console.log(props.data)
  return (
    <div>
      <div className={`overlay ${!showmodal ? `overlay-none` : ``}`}>
        <div className="content">
          {
            props.data.about?.map((item, index) => (
              <div key={index}>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.title}</td>
                        <td>{item.content}</td>
                        <td><small className='text'>{item.description}</small></td>
                        <td>
                          <button
                            className="btn btn-outline-info p-1"
                            onClick={() => setEdit(true)}
                          >
                            <EditTwoTone />
                          </button>

                          <button className='btn btn-danger col-6 p-1'><Delete /></button>

                          {edit && <BannerForm setEdit={setEdit} datas={props.data.banner} id={item.id} />}
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
  )
}

export default About