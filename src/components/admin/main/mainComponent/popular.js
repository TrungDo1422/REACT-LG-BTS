import React, { useState } from 'react';
import { Delete, EditTwoTone, Add } from '@material-ui/icons';


const Popular = (props) => {
    const [edit, setEdit] = useState(false);




    return (
        <div className='pd-50'>
            <div className='popular_card border' id='popular'>
                <h3 className='text-info'>Popular manager</h3>
                {
                    props.data?.popular?.map((item, index) => (
                        <div key={index}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Content</th>
                                        <th scope="col">Popular</th>
                                        <th scope="col text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.title}</td>
                                        {item?.popular?.map((p, i) => (
                                            <>
                                                <td key={i}>{p.content}</td>
                                                <td>
                                                    <div style={{ width: '80px', height: '80px' }}>
                                                        <img style={{ objectFit: 'cover', width: '100%' }} src={p.imgUrl} alt='#' />
                                                    </div>
                                                </td>
                                            </>
                                        ))
                                        }
                                        <td>
                                            <button className='size-40 btn btn-primary col-6 p-1'>< Add /></button>
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

export default Popular