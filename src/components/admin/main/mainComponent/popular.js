import React from 'react';
import Image from '~/assets/image/devplus/logo_loading.png';


const Popular = () => {
    return (
        <div>
            <div className='m-4 p-2 border' id='popular'>
                <h3 className='text-info'>Popular manager</h3>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Images</th>
                                <th scope="col">Content</th>
                                <th scope="col text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr> <td><img src={Image} alt='# ' /></td>
                                <td>hihi</td>
                                <td>
                                    <a href='...' className='btn btn-primary'>Create</a>|
                                    <a href='...' className='btn btn-secondary'>Update</a>|
                                    <a href='...' className='btn btn-danger'>Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Popular