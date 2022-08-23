import axiosClient from "./axiosClient";


const bannerApi = {
    getAll: (params) => {
        const url = '/banner';
        return axiosClient.get(url, { params });
    },
    patch: ({ id, title, content }) => {
        const url = `/banner/update/${id}`;
        return axiosClient.patch(url, {id, title, content });
    }
}
export default bannerApi;