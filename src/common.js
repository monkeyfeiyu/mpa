import Vue from 'vue';
import 'fonts/index.less';
import 'styles/index.less';
import {mixin} from 'utils';
import ElementUI from 'element-ui';
import Layout from 'components/Layout';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(mixin);
Vue.use(ElementUI);
Vue.component('Layout', Layout);
