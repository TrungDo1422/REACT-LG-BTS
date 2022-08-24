import { Delete, EditTwoTone } from '@material-ui/icons'
import React, { useState, useEffect } from 'react';
import AboutForm from '../../components/admin/aboutForm';
import aboutApi from '~/api/aboutApi'
import './about.scss'



const About = () => {
    const [aboutDatas, setAboutDatas] = useState([]);
    const [edit, setEdit] = useState(false);


    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await aboutApi.getAll();
                setAboutDatas(response)
            } catch (error) {
                console.log('Failed to fetch about list: ', error);
            }
        }
        fetchAbout();
    }, []);
    return (
        <div className='pd-50'>
            <h3 className='text-drak'>About manage</h3>
            <div className='about_card border' id='about'>

                {
                    aboutDatas.about?.map((item, index) => (
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
                                            <td><small className='text'>{item.description}</small></td>
                                            <td>
                                                <button
                                                    className="size-40 btn btn-outline-info p-1"
                                                    onClick={() => setEdit(true)}
                                                >
                                                    <EditTwoTone />
                                                </button>

                                                <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className='border'>

                                    {edit && <AboutForm setEdit={setEdit} datas={aboutDatas.about} id={item._id} />}

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div >
        </div>
    )
}

export default About