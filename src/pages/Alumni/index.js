import { Delete, EditTwoTone, Add, CloudUploadOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import testimonialApi from '~/api/testimonialApi';
import axiosClient from '~/api/axiosClient';
import { Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Alumni = () => {
    const [alumni, setAlumni] = useState([]);
    const [trangthai, setTrangthai] = useState(true);
    const [contentInput, setContentInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [plusInput, setPlusInput] = useState('');
    const [activeItem, setActiveItem] = useState({});
    const [imageFile, setImageFile] = useState('');

    useEffect(() => {
        fetchCategory();
    }, []);

    const fetchCategory = async () => {
        try {
            const response = await testimonialApi.getAll();
            response.testimonial && setAlumni(response.testimonial);
            console.log(response);
        } catch (error) {
            console.log('Failed to fetch banner list: ', error);
        }
    };

    const onFileChosen = async (e) => {
        var imagefile = e.target.files[0];
        setImageFile(imagefile);
        const objectUrl = URL.createObjectURL(imagefile);
        setActiveItem({ ...activeItem, avataUrl: objectUrl });
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
        const res = await testimonialApi.patch({
            id: activeItem._id,
            avataUrl: response ? response.url : activeItem.avataUrl,
            content: contentInput,
            name: nameInput,
            Plus: plusInput,
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
        const res = await testimonialApi.post({
            avataUrl: response
                ? response.url
                : 'https://res.cloudinary.com/lg-btg/image/upload/v1661498453/image-uploader/bc3fzetpvfisqanxfkum.jpg',
            content: contentInput,
            name: nameInput,
            Plus: plusInput,
        });
        console.log(res);
        fetchCategory();
    };
    const deleteClick = async (id, e) => {
        e.preventDefault();
        await testimonialApi.delete({ id });
        fetchCategory();
    };

    const onContentChange = (e) => {
        setContentInput(e.target.value);
    };
    const onNameChange = (e) => {
        setNameInput(e.target.value);
    };
    const onPlusChange = (e) => {
        setPlusInput(e.target.value);
    };
    const editClick = (item) => {
        setContentInput(item.content);
        setNameInput(item.name);
        setPlusInput(item.plus);

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
                                    <th scope="col">avataUrl</th>
                                    <th scope="col">content</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Plus</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            {alumni.map((item, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <img
                                                src={item.avataUrl}
                                                alt=""
                                                className="avatar"
                                                name="image"
                                                style={{ borderRadius: '20px' }}
                                            />
                                        </td>
                                        <td>{item.content}</td>

                                        <td>{item.name}</td>
                                        <td>{item.Plus}</td>
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
                <h3>Create New Testimonial</h3>
                <div className="create-item">
                    <label>Enter content:</label>
                    <Input type="text" placeholder="Enter content:" onChange={(e) => onContentChange(e)}></Input>
                    <label>Enter name:</label>
                    <Input type="text" placeholder="Enter course:" onChange={(e) => onNameChange(e)}></Input>
                    <label>Enter plus:</label>
                    <Input type="text" placeholder="Enter course:" onChange={(e) => onPlusChange(e)}></Input>
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
            <h3 className="text-drak">Testimonial manage</h3>
            <div className="about_card border" id="about">
                <div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Icons</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Plus</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            src={activeItem.avataUrl}
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
                                        <TextArea
                                            onChange={(e) => onContentChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.content}
                                        ></TextArea>
                                    </td>
                                    <td>
                                        <Input
                                            onChange={(e) => onNameChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.name}
                                        ></Input>
                                    </td>
                                    <td>
                                        <Input
                                            onChange={(e) => onPlusChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.Plus}
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
                <h4>Testimonial Information</h4>
            </div>
            <hr />
            {trangthai ? renderInfor : renderUpdate}
        </div>
    );
};

export default Alumni;
