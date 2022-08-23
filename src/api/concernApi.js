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
};
export default concernApi;
