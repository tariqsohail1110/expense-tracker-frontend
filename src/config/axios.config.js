import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const getTokens = () => {
    return {
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken'),
    };
};

const setTokens = ({ accessToken, refreshToken }) => {
    localStorage.setItem('accessToken', accessToken);
    if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
};

api.interceptors.request.use((config) => {
    const { accessToken } = getTokens();
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry &&
            !originalRequest.url?.includes('/auth/')
        ) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            if (refreshToken) {
                try {
                    const res = await axios.post(
                        `${BASE_URL}/api/v1/auth/refresh`,
                        {
                            refreshToken: refreshToken,
                        }
                    );
                    setTokens(res.data.data);
                    originalRequest.headers.Authorization = `Bearer ${res.data.data.accessToken}`;
                    return api(originalRequest);
                } catch (refreshError) {
                    localStorage.clear();
                    window.location.href = '/';
                    return Promise.reject(refreshError);
                }
            } else {
                localStorage.clear();
                window.location.href = '/';
                return Promise.reject(error);
            }
        }
        const message = error.response?.data?.message || 'Something went wrong';
        error.message = message;
        return Promise.reject(error);
    }
);

export default api;