import axiosClient from './axiosClient';
const ctaApi = {
    getAll: (params) => {
        const url = '/cta';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/cta/${id}`;
        return axiosClient.patch(url);
    },
};
export default ctaApi;
