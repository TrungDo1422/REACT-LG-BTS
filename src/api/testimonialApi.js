import axiosClient from './axiosClient';
const testimonialApi = {
    getAll: (params) => {
        const url = '/testimonial';
        return axiosClient.get(url, { params });
    },
    update: (id) => {
        const url = `/testimonial/${id}`;
        return axiosClient.patch(url);
    },
};
export default testimonialApi;
