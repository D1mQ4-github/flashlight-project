import vars from './variables.js';

//Функция устанвливает значение игрового счета
export const setScore = (val) => {
    vars.$score.textContent = val;
}

export const getMoney = (e) => {
    if (e.target.parentElement.dataset.amount) {
        const amount = e.target.parentElement.dataset.amount;
        vars.score += +amount;
        setScore(vars.score);
        vars.$object.remove();
        renderObject();
    }
}

export const getRandomAmount = (max) => {
    const num = Math.floor(Math.random() * max);
    return ((num) < 1) ? getRandomAmount(max) : num;
}

export const renderObject = () => {
    const amount = getRandomAmount(1000);

    let object = document.createElement('div'),
        inner = document.createElement('span');

    object.setAttribute('class', 'object');
    object.setAttribute('data-amount', amount);
    inner.textContent = amount + '$';
    object.append(inner);
    vars.$flashlight.append(object);
    object.style.cssText = `
        top: ${getRandomAmount(vars.fieldHeight - object.offsetWidth)}px; 
        left: ${getRandomAmount(vars.fieldWidth - object.offsetHeight)}px`;

    vars.$object = document.querySelector('.object');
    vars.$object.addEventListener('click', getMoney);
}

export default {
    setScore,
    getRandomAmount,
    renderObject
};