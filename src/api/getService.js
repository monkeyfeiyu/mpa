import api from './api.js';
import { get } from 'request';

export default Object.entries(api).reduce((prev, [k, v]) => {
    prev[k] = data => get(v, data);
    return prev;
}, {});