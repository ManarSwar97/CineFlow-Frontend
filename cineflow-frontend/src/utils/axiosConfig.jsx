import axios from "axios";

axios.interceptors.request.use(req => {
    const token = localStorage.getItem("token");

    if (token && !req.url.includes("/auth")) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

export default axios;
