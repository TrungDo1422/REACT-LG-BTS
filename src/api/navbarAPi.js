import axiosClient from './axiosClient';
const navbarApi = {
    getAll: (params) => {
        const url = '/navbar';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/navbar/${id}`;
        return axiosClient.patch(url);
    },
};
export default navbarApi;
