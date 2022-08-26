import axiosClient from './axiosClient';
const concernApi = {
    getAll: (params) => {
        const url = '/faq';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/faq/${id}`;
        return axiosClient.patch(url);
    },
    deleteData: async ({ id }) => {
        const url = `/faq/delete/${id}`
        return await axiosClient.delete(url, { id });

    },
    createBanner: async ({ content, description }) => {
        const url = '/faq/create'
        return await axiosClient.post(url, { content, description });
    }
};
export default concernApi;
