import React from 'react';
import Image from '~/assets/image/devplus/logo_loading.png';


const Cta = () => {
    return (
        <div className='cta_modal' id='cta-modal'>
            <div className='modal_body'>
                <a className='close-btn' href='#exit'>&times;</a>
                <div className='table_card'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Images</th>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={Image} alt='# ' />
                                </td>
                                <td>helo man</td>
                                <td>hihi</td>
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
    )
}
export default Cta