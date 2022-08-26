import './category.scss';
import { Delete, EditTwoTone, Add } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import CategoryForm from '../../components/admin/categoryFrom';
import categoriesApi from '~/api/categoriesApi';
import axiosClient from '~/api/axiosClient';

const Category = () => {
    const [category, setCategory] = useState([]);
    const [trangthai, setTrangthai] = useState(true);
    const [contentInput, setContentInput] = useState('');
    const [courseInput, setCourseInput] = useState('');
    const [activeItem, setActiveItem] = useState({});
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await categoriesApi.getAll();
                response.categories && setCategory(response.categories);
                console.log(response.categories);
            } catch (error) {
                console.log('Failed to fetch banner list: ', error);
            }
        };
        fetchCategory();
    }, []);

    const onFileChosen = async (e) => {
        // var formData = FormData();
        var imagefile = e.target.files[0];
        setImageFile(imagefile);
        const objectUrl = URL.createObjectURL(imagefile);
        setActiveItem({ ...activeItem, iconUrl: objectUrl });
        // if (!imagefile) {
        //     window.alert('Please choose file again');
        //     return;
        // }
        console.log(objectUrl);
        // formData.append('image', imagefile);
        // const response = await axiosClient.post('/upload', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        // });
        // if (!response.data?.url) {
        //     window.alert('upload not successfuly :((');
        //     return;
        // }
        // const iconUrl = response.data.url;
        // console.log('upload success:', iconUrl);
    };

    const submitUpdate = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('image', imageFile);
        let response = undefined;
        if (imageFile) {
            response = await axiosClient.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        }

        console.log(response);
        const res = await categoriesApi.patch({
            id: activeItem._id,
            iconUrl: response ? response.url : activeItem.iconUrl,
            content: contentInput,
            course: courseInput,
        });
        console.log(res);
    };

    const onContentChange = (e) => {
        setContentInput(e.target.value);
    };
    const onCourseChange = (e) => {
        setCourseInput(e.target.value);
    };
    const editClick = (item) => {
        setContentInput(item.content);
        setCourseInput(item.course);

        setActiveItem(item);
        setTrangthai(!trangthai);
    };

    const updateInfor = () => {
        setTrangthai(true);
    };
    // const check = () => {
    //     if (trangthai === true) {
    //         return renderInfor;
    //     } else {
    //         renderUpdate();
    //     }
    // };
    const renderInfor = (
        <div className="pd-50">
            <h3 className="text-drak">About manage</h3>
            <div className="about_card border" id="about">
                <div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">icons</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">course</th>
                                </tr>
                            </thead>
                            {category.map((item, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <img
                                                src={item.iconUrl}
                                                alt=""
                                                className="avatar"
                                                name="image"
                                                style={{ borderRadius: '20px' }}
                                            />
                                        </td>
                                        <td>{item.content}</td>
                                        <td>{item.course}</td>

                                        {/* <td>
                                            <button
                                                className="size-40 btn btn-outline-info p-1"
                                                // onClick={() => setEdit(true)}
                                            >
                                                <EditTwoTone />
                                            </button>

                                            <button className="size-40 btn btn-danger col-6 p-1">
                                                <Delete />
                                            </button>
                                        </td> */}
                                    </tr>
                                    <div className="edit-infor">
                                        <button type="submit" onClick={() => editClick(item)}>
                                            Edit
                                        </button>
                                    </div>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
    const renderUpdate = (
        <div className="pd-50">
            <h3 className="text-drak">About manage</h3>
            <div className="about_card border" id="about">
                <div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">icons</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">course</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            src={activeItem.iconUrl}
                                            alt=""
                                            className="avatar"
                                            name="image"
                                            style={{ borderRadius: '20px' }}
                                        />
                                        <div className="file-upload">
                                            <ion-icon name="camera-outline"></ion-icon>
                                            <input
                                                type="file"
                                                onChange={onFileChosen}
                                                name="FileAttachment"
                                                id="FileAttachment"
                                                className="upload"
                                            ></input>
                                        </div>
                                    </td>
                                    <td>
                                        <input
                                            onChange={(e) => onContentChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.content}
                                        ></input>
                                    </td>
                                    <td>
                                        <input
                                            onChange={(e) => onCourseChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.course}
                                        ></input>
                                    </td>

                                    {/* <td>
                                            <button
                                                className="size-40 btn btn-outline-info p-1"
                                                // onClick={() => setEdit(true)}
                                            >
                                                <EditTwoTone />
                                            </button>

                                            <button className="size-40 btn btn-danger col-6 p-1">
                                                <Delete />
                                            </button>
                                        </td> */}
                                </tr>
                                <div className="edit-infor">
                                    <form action="" onClick={updateInfor}>
                                        <button
                                            type="submit"
                                            onClick={(e) => submitUpdate(e)}
                                            style={{ marginLeft: '-73px', marginTop: '5px' }}
                                        >
                                            Update
                                        </button>
                                    </form>
                                    <button
                                        type="submit"
                                        onClick={updateInfor}
                                        style={{ marginLeft: '-73px', marginTop: '5px' }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="profile">
            <div className="title">
                <h4>Category Information</h4>
            </div>
            <hr />
            {trangthai ? renderInfor : renderUpdate}
        </div>
    );
};

export default Category;
