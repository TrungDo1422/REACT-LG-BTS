import axiosClient from './axiosClient';
const popularApi = {
    getAll: (params) => {
        const url = '/popular';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/popular/${id}`;
        return axiosClient.patch(url);
    },
};
export default popularApi;