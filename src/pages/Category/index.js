import './category.scss';
import { Delete, EditTwoTone, Add, CloudUploadOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import categoriesApi from '~/api/categoriesApi';
import axiosClient from '~/api/axiosClient';
import { Input, Button } from 'antd';

const Category = () => {
    const [category, setCategory] = useState([]);
    const [trangthai, setTrangthai] = useState(true);
    const [contentInput, setContentInput] = useState('');
    const [courseInput, setCourseInput] = useState('');
    const [activeItem, setActiveItem] = useState({});
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await categoriesApi.getAll();
            response.categories && setCategory(response.categories);
            console.log(response.categories);
        } catch (error) {
            console.log('Failed to fetch banner list: ', error);
        }
    };


    const onFileChosen = async (e) => {
        var imagefile = e.target.files[0];
        setImageFile(imagefile);
        const objectUrl = URL.createObjectURL(imagefile);
        setActiveItem({ ...activeItem, iconUrl: objectUrl });

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
        const res = await categoriesApi.patch({
            id: activeItem._id,
            iconUrl: response ? response.url : activeItem.iconUrl,
            content: contentInput,
            course: courseInput,
        });
        fetchCategory();
    };
    const submitPost = async (e) => {
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
        const res = await categoriesApi.post({
            iconUrl: response
                ? response.url
                : 'https://res.cloudinary.com/lg-btg/image/upload/v1661498453/image-uploader/bc3fzetpvfisqanxfkum.jpg',
            content: contentInput,
            course: courseInput,
        });
        console.log(res);
        fetchCategory();
    };
    const deleteClick = async (id, e) => {
        e.preventDefault();
        await categoriesApi.delete({ id });
        fetchCategory();
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

    const renderInfor = (
        <div className="pd-20">
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
                                    <th scope="col">action</th>
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

                                        <td>
                                            <div className="edit-infor">
                                                <button
                                                    className=" btn btn-outline-info p-1"
                                                    type="submit"
                                                    onClick={() => editClick(item)}
                                                    style={{ borderRadius: '20px', width: '40px', padding: '5px', height: '40px', margin: '5px', }}
                                                >
                                                    <EditTwoTone />
                                                </button>
                                                <button
                                                    className="size-40 btn btn-danger col-6 p-1"
                                                    type="submit"
                                                    style={{ borderRadius: '20px', width: '40px', padding: '5px', height: '40px', margin: '5px', }}
                                                    onClick={(e) => deleteClick(item._id, e)}
                                                >
                                                    <Delete />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>

            <div className="create">
                <h3>Create New Category</h3>
                <div className="create-item p-2">
                    <label >Enter content:</label>
                    <Input type="text" placeholder="Enter content:" onChange={(e) => onContentChange(e)}></Input>
                    <label>Enter course:</label>
                    <Input type="text" placeholder="Enter course:" onChange={(e) => onCourseChange(e)}></Input>
                    <div className="file-upload m-3">
                        <CloudUploadOutlined />
                        <input
                            type="file"
                            onChange={onFileChosen}
                            name="FileAttachment"
                            id="FileAttachment"
                            className="upload btn btn-secondary"/>
                    </div>
                    <button className="btn btn-primary col-6 "
                        type="submit"
                        onClick={(e) => submitPost(e)}
                        style={{ width: '70px', padding: '5px', height: '45px', margin: '5px', }}
                    >
                        <Add />
                    </button>
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
                        <div className='d-flex p-2 justify-content-around'>
                            <div className='col-3 m-1'>
                                <img
                                    src={activeItem.iconUrl}
                                    alt=""
                                    className="avatar"
                                    name="image"
                                    style={{ borderRadius: '20px', margin: '10px' }}
                                />
                                <div className="file-upload btn btn-secondary">
                                    <ion-icon name="camera-outline"></ion-icon>
                                    <input
                                        type="file"
                                        onChange={onFileChosen}
                                        name="FileAttachment"
                                        id="FileAttachment"
                                        className="upload btn btn-light"
                                    ></input>
                                </div>
                            </div>
                            <div className='col-3 m-1'>
                                <input
                                    onChange={(e) => onContentChange(e)}
                                    type="text"
                                    defaultValue={activeItem.content}
                                    className="form-control"
                                />
                            </div>
                            <div className='col-3 m-1'>
                                <input
                                    onChange={(e) => onCourseChange(e)}
                                    type="text"
                                    defaultValue={activeItem.course}
                                    className="form-control"
                                />
                            </div>
                            <div className='col-3 m-1'>
                                <div className="d-flex justify-content-center" >
                                    <div onClick={updateInfor}>
                                        <button
                                            type="submit"
                                            onClick={(e) => submitUpdate(e)}
                                            className='btn btn-info m-1 p-2'
                                        >
                                            Update
                                        </button>
                                    </div>

                                    <button
                                        type="submit"
                                        onClick={updateInfor}
                                        className='btn btn-danger  m-1 p-2'
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
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
