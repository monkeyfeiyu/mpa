import Vue from 'vue';
import 'fonts/index.scss';
import 'styles/index.scss';
import { mixin } from 'utils';
import ElementUI from 'element-ui';
import Layout from 'components/Layout';

Vue.use(mixin);
Vue.use(ElementUI);
Vue.component('Layout', Layout);
