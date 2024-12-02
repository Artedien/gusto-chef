import './index.scss';

window.$ = window.jQuery = require('jquery');

import widget from './js/components/widget';
import burger from './js/components/burger';
import dishesSwiper from './js/components/dishes';
import dishesFancybox from './js/components/fancybox';
import feedback from './js/components/feedback';
import form from './js/utils/form';

window.addEventListener('DOMContentLoaded', () => {
    try {
        widget();
    } catch {}
    try {
        burger();
    } catch {}
    try {
        dishesSwiper();
    } catch {}
    try {
        dishesFancybox();
    } catch {}
    try {
        form();
    } catch {}
    try {
        feedback();
    } catch {}
});
