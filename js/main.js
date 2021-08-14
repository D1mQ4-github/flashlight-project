import vars from './modules/variables.js';
import general from './modules/general.js';
import shop from './modules/shop.js';

document.addEventListener('DOMContentLoaded', () => {
    //Инициализация счета при первой загрузке из переменной score - 0
    general.setScore(vars.score);

    vars.$wrapper.addEventListener('mousemove', (e) => {
        let x = e.clientX,
            y = e.clientY;

        vars.$flashlight.style.cssText += `clip-path: circle(${vars.flashlightSize - 4}px at ${x}px ${y}px)`;
        vars.$shadow.style.cssText = `
            top: ${y - vars.flashlightSize}px; 
            left: ${x - vars.flashlightSize}px; 
            width: ${vars.flashlightSize * 2}px; 
            height: ${vars.flashlightSize * 2}px`;
    });

    vars.$wrapper.addEventListener('mousewheel', (e) => {
        let diff = vars.flashlightSize - (e.deltaY / 100)
        vars.flashlightSize = (diff < 100) ? 100 : diff;
    });

    vars.$effectInvert.addEventListener('input', (e) => {
        vars.$flashlight.style.cssText += `
            filter: invert(${e.target.value}%);
        `;
    });

    vars.$effectSepia.addEventListener('input', (e) => {
        vars.$flashlight.style.cssText += `
            filter: sepia(${e.target.value}%);
        `;
    });

    vars.$effectSaturate.addEventListener('input', (e) => {
        vars.$flashlight.style.cssText += `
            filter: saturate(${e.target.value}%);
        `;
    });

    vars.$controllsOpen.addEventListener('click', () => {
        if (vars.$settings.classList.contains('settings-active')) {
            vars.$settings.classList.remove('settings-active')
        } else {
            vars.$settings.classList.add('settings-active')
        }
    });

    //CAREFULL!!! SHIT CODE THERE                   ..everywhere
    setInterval(() => {
        vars.$shop.innerHTML = '';
        shop.ability('Fix flashlight', 1000, () => {
            vars.$flashlight.style.cssText += `
            animation-iteration-count: 1`;
        });
        shop.ability('Useless piece of shit', 10000, () => {
            vars.$flashlight.style.cssText += `
            animation-iteration-count: 1`;
        });
        shop.ability('Useless piece of shit #2', 23000, () => {
            vars.$flashlight.style.cssText += `
            animation-iteration-count: 1`;
        });
    }, 1000);

    general.renderObject();
});