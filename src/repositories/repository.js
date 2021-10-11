import axios from 'axios';

const baseDomain = 'http://localhost:3000';
const baseUrl = `${baseDomain}/api`;

export default axios.create({
    baseURL: baseUrl,
    headers: {},
});
