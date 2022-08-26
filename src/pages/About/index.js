import { Delete, EditTwoTone, Add, SaveSharp, HighlightOffSharp } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import AboutForm from '../../components/admin/aboutForm';
import aboutApi from '../../api/aboutApi';
import noticeApi from '../../api/noticeAPi';
import './about.scss';

const About = () => {
    const [aboutDatas, setAboutDatas] = useState([]);
    const [noticeDatas, setNoticeDatas] = useState([]);


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [desc, setDesc] = useState('');
    const [stt, setStt] = useState('');
    const [noticeDesc, setNotceDesc] = useState('');


    const [loading, setLoading] = useState(false)

    const [edit, setEdit] = useState(false);
    const [noticeCreate, setNoticeCreate] = useState(false);
    const [onCreate, setOnCreate] = useState(false);




    //About---------------------------------
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

    useEffect(() => {
        if (loading) {
            const fetchAbout = async () => {
                try {
                    const response = await aboutApi.getAll();
                    setAboutDatas(response)

                } catch (error) {
                    console.log('Failed to fetch about list: ', error);
                }
            }
            fetchAbout();
        }
        if (loading) {
            const fetchAbout = async () => {
                try {

                    const response = await noticeApi.getAll();
                    setNoticeDatas(response)
                } catch (error) {
                    console.log('Failed to fetch notice list: ', error);
                }
            }
            fetchAbout();
        }
    }, [loading])

    //Notice-----------------------------------
    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await noticeApi.getAll();
                setNoticeDatas(response)
            } catch (error) {
                console.log('Failed to fetch notice list: ', error);
            }
        }
        fetchNotice();
    }, [noticeDatas]);

    useEffect(() => {
        if (loading) {
            const fetchNotice = async () => {
                try {
                    const response = await noticeApi.getAll();
                    setNoticeDatas(response)
                } catch (error) {
                    console.log('Failed to fetch notice list: ', error);
                }
            }
            fetchNotice();
        }
    }, [loading])




    //About---------------------------------
    const handleDelete = async (item) => {
        const newID = { id: item._id }
        await aboutApi.deleteAbout(newID);
        setLoading(true);

    }
    const onTitleInputChange = (event) => {
        setTitle(event.target.value);
    };
    const onContentInputChange = (event) => {
        setContent(event.target.value);
    };
    const onDescInputChange = (event) => {
        setDesc(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await aboutApi.createAbout({ title, content, desc });
        setAboutDatas({
            ...aboutDatas,
            res,
        });
        setOnCreate(false)
    }
    //Notice-----------------------------------------------
    const onSttInputChange = (event) => {
        setStt(event.target.value);
    };
    const onNoticeDescInputChange = (event) => {
        setNotceDesc(event.target.value);
        console.log(noticeDesc)
    };
    const onNoticeSubmit = async (event) => {
        event.preventDefault();
        const res = await noticeApi.createNotice({ stt: stt, description: noticeDesc });
        setNoticeDatas({
            ...noticeDatas,
            res,
        });
        setLoading(true)
        setNoticeCreate(false)
    }
    const handleNoticeDelete = async (item) => {
        const newID = { id: item._id }
        await noticeApi.deleteNotice(newID);
        setLoading(true);
    }

    return (
        <div className='pd-50'>
            <h3 className='text-drak'>About manage</h3>
            <div className='about-container border' id='about'>
                <div className='about-card'>
                    {
                        aboutDatas.about?.map((item, index) => (
                            <div key={index}>
                                <div className="modal-body">
                                    <ul>
                                        <li>
                                            <div className='d-flex p-2 justify-content-around'>
                                                <div className='col-3 p-1 title_text'><p>{item.title}</p></div>
                                                <div className='col-3 p-1 content_text'><p>{item.content}</p></div>
                                                <div className='col-3 p-1 title_desc'>
                                                    <i className='text'>{item.description}</i>
                                                </div>
                                                <div className='col-3 p-1'>
                                                    <button
                                                        className="size-40 btn btn-outline-info p-1"
                                                        onClick={() => setEdit(true)}
                                                    >
                                                        <EditTwoTone />
                                                    </button>

                                                    <button
                                                        onClick={() => handleDelete(item)}
                                                        className='size-40 btn btn-danger col-6 p-1'
                                                    >
                                                        <Delete />
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                        <hr />
                                    </ul>


                                    <div className='m-1'>

                                        {
                                            edit &&
                                            <AboutForm setEdit={setEdit}
                                                title={item.title}
                                                description={item.description}
                                                content={item.content}
                                                id={item._id}
                                                setLoading={setLoading}
                                            />
                                        }

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <button onClick={() => setOnCreate(true)} className='size-40 btn btn-primary col-4 p-1'><Add /></button>
                    {
                        onCreate &&
                        <div>
                            <form className="mt-4 form-group" onSubmit={onSubmit} >
                                <input
                                    type="text"
                                    placeholder='Enter new title...'
                                    className="form-control mb-4"
                                    id="title"
                                    name="title"
                                    value={title}
                                    required
                                    onChange={onTitleInputChange}
                                />

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
                                    id="Desc"
                                    name="desc"
                                    value={desc}
                                    required
                                    onChange={onDescInputChange}
                                />

                                <button className=" size-40 btn btn-primary " type="submit">
                                    <SaveSharp />
                                </button>
                                <button className=" size-40 btn btn-warning" type="submit" onClick={() => setOnCreate(false)}>
                                    <HighlightOffSharp />
                                </button>


                            </form>
                        </div>
                    }
                </div>
                <div className='notice'>
                    {
                        noticeDatas?.notice?.map((item, index) => (
                            <div key={index}>
                                <div class="card m-1">
                                    <div class="card-body d-flex justify-content-between">
                                        <div>
                                            <p className='card-title stt_text'>{item.stt}</p>
                                            <p className='card-text desc_text'>{item.description}</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => handleNoticeDelete(item)}
                                                className='size-40 btn btn-danger col-6 p-1'
                                            >
                                                <Delete />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                    <button
                        className="size-40 btn btn-outline-info p-1"
                        onClick={() => setNoticeCreate(true)}
                    >
                        <Add />
                    </button>
                    {
                        noticeCreate &&
                        <div>
                            <form className="mt-4 form-group" onSubmit={onNoticeSubmit} >
                                <input
                                    type="text"
                                    placeholder='Enter new title...'
                                    className="form-control mb-4"
                                    id="stt"
                                    name="stt"
                                    value={stt}
                                    required
                                    onChange={onSttInputChange}
                                />


                                <input
                                    type="text"
                                    placeholder='Enter new description...'
                                    className="form-control mb-4"
                                    id="noticeDesc"
                                    name="noticeDesc"
                                    value={noticeDesc}
                                    required
                                    onChange={onNoticeDescInputChange}
                                />

                                <button className=" size-40 btn btn-primary " type="submit">
                                    <SaveSharp />
                                </button>
                                <button className=" size-40 btn btn-warning" type="submit" onClick={() => setNoticeCreate(false)}>
                                    <HighlightOffSharp />
                                </button>


                            </form>
                        </div>
                    }
                </div>

            </div >
        </div>
    )
};

export default About;
