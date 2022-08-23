import axiosClient from './axiosClient';
const categoriesApi = {
    getAll: (params) => {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },
    updateComponent: ({id,title,categories }) => {
        const url = `/categories/${id}`;
        return axiosClient.patch(url, { id, title,categories});
    },
};
export default categoriesApi;
