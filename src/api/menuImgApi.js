import axiosClient from './axiosClient';
const menuImgApi = {
    getAll: (params) => {
        const url = '/uploadImg';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/uploadImg/${id}`;
        return axiosClient.patch(url);
    },
};
export default menuImgApi;
