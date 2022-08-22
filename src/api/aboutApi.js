import axiosClient from "./axiosClient";


const aboutApi = {
    //cái get thì ok rồi
    getAll: (params) => {
        const url = '/about';
        return axiosClient.get(url, { params });
    },

    patch: (id, tilte, content) => {
        const url = `/about/${id}`;
        console.log(content)
        return axiosClient.patch(url, { tilte, content });
    }
}
export default aboutApi;