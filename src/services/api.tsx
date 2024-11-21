import axios from "axios";


export const API = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
})