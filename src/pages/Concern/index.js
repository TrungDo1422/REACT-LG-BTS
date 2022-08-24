import ConcernForm from '../../components/admin/concernForm';
import React, { useState, useEffect } from 'react';
import { Delete, EditTwoTone, Add } from '@material-ui/icons';
import concernApi from '~/api/concernApi';




const Concern = (props) => {

    const [edit, setEdit] = useState(false);
    const [concernDatas, setConcernDatas] = useState([]);


    //Concern----------------
    useEffect(() => {
        const fetchConcern = async () => {
            try {
                const response = await concernApi.getAll();
                setConcernDatas(response)
            } catch (error) {
                console.log('Failed to fetch Concern data: ', error);
            }
        }
        fetchConcern();
    }, []);

    return (
        <div className='pd-50'>
            <h3 className='text-center'>Concern manager</h3>
            <div className='concern_card border' id='concern'>
                {
                    concernDatas?.faq?.map((item, index) => (
                        <div key={index} className='faq'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className='text-center'>Title</th>
                                        <th scope="col" className='text-center'>Video link</th>
                                        <th scope="col" className='text-center'>Faq</th>
                                        <th scope="col" className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >{item.title}</td>
                                        <td >{item.linkVideo}</td>
                                        <td >
                                            {
                                                item?.faq?.map((i, index) => (
                                                    <>
                                                        <ul key={index}>
                                                            <li ><strong>{i.content}</strong></li>
                                                            <li ><small>{i.description}</small></li>
                                                            <li >
                                                                <button
                                                                    className="size-40 btn btn-outline-info p-1"
                                                                    onClick={() => setEdit(true)}
                                                                >
                                                                    <Add />
                                                                </button>

                                                                <button className='size-40 btn btn-danger col-6 p-1'><Delete /></button>
                                                            </li>
                                                        </ul>
                                                    </>
                                                ))
                                            }
                                        </td>
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

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Concern