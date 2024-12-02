import './forms';
import { formFieldsInit, formSubmit } from './forms';
import 'inputmask';
const form = () => {
    // form fields
    // formFieldsInit({ viewPass: true });
    // submit form
    // formSubmit();
    nameValidate();
    phoneMask();
    telValidate();

    function nameValidate() {
        const name = document.querySelectorAll('.input-name');
        name.forEach((item) => {
            item.addEventListener('input', () => {
                const inputValue = item.value.trim();
                const parent = item.parentElement;

                if (!/^[a-zA-Zа-яА-Я\s\-]+$/.test(inputValue) || inputValue == '') {
                    parent.classList.add('_form-error');
                    parent.classList.remove('_form-field');
                } else {
                    parent.classList.remove('_form-error');
                    parent.classList.add('_form-field');
                }
            });
        });
    }
    function phoneMask() {
        console.log($('.phone-mask'));
        const mask = new Inputmask('+7 (999) 999-99-99');
        mask.mask($('.phone-mask'));
    }
    function telValidate() {
        const tel = document.querySelectorAll('.input-phone');

        tel.forEach((item) => {
            item.addEventListener('input', () => {
                const inputValue = item.value.trim();

                const parent = item.parentElement;

                if (!/^\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(inputValue) && inputValue != '') {
                    parent.classList.add('_form-error');
                    parent.classList.remove('_form-field');
                } else if (inputValue.length < 16) {
                    parent.classList.add('_form-error');
                    parent.classList.remove('_form-field');
                } else {
                    parent.classList.remove('_form-error');
                    parent.classList.add('_form-field');
                }
            });
        });
    }
};

export default form;
