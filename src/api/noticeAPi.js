import axiosClient from './axiosClient';
const noticeApi = {
    getAll: (params) => {
        const url = '/notice';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/notice/${id}`;
        return axiosClient.patch(url);
    },
};
export default noticeApi;
