import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    // return an instance of axios
    return axios.create({
        baseURL: 'http://localhost:5002/api/',
        headers: {
            Authorization: token
        }
    })
}