//Все глобальные переменные и переменные DOM элементов 
const $flashlight = document.querySelector('.dynamic-image'),
    $wrapper = document.querySelector('.wrapper'),
    $shadow = document.querySelector('.shadow'),
    $score = document.querySelector('.score'),
    $effectInvert = document.querySelector('#invert'),
    $effectSepia = document.querySelector('#sepia'),
    $effectSaturate = document.querySelector('#saturate'),
    $controllsOpen = document.querySelector('.controlls__open'),
    $settings = document.querySelector('.settings'),
    $shop = document.querySelector('.shop');

let flashlightSize = 150,
    score = 0,
    fieldWidth = $wrapper.offsetWidth,
    fieldHeight = $wrapper.offsetHeight,
    //контейнер для DOM элемента игрового объекта который рендерится на игровом поле
    $object = null;

//Экспорт переменных
export default {
    flashlightSize,
    score,
    $object,
    $flashlight,
    $wrapper,
    $shadow,
    $score,
    $effectInvert,
    $effectSepia,
    $effectSaturate,
    $controllsOpen,
    $settings,
    $shop,
    fieldHeight,
    fieldWidth
};