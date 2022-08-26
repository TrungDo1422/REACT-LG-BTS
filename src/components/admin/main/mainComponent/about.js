import React, { useState } from 'react';
import AboutForm from '../fromInput/aboutForm';
import { Delete, EditTwoTone } from '@material-ui/icons';

function About(props) {
    const [edit, setEdit] = useState(false);

    // console.log(props.data)
    return (
        <div className="pd-50">
            <div className="about_card border" id="about">
                <h3 className="text-info">About manage</h3>
                {props.data.about?.map((item, index) => (
                    <div key={index}>
                        <div className="modal-body">
                            <table className="table table-striped">
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
                                        <td>
                                            <small className="text">{item.description}</small>
                                        </td>
                                        <td>
                                            <button
                                                className="size-40 btn btn-outline-info p-1"
                                                onClick={() => setEdit(true)}
                                            >
                                                <EditTwoTone />
                                            </button>

                                            <button className="size-40 btn btn-danger col-6 p-1">
                                                <Delete />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="border">
                                {edit && <AboutForm setEdit={setEdit} datas={props.data.about} id={item._id} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
