import Axios from "axios";

const client = Axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// client.interceptors.request.use((config) => {
//     if (!config.headers["x-token"]) {
//         const LoginToken = localStorage.getItem('Nekot-covid');
//         if (LoginToken) {
//             config.headers["x-token"] = LoginToken;
//         }
//     }
//     return config;
// });

export default client;