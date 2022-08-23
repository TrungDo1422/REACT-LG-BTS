import React, { useState } from 'react';
import { Delete, EditTwoTone, Add } from '@material-ui/icons';


const Cta = (props) => {

    const [edit, setEdit] = useState(false);



    return (
        <div className='pd-50'>
            <div className='cta_card border' id='cta'>
                <h3 className='text-info'>CTA manager</h3>
                {
                    props.data?.cta?.map((item, index) => (
                        <div key={index}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Images</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Cta</th>
                                        <th scope="col text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={item.imgUrl} alt='#' />
                                        </td>
                                        <td>{item.title}</td>
                                        {
                                            item?.cta?.map((c, index) => (
                                                <>
                                                    <td key={index}>
                                                        {c.content}
                                                    </td>
                                                </>
                                            ))
                                        }

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
export default Cta