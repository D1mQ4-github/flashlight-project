let flashlightSize = 150,
    score = 0,
    //контейнер для DOM элемента игрового объекта который рендерится на игровом поле
    $object = null;

const $flashlight = document.querySelector('.dynamic-image'),
    $wrapper = document.querySelector('.wrapper'),
    $shadow = document.querySelector('.shadow'),
    $score = document.querySelector('.score'),
    $effectInvert = document.querySelector('#invert'),
    $effectSepia = document.querySelector('#sepia'),
    $effectSaturate = document.querySelector('#saturate'),
    $controllsOpen = document.querySelector('.controlls__open'),
    $settings = document.querySelector('.settings'),
    $shop = document.querySelector('.shop'),
    fieldWidth = $wrapper.offsetWidth,
    fieldHeight = $wrapper.offsetHeight;

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