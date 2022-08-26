import axiosClient from "./axiosClient";


const aboutApi = {
    getAll: (params) => {
        const url = '/about';
        return axiosClient.get(url, { params });
    },

    updateAbout: ({ id, title, content, description }) => {
        const url = `/about/update/${id}`;
        return axiosClient.patch(url, { id, title, content, description });
    },
    createAbout: async({ title, content, description }) => {
        const url = '/about/create';
        return  await axiosClient.post(url, { title, content, description });
    },
    deleteAbout: async ({ id }) => {
        const url = `/about/delete/${id}`;
        return await axiosClient.delete(url, { id });
    },
}
export default aboutApi;