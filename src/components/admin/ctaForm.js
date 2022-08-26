import { HighlightOffSharp, SaveSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import ctaApi from '~/api/ctaApi';

const CtaForm = ({ setLoading, setEdit, id, imgUrl, title }) => {
    const initState = {
        imgUrl: imgUrl,
        title: title,
    };

    const [ctaData, setCtaData] = useState(initState);
    const [imgUrlInput, setImgUrlInput] = useState(imgUrl);
    const [titleInput, setTitleInput] = useState(title);

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
