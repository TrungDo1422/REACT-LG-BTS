import axiosClient from "./axiosClient";


const bannerApi = {
    //cái get thì ok rồi
    getAll: (params) => {
        const url = '/banner';
        return axiosClient.get(url, { params });
    },
    // cái này ông thấy sai ở đâu 
    patch: ({ id, title, content }) => {
        const url = `/banner/update/${id}`;
        return axiosClient.patch(url, {id, title, content });
    },
    delete: ({id }) => {
        const url = `/banner/delete/${id}`;
        return axiosClient.delete(url, {id});
    }
}
export default bannerApi;