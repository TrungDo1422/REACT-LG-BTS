import axiosClient from './axiosClient';
const categoriesApi = {
    getAll: (params) => {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },
    patch: ({ id, title }) => {
        const url = `/categories/update/${id}`;
        return axiosClient.patch(url, { id, title });
    },
    createItem: ({ id, iconUrl, content ,course}) => {
        const url = `/categories/create/${id}`;
        return axiosClient.post(url, { id, iconUrl, course, content });
    },
};
export default categoriesApi;
