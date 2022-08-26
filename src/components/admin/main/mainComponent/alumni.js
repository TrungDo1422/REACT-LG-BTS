import { Delete, EditTwoTone, Add, CloudUploadOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import testimonialApi from '~/api/testimonialApi';
import axiosClient from '~/api/axiosClient';
import { Input } from 'antd';

const Alumni = () => {
    const [alumni, setAlumni] = useState([]);
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
        const res = await testimonialApi.patch({
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
        const res = await testimonialApi.post({
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
        await testimonialApi.delete({ id });
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
        <div className="pd-50">
            <h3 className="text-drak">About manage</h3>
            <div className="about_card border" id="about">
                <div>
                    <div className="modal-body">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">content</th>
                                    <th scope="col">avataUrl</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Plus</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            {alumni.map((item, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{item.content}</td>
                                        <td>
                                            <img
                                                src={item.avataUrl}
                                                alt=""
                                                className="avatar"
                                                name="image"
                                                style={{ borderRadius: '20px' }}
                                            />
                                        </td>
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
                <h3>Create New Category</h3>
                <div className="create-item">
                    <label>Enter content:</label>
                    <Input type="text" placeholder="Enter content:" onChange={(e) => onContentChange(e)}></Input>
                    <label>Enter course:</label>
                    <Input type="text" placeholder="Enter course:" onChange={(e) => onCourseChange(e)}></Input>
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
                                    <td>
                                        <Input
                                            onChange={(e) => onCourseChange(e)}
                                            type="text"
                                            name=""
                                            id=""
                                            defaultValue={activeItem.course}
                                        ></Input>
                                    </td>
                                </tr>
                                <div className="edit-infor">
                                    <form action="" onClick={updateInfor}>
                                        <button
                                            type="submit"
                                            onClick={(e) => submitUpdate(e)}
                                        >
                                            Update
                                        </button>
                                    </form>
                                    <button
                                        type="submit"
                                        onClick={updateInfor}
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

export default Alumni;
