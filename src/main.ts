import { createApp } from 'vue';
import pinia from '/@/stores/index';
import App from '/@/App.vue';
import router from '/@/router';
import { directive } from '/@/directive/index';
import { i18n } from '/@/i18n/index';
import other from '/@/utils/other';

import ElementPlus from 'element-plus';
import '/@/theme/index.scss';
import VueGridLayout from 'vue-grid-layout';

// import { basicSetup } from 'codemirror'
// import VueCodemirror from 'vue-codemirror'

const app = createApp(App);

directive(app);
other.elSvg(app);

// app.use(VueCodemirror, {
//     // optional default global options
//     autofocus: true,
//     disabled: false,
//     indentWithTab: true,
//     tabSize: 2,
//     placeholder: 'Code goes here...',
//     extensions: [basicSetup]
// })

app.use(pinia)
    .use(router)
    .use(ElementPlus)
    .use(i18n)
    .use(VueGridLayout)
    .mount('#app');
