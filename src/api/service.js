import api from './api.js';
import { get, post } from 'request';

export const getService = Object.entries(api).reduce((prev, [k, v]) => {
    prev[k] = data => get(v, data);
    return prev;
}, {});

export const postService = Object.entries(api).reduce((prev, [k, v]) => {
    prev[k] = data => post(v, data);
    return prev;
}, {});