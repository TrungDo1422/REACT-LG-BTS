import React from 'react';
import Image from '~/assets/image/devplus/logo_loading.png';


const Concern = () => {
  return (
    <div>
      <div className='m-4 p-2 border' id='concern'>
        <h3 className='text-info'>Concern manager</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Description</th>
                <th scope="col">Images</th>
                <th scope="col text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hihi</td>
                <td>hihi</td>
                <td>hihi</td>
                <td>
                  <img src={Image} alt='# ' />
                </td>
                <td>
                  <button className='btn btn-primary'>Create</button>|
                  <button className='btn btn-secondary'>Update</button>|
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Concern