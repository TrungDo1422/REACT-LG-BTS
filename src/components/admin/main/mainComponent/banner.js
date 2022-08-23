import { Delete, EditTwoTone } from '@material-ui/icons';
import { useState } from 'react';
import BannerForm from '../fromInput/bannerForm';






const Banner = (props) => {

    const [edit, setEdit] = useState(false);


    return (
        <div className='banner_card accent-bluem-4 p-2 border' id='banner'>
            <h3 className='text-info'>Banner manager</h3>
            {
                props.data.banner?.map((item, index) => (
                    <div key={index}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col text">Title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.title}</td>
                                    <td>{item.content}</td>
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
                            {edit && <BannerForm setEdit={setEdit} datas={props.data.banner} id={item._id} />}

                        </div>
                    </div>

                ))
            }
        </div>

    )
}

export default Banner