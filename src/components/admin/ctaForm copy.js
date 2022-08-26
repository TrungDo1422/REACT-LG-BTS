import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import ctaApi from '~/api/ctaApi';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
};

const CtaForm = ({ setLoading, setEdit, id, imgUrl, title }) => {
    const initState = {
        imgUrl: imgUrl,
        title: title,
    };

    const [ctaData, setCtaData] = useState(initState);
    const [imgUrlInput, setImgUrlInput] = useState(imgUrl);
    const [titleInput, setTitleInput] = useState(title);
    const [loadingImg, setLoadingImg] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoadingImg(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoadingImg(false);
                setImageUrl(url);
            });
        }
    };

    const onTitleInputChange = (event) => {
        setTitleInput(event.target.value);
    };
    const onImgUrlInputChange = (event) => {
        setImgUrlInput(event.target.value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await ctaApi.update({ id, title: titleInput, imgUrl: imgUrlInput });
        setCtaData({
            ...ctaData,
            imgUrl: imgUrlInput,
            title: titleInput,
            res,
        });
        setEdit(false);
        setLoading(true);
    };

    const uploadButton = (
        <div>
            {loadingImg ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    return (
        <div className="bg-lightblue">
            <form className="mt-4 form-group" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control mb-4"
                    id="imgUrl"
                    name="imgUrl"
                    value={imgUrlInput}
                    required
                    onChange={onImgUrlInputChange}
                />
                <input
                    type="text"
                    className="form-control mb-4"
                    id="title"
                    name="title"
                    value={titleInput}
                    required
                    onChange={onTitleInputChange}
                />
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                                width: '100%',
                            }}
                        />
                    ) : (
                        uploadButton
                    )}
                </Upload>
                <button className="btn btn-primary col-6" type="submit">
                    <SaveSharp />
                </button>
                <button className="btn btn-warning col-6" type="submit" onClick={() => setEdit(false)}>
                    <HighlightOffSharp />
                </button>
            </form>
        </div>
    );
};

export default CtaForm;
