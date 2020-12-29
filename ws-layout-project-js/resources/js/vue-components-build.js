import 'babel-polyfill';
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import VCalendar from 'v-calendar';
import moment from 'moment';
import autosize from 'autosize';

// 註冊Vue
window.Vue = require('vue');
// 套件綁到Vue prototype上
moment.locale = 'zh-tw';
Vue.prototype.$moment = moment;
Vue.prototype.$autosize = autosize;
// 套件支援Use使用Vue.use
Vue.use(PerfectScrollbar);
Vue.use(VCalendar);
// global宣告components
Vue.component(
  'example-component',
  require('./components/ExampleComponent.vue').default,
);
