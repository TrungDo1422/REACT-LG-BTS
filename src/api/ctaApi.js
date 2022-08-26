import axiosClient from './axiosClient';
const ctaApi = {
    getAll: (params) => {
        const url = '/cta';
        return axiosClient.get(url, { params });
    },
    update: ({ id, title, imgUrl }) => {
        const url = `/cta/update/${id}`;
        return axiosClient.patch(url, { id, title, imgUrl });
    },
};
export default ctaApi;
