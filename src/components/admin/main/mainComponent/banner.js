import { Close, Delete, EditTwoTone } from '@material-ui/icons';
import { useState } from 'react';
import BannerForm from '../fromInput/bannerForm';

const Banner = (props, loading) => {

    const [showmodal, setShowModal] = useState(false);
    const [edit, setEdit] = useState(false);


    const handlemodal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }


    return (
        <div>
            <div className={`overlay ${!showmodal ? `overlay-none` : ``}`}>
                <div className="content">
                    {
                        loading &&
                        props.data.banner?.map((item, index) => (
                            <div key={index}>
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Title</th>
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
                                                        className="btn btn-outline-info p-1"
                                                        onClick={() => setEdit(true)}
                                                    >
                                                        <EditTwoTone />
                                                    </button>

                                                    <button className='btn btn-danger col-6 p-1'><Delete /></button>

                                                    {edit && <BannerForm setEdit={setEdit} datas={props.data.banner} id={item._id} />}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className="modal-footer">
                                    <button onClick={closeModal} className="btn btn-danger">
                                        <Close />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <button onClick={handlemodal} className="btn btn-primary">Open banner</button>

        </div>
    )
}

export default Banner