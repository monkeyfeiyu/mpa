import * as utils from 'utils';
import { getService, postService } from 'api/service';

export const mixin = Vue => {
    Vue.mixin({
        data() {
            return {
                qs,
                pageData: {
                    title: 'Initialization project'
                }
            };
        },
        methods: {

        },
        created() {
            Vue.util.defineReactive(this, '$utils', utils);
            Vue.util.defineReactive(this, '$getService', getService);
            Vue.util.defineReactive(this, '$postService', postService);

        }
    });
};
