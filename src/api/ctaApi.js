import axiosClient from './axiosClient';
const ctaApi = {
    getAll: (params) => {
        const url = '/cta';
        return axiosClient.get(url, { params });
    },
    patch: ({ id, imgUrl, title, content }) => {
        const url = `/cta/update/${id}`;
        return axiosClient.patch(url, { id, imgUrl, title, content });
    },
    delete: ({ id }) => {
        const url = `/cta/delete/${id}`;
        return axiosClient.delete(url, { id });
    },
    post: ({ imgUrl, title, content }) => {
        const url = `/cta/create/`;
        return axiosClient.post(url, { imgUrl, title, content });
    },
};
export default ctaApi;
