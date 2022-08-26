import './concern.scss';
import { Add, Delete, SaveSharp, HighlightOffSharp } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import concernApi from '~/api/concernApi';




const Concern = () => {

    const [onCreate, setOnCreate] = useState(false);
    const [concernDatas, setConcernDatas] = useState([]);

    const [content, setContent] = useState([]);
    const [description, setDescription] = useState([]);

    const [loading, setLoading] = useState(false)


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
    useEffect(() => {
        if (loading) {
            const fetchConcern = async () => {
                try {
                    const response = await concernApi.getAll();
                    setConcernDatas(response)
                } catch (error) {
                    console.log('Failed to fetch Concern data: ', error);
                }
            }
            fetchConcern();
        }
        setLoading(false);

    }, [loading]);


    const handleDelete = async (item) => {
        const newID = { id: item._id }
        await concernApi.deleteData(newID);
        setLoading(true);

    }
    const onContentInputChange = (event) => {
        setContent(event.target.value);
    };
    const onDescInputChange = (event) => {
        setDescription(event.target.value);
    };

    const onSubmit = async (event) => {
        setLoading(false)
        event.preventDefault();
        const res = await concernApi.createBanner({ content, description });
        setConcernDatas({
            ...concernDatas,
            res,
        });
        setOnCreate(false);
        setLoading(true)
    }

    return (
        <div className='pd-50'>
            <h3 className='text-center'>Concern manager</h3>
            <div className='concern_card border' id='concern'>
                {
                    concernDatas?.faq?.map((item, index) => (
                        <div key={index} className='faq card m-2'>
                            <div className='d-flex justify-content-around p-2'>
                                <div className='col-5 p-2'>
                                    <h4 className='text-content'>{item.content}</h4>
                                </div>
                                <div className='col-5 p-2'>
                                    <p className='text-description'>{item.description}</p>
                                </div>
                                <div className='col-2 p-1 d-flex justify-content-center'>
                                    <div>
                                        <button onClick={() => handleDelete(item)} className='size-40 btn btn-danger '><Delete /></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <hr />
                <button
                    className="size-40 btn btn-outline-info"
                    onClick={() => setOnCreate(true)}
                >
                    <Add />
                </button>
                {
                    onCreate &&
                    <div>
                        <form className="mt-4 form-group" onSubmit={onSubmit} >
                            <input
                                type="text"
                                placeholder='Enter new content...'
                                className="form-control mb-4"
                                id="content"
                                name="content"
                                value={content}
                                required
                                onChange={onContentInputChange}
                            />

                            <input
                                type="text"
                                placeholder='Enter new description...'
                                className="form-control mb-4"
                                id="description"
                                name="description"
                                value={description}
                                required
                                onChange={onDescInputChange}
                            />

                            <button className=" size-40 btn btn-primary " type="submit" value="Submit" >
                                <SaveSharp />
                            </button>
                            <button className=" size-40 btn btn-warning" type="submit" onClick={() => setOnCreate(false)}>
                                <HighlightOffSharp />
                            </button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
export default Concern