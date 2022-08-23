import axiosClient from "./axiosClient";


const categoryApi = {
    getAll: (params) => {
        const url = '/categories';
        return axiosClient.get(url, { params });
    },

    patch: ({id, title, content, description}) => {
        const url = `/categories/update/${id}`;
        return axiosClient.patch(url, { id, title, content, description });
    }
}
export default categoryApi;