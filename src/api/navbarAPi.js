import axiosClient from './axiosClient';
const navbarApi = {
    getAll: (params) => {
        const url = '/navbar';
        return axiosClient.get(url, { params });
    },
    patch: ({ id, logoUrl, content, map }) => {
        const url = `/navbar/update/${id}`;
        return axiosClient.patch(url, { id, logoUrl, content, map });
    },
    delete: ({ id }) => {
        const url = `/navbar/delete/${id}`;
        return axiosClient.delete(url, { id });
    },
    post: ({ logoUrl, content, map }) => {
        const url = `/navbar/create/`;
        return axiosClient.post(url, { logoUrl, content, map });
    },
};
export default navbarApi;
