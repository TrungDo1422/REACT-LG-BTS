import React, { useState, useEffect } from 'react';
import ctaApi from '~/api/ctaApi';
import { Delete, EditTwoTone, Add, CloudUploadOutlined } from '@material-ui/icons';
import axiosClient from '~/api/axiosClient';
import { Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Cta = () => {
    const [cta, setCta] = useState([]);
    const [trangthai, setTrangthai] = useState(true);
    const [contentInput, setContentInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [activeItem, setActiveItem] = useState({});
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await ctaApi.getAll();
            response.cta && setCta(response.cta);
            console.log(response.cta);
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
        const res = await ctaApi.patch({
            id: activeItem._id,
            imgUrl: response ? response.url : activeItem.imgUrl,
            title: titleInput,
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
        const res = await ctaApi.post({
            imgUrl: response
                ? response.url
                : 'https://res.cloudinary.com/lg-btg/image/upload/v1661498453/image-uploader/bc3fzetpvfisqanxfkum.jpg',
            title: titleInput,
            content: contentInput,
        });
        console.log(res);
        fetchCategory();
    };
    const deleteClick = async (id, e) => {
        e.preventDefault();
        await ctaApi.delete({ id });
        fetchCategory();
    };

    const onTitleChange = (e) => {
        setTitleInput(e.target.value);
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
            <h3 className="text-drak">CTA manage</h3>
            <div className="about_card border" id="about">
                <div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">image</th>
                                    <th scope="col">title</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {cta.map((item, index) => (
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
                                        <td>{item.title}</td>
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

            {/* <div className="create">
                <h3>Create New CTA</h3>
                <div className="create-item">
                    <label>Enter title:</label>
                    <Input type="text" placeholder="Enter content:" onChange={(e) => onTitleChange(e)}></Input>
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
            </button> */}
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
                                    <th scope="col">Icons</th>
                                    <th scope="col">Title</th>
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
                                            onChange={(e) => onTitleChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.title}
                                        ></Input>
                                    </td>
                                    <td>
                                        <TextArea
                                            onChange={(e) => onContentChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.content}
                                        ></TextArea>
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
                <h4>CTA Information</h4>
            </div>
            <hr />
            {trangthai ? renderInfor : renderUpdate}
        </div>
    );
};
export default Cta;
