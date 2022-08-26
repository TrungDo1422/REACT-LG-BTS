import axiosClient from "./axiosClient";


const bannerApi = {
    getAll: (params) => {
        const url = '/banner';
        return axiosClient.get(url, { params });
    },
    updateBanner: ({ id, title, content }) => {
        const url = `/banner/update/${id}`;
        return axiosClient.patch(url, { id, title, content });
    },
    deleteDataAPI:  ({id}) => {
        const url = `/banner/delete/${id}`
        return axiosClient.delete(url,{id});
     
    },
    createBanner: async({ title, content }) => {
        const url = '/banner/create'
        return  await axiosClient.post(url, { title, content });
    }
}
export default bannerApi;