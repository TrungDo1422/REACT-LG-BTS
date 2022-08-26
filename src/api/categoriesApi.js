import axiosClient from './axiosClient';
const categoriesApi = {
    getAll: (params) => {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },
    patch: ({ id, iconUrl, content, course }) => {
        const url = `/categories/update/${id}`;
        return axiosClient.patch(url, { id, iconUrl, content, course });
    },
};
export default categoriesApi;
