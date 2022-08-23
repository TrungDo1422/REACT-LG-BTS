import React from 'react';
import Image from '~/assets/image/devplus/logo_loading.png';


const Alumni = (props) => {



  return (
    <div className='pd-50'>
      <div className='alumni_card border' id='alumni'>
        <h3 className='text-info'>Alumni manager</h3>
        {
          props?.data?.testimonial?.map((item, index) => (
            <div key={index}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-4">Title</th>
                    <th scope="col-4">Testimonial</th>
                    <th scope="col-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.title}</td>
                    <td>
                      <div>
                        {
                          item?.testimonial?.map((l, index) => (
                            <ul key={index}>
                              <li ><img src={l.avataUrl} alt='#' style={{ width: "40px", height: '40px' }} /></li>
                              <li >{l.name}</li>
                              <li ><small>{l.content}</small></li>

                              <li >
                                <button className='btn btn-primary'>Create</button>|
                                <button className='btn btn-secondary'>Update</button>|
                                <button className='btn btn-danger'>Delete</button>
                              </li>
                            </ul>

                          ))
                        }
                      </div>
                    </td>
                    <td>
                      <button className='btn btn-info'>Update</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Alumni