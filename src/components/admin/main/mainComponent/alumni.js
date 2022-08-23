import React from 'react';
import Image from '~/assets/image/devplus/logo_loading.png';

const Alumni = () => {
    return (
        <div>
            <div className="m-4 p-2 border" id="alumni">
                <h3 className="text-info">Alumni manager</h3>
                <div>
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
                                <td>
                                    <img src={Image} alt="# " />
                                </td>
                                <td>Tien Tinh</td>
                                <td>member devplus ++</td>
                                <td>
                                    <button className="btn btn-primary">Create</button>|
                                    <button className="btn btn-secondary">Update</button>|
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Alumni;
