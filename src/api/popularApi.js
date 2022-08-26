import axiosClient from './axiosClient';
const popularApi = {
    getAll: (params) => {
        const url = '/popular';
        return axiosClient.get(url, { params });
    },
    patch: ({ id, imgUrl, content }) => {
        const url = `/popular/update/${id}`;
        return axiosClient.patch(url, { id, imgUrl, content });
    },
    delete: ({ id }) => {
        const url = `/popular/delete/${id}`;
        return axiosClient.delete(url, { id });
    },
    post: ({ imgUrl, content }) => {
        const url = `/popular/create/`;
        return axiosClient.post(url, { imgUrl, content });
    },
};
export default popularApi;
