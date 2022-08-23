import axiosClient from './axiosClient';
const headerApi = {
    getAll: (params) => {
        const url = '/header';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/header/${id}`;
        return axiosClient.patch(url);
    },
};
export default headerApi;
