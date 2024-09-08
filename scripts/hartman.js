'use strict';

window.addEventListener('load', () => {
    document.querySelector('.poster').classList.add('show-poster');
    document.querySelector('.product-info').addEventListener('animationend', () => {
        document.querySelectorAll('.img-container').forEach((img, index) =>
            setTimeout(() => img.classList.add('show-image'), 100 * index));
    });
});