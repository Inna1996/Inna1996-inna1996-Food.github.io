require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import timerr from './modules/timerr';
import sliders from './modules/sliders';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';
import {
    openModal
} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timerr();
    cards();
    calc();
    forms('form', modalTimerId);
    sliders({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});