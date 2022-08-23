import axiosClient from './axiosClient';
const categoriesApi = {
    getAll: (params) => {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/categories/${id}`;
        return axiosClient.patch(url);
    },
};
export default categoriesApi;
