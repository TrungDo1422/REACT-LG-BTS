import React from 'react';
import Image from '~/assets/image/devplus/logo_loading.png';


const Alumni = () => {
  return (
    <div>
      <div className='alumni_modal' id='alumni-modal'>
        <div className='modal_body'>
          <a className='close-btn' href='#exit'>&times;</a>
          <div className='table_card'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Content</th>
                  <th scope="col">Images</th>
                  <th scope="col">Name</th>
                  <th scope="col">Level</th>
                  <th scope="col text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>hello number 1</td>
                  <td><img src={Image} alt='# ' /></td>
                  <td>Tien Tinh</td>
                  <td>member devplus ++</td>
                  <td>
                    <a className='btn btn-primary'>Create</a>|
                    <a className='btn btn-secondary'>Update</a>|
                    <a className='btn btn-danger'>Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alumni