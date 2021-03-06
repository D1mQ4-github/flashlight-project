import vars from './variables.js';
import general from './general.js';

//Регистрация нового предмета в магазине
//Принимает в параметры - Имя которое отображается на кнопке, цена, callback функция
export const ability = (name, price, cb) => {
    const btn = document.createElement('button');
    btn.classList.add('shop__btn');
    btn.textContent = `${name} [-${price}$]`;
    vars.$shop.append(btn);

    if (vars.score < price) {
        btn.setAttribute('disabled', '');
    } else {
        btn.removeAttribute('disabled', '');
        btn.addEventListener('click', () => {
            cb();
            vars.score -= price;
            general.setScore(vars.score);
        });
    }
}

//CAREFULL!!! SHIT CODE THERE                   ..everywhere
setInterval(() => {
    vars.$shop.innerHTML = '';
    ability('Fix flashlight', 1000, () => {
        vars.$flashlight.style.cssText += `
            animation-iteration-count: 1`;
    });
    ability('Useless piece of shit', 10000, () => {
        vars.$flashlight.style.cssText += `
            animation-iteration-count: 1`;
    });
    ability('Useless piece of shit #2', 23000, () => {
        vars.$flashlight.style.cssText += `
            animation-iteration-count: 1`;
    });
}, 1000);

export default { ability };