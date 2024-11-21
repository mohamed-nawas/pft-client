import axios from "axios";

export const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:8000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    },
})