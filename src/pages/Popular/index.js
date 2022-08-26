import './popular.scss';
import { Delete, EditTwoTone, Add, CloudUploadOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import popularApi from '~/api/popularApi';
import axiosClient from '~/api/axiosClient';
import { Input, Button } from 'antd';

const Popular = () => {
    const [popular, setPopular] = useState([]);
    const [trangthai, setTrangthai] = useState(true);
    const [contentInput, setContentInput] = useState('');
    const [activeItem, setActiveItem] = useState({});
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await popularApi.getAll();
            response.popular && setPopular(response.popular);
            console.log(response.popular);
        } catch (error) {
            console.log('Failed to fetch banner list: ', error);
        }
    };

    const onFileChosen = async (e) => {
        var imagefile = e.target.files[0];
        setImageFile(imagefile);
        const objectUrl = URL.createObjectURL(imagefile);
        setActiveItem({ ...activeItem, imgUrl: objectUrl });
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
        const res = await popularApi.patch({
            id: activeItem._id,
            imgUrl: response ? response.url : activeItem.imgUrl,
            content: contentInput,
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
        const res = await popularApi.post({
            imgUrl: response
                ? response.url
                : 'https://res.cloudinary.com/lg-btg/image/upload/v1661498453/image-uploader/bc3fzetpvfisqanxfkum.jpg',
            content: contentInput,
        });
        console.log(res);
        fetchCategory();
    };
    const deleteClick = async (id, e) => {
        e.preventDefault();
        await popularApi.delete({ id });
        fetchCategory();
    };

    const onContentChange = (e) => {
        setContentInput(e.target.value);
    };

    const editClick = (item) => {
        setContentInput(item.content);

        setActiveItem(item);
        setTrangthai(!trangthai);
    };
    const updateInfor = () => {
        setTrangthai(true);
    };
    const renderInfor = (
        <div className="pd-20">
            <h3 className="text-drak">Popular manage</h3>
            <div className="about_card border" id="about">
                <div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">image</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {popular.map((item, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <img
                                                src={item.imgUrl}
                                                alt=""
                                                className="avatar"
                                                name="image"
                                                style={{ borderRadius: '20px' }}
                                            />
                                        </td>
                                        <td>{item.content}</td>
                                        <td>
                                            <div className="edit-infor">
                                                <button
                                                    className="size-40 btn btn-outline-info p-1"
                                                    type="submit"
                                                    onClick={() => editClick(item)}
                                                >
                                                    <EditTwoTone />
                                                </button>
                                                <button
                                                    className="size-40 btn btn-danger col-6 p-1"
                                                    type="submit"
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
                <h3>Create New Popular</h3>
                <div className="create-item">
                    <label>Enter content:</label>
                    <Input type="text" placeholder="Enter content:" onChange={(e) => onContentChange(e)}></Input>
                    <div className="file-upload">
                        <CloudUploadOutlined />
                        <Input
                            type="file"
                            onChange={onFileChosen}
                            name="FileAttachment"
                            id="FileAttachment"
                            className="upload"
                        ></Input>
                    </div>
                </div>
            </div>
            <button className="size-40 btn btn-danger col-6 p-1" type="submit" onClick={(e) => submitPost(e)}>
                <Add />
            </button>
        </div>
    );
    const renderUpdate = (
        <div className="pd-50">
            <h3 className="text-drak">Popular manage</h3>
            <div className="about_card border" id="about">
                <div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">icons</th>
                                    <th scope="col">Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            src={activeItem.imgUrl}
                                            alt=""
                                            className="avatar"
                                            name="image"
                                            style={{ borderRadius: '20px' }}
                                        />
                                        <div className="file-upload">
                                            <ion-icon name="camera-outline"></ion-icon>
                                            <Input
                                                type="file"
                                                onChange={onFileChosen}
                                                name="FileAttachment"
                                                id="FileAttachment"
                                                className="upload"
                                            ></Input>
                                        </div>
                                    </td>
                                    <td>
                                        <Input
                                            onChange={(e) => onContentChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.content}
                                        ></Input>
                                    </td>
                                </tr>
                                <div className="edit-infor">
                                    <form action="" onClick={updateInfor}>
                                        <Button className="Button" type="primary" onClick={(e) => submitUpdate(e)}>
                                            Update
                                        </Button>
                                        <Button type="primary" danger onClick={updateInfor}>
                                            Close
                                        </Button>
                                    </form>
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
                <h4>Popular Information</h4>
            </div>
            <hr />
            {trangthai ? renderInfor : renderUpdate}
        </div>
    );
};

export default Popular;
