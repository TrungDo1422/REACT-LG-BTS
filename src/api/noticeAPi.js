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
    createNotice: async({ stt, description }) => {
        const url = '/notice/create';
        return  await axiosClient.post(url, {stt, description });
    },
    deleteNotice: async ({ id }) => {
        const url = `/notice/delete/${id}`;
        return await axiosClient.delete(url, { id });
    }
};
export default noticeApi;
