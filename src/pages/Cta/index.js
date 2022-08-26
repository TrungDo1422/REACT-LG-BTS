import React, { useState, useEffect } from 'react';
import { Delete, EditTwoTone, Add } from '@material-ui/icons';
import CtaForm from '../../components/admin/ctaForm';
import ctaApi from '~/api/ctaApi';

const Cta = () => {
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    const [ctaDatas, setCtaDatas] = useState([]);

    useEffect(() => {
        const fetchCtaData = async () => {
            try {
                const response = await ctaApi.getAll();
                setCtaDatas(response);
            } catch (error) {
                console.log('Failed to fetch Cta data: ', error);
            }
        };
        fetchCtaData();
    }, []);

    useEffect(() => {
        if (loading) {
            const fetchBanner = async () => {
                try {
                    const response = await ctaApi.getAll();
                    setCtaDatas(response);
                } catch (error) {
                    console.log('Failed to fetch banner list: ', error);
                }
            };
            fetchBanner();
            setLoading(false);
        }
    }, [loading]);
    return (
        <div className="pd-50">
            <h3 className="text-center">CTA manager</h3>
            <div className="cta_card border" id="cta">
                {ctaDatas?.cta?.map((item, index) => (
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
                                        <img src={item.imgUrl} alt="#" />
                                    </td>
                                    <td>{item.title}</td>
                                        <>
                                            <td key={index}>{item.content}</td>
                                        </>

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
                        {edit && (
                            <CtaForm
                                setLoading={setLoading}
                                setEdit={setEdit}
                                id={item._id}
                                imgUrl={item.imgUrl}
                                title={item.title}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Cta;
