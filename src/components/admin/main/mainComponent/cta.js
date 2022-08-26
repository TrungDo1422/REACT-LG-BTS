import React from 'react';
import Image from '~/assets/image/devplus/logo_loading.png';

const Cta = () => {
    return (
        <div>
            <div className="m-4 p-2 border" id="cta">
                <h3 className="text-info">CTA manager</h3>
                <div>
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
                                    <img src={Image} alt="# " />
                                </td>
                                <td>helo man</td>
                                <td>hihi</td>
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
export default Cta;
