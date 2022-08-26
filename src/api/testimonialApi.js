import axiosClient from './axiosClient';
const testimonialApi = {
    getAll: (params) => {
        const url = '/testimonial';
        return axiosClient.get(url, { params });
    },
    patch: ({ id, content, avataUrl, name, Plus }) => {
        const url = `/testimonial/update/${id}`;
        return axiosClient.patch(url, { id, content, avataUrl, name, Plus });
    },
    delete: ({ id }) => {
        const url = `/testimonial/delete/${id}`;
        return axiosClient.delete(url, { id });
    },
    post: ({ content, avataUrl, name, Plus }) => {
        const url = `/testimonial/create/`;
        return axiosClient.post(url, { content, avataUrl, name, Plus });
    },
};
export default testimonialApi;
