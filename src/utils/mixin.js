import * as utils from 'utils';
import {get, post} from 'request';
import getService from 'api/getService';
import postService from 'api/postService';

export const mixin = Vue => {
    Vue.mixin({
        data() {
            return {
                qs,
                pageData: {
                    title: 'Initialization project',
                }
            };
        },
        methods: {

        },
        created() {
            Vue.util.defineReactive(this, '$utils', utils);
            Vue.util.defineReactive(this, '$get', get);
            Vue.util.defineReactive(this, '$post', post);
            Vue.util.defineReactive(this, '$getService', getService);
            Vue.util.defineReactive(this, '$postService', postService);
            
        }
    });
};
