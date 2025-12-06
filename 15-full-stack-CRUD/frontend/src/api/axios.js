import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // http://localhost:8000/api
    withCredentials: true,                 // optional (cookies)
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;
