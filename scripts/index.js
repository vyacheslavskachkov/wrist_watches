'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let items = document.querySelectorAll('.item-container');
    items[items.length - 1].addEventListener('transitionend', () => {
        let images = [];
        for (let i = 0; i < 4; i++)
            images.push(document.querySelector(`.img-${i}`));
        images[1].addEventListener('transitionend', () =>
            document.querySelectorAll('.collection-caption').forEach(element =>
                element.classList.add('show-content')), { once: true });
        images.forEach((image, index) =>
            setTimeout(() => image.classList.add('show-image'), 100 * (index + 1) * (index + 1)));
        document.querySelector('header').classList.add('show-content');
    }, { once: true });
    items.forEach((item, index) => {
        setTimeout(() => item.classList.add('show-brand'), 100 * index + 150);
        setTimeout(() => item.classList.add('show-number'), 100 * index + 500);
    });
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', event => {
        let main = document.querySelector('.main'),
            href = event.currentTarget.getAttribute('href');
        event.preventDefault();
        main.classList.add('hide-content');
        main.addEventListener('transitionend', () =>
            window.location.href = href);
        document.querySelector('.line').style.transform = 'translateX(300px)';
    });
});