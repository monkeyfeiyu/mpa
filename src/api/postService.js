import api from './api.js';
import {post} from 'request';

export default Object.entries(api).reduce((prev, [k,v]) => {
    prev[k] = data => post(v, data);
    return prev;
}, {});