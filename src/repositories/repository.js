import axios from 'axios';

const baseDomain = import.meta.env.VITE_APP_NAME;
const baseUrl = `${baseDomain}/api`;

export default axios.create({
    baseURL: baseUrl,
    headers: {},
});
