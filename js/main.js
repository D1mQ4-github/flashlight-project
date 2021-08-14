import vars from './modules/variables.js';

document.addEventListener('DOMContentLoaded', () => {
    //Инициализация счета при первой загрузке из переменной score - 0
    setScore(score);

    const setScore = (val) => {
        vars.$score.textContent = val;
    }

    const getMoney = (e) => {
        if (e.target.parentElement.dataset.amount) {
            const amount = e.target.parentElement.dataset.amount;
            score += +amount;
            setScore(score);
            $object.remove();
            renderObject();
        }
    }

    const getRandomAmount = (max) => {
        const num = Math.floor(Math.random() * max);
        return ((num) < 1) ? getRandomAmount(max) : num;
    }

    const renderObject = () => {
        const amount = getRandomAmount(1000);

        let object = document.createElement('div'),
            inner = document.createElement('span');

        object.setAttribute('class', 'object');
        object.setAttribute('data-amount', amount);
        inner.textContent = amount + '$';
        object.append(inner);
        $flashlight.append(object);
        object.style.cssText = `
            top: ${getRandomAmount(fieldHeight - object.offsetWidth)}px; 
            left: ${getRandomAmount(fieldWidth - object.offsetHeight)}px`;

        $object = document.querySelector('.object');
        $object.addEventListener('click', getMoney);
    }

    $wrapper.addEventListener('mousemove', (e) => {
        let x = e.clientX,
            y = e.clientY;

        $flashlight.style.cssText += `clip-path: circle(${flashlightSize - 4}px at ${x}px ${y}px)`;
        $shadow.style.cssText = `
            top: ${y - flashlightSize}px; 
            left: ${x - flashlightSize}px; 
            width: ${flashlightSize * 2}px; 
            height: ${flashlightSize * 2}px`;
    });

    $wrapper.addEventListener('mousewheel', (e) => {
        let diff = flashlightSize - (e.deltaY / 100)
        flashlightSize = (diff < 100) ? 100 : diff;
    });

    $effectInvert.addEventListener('input', (e) => {
        $flashlight.style.cssText += `
            filter: invert(${e.target.value}%);
        `;
    });

    $effectSepia.addEventListener('input', (e) => {
        $flashlight.style.cssText += `
            filter: sepia(${e.target.value}%);
        `;
    });

    $effectSaturate.addEventListener('input', (e) => {
        $flashlight.style.cssText += `
            filter: saturate(${e.target.value}%);
        `;
    });

    $controllsOpen.addEventListener('click', () => {
        if ($settings.classList.contains('settings-active')) {
            $settings.classList.remove('settings-active')
        } else {
            $settings.classList.add('settings-active')
        }
    });

    const ability = (name, price, cb) => {
        const btn = document.createElement('button');
        btn.classList.add('shop__btn');
        btn.textContent = `${name} [-${price}$]`;
        $shop.append(btn);

        if (score < price) {
            btn.setAttribute('disabled', '');
        } else {
            btn.removeAttribute('disabled', '');
            btn.addEventListener('click', () => {
                cb();
                score -= price;
                setScore(score);
            });
        }
    }

    //CAREFULL!!! SHIT CODE THERE                   ..everywhere
    setInterval(() => {
        $shop.innerHTML = '';
        ability('Fix flashlight', 1000, () => {
            $flashlight.style.cssText += `
            animation-iteration-count: 1`;
        });
        ability('Useless piece of shit', 10000, () => {
            $flashlight.style.cssText += `
            animation-iteration-count: 1`;
        });
        ability('Useless piece of shit #2', 23000, () => {
            $flashlight.style.cssText += `
            animation-iteration-count: 1`;
        });
    }, 1000);

    renderObject();
});