import axiosClient from "./axiosClient";


const aboutApi = {
    getAll: (params) => {
        const url = '/about';
        return axiosClient.get(url, { params });
    },

    patch: ({id, title, content, description}) => {
        const url = `/about/update/${id}`;
        return axiosClient.patch(url, { id, title, content, description });
    }
}
export default aboutApi;