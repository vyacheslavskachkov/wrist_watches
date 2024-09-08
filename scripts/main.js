'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let mainMenu = document.querySelector('.main-menu');
    document.querySelector('.line').style.left = `${document.querySelector('.current-item').offsetLeft}px`;
    mainMenu.addEventListener('mouseover', event =>
        moveLine(event.target.offsetLeft - document.querySelector('.current-item').offsetLeft));
    mainMenu.addEventListener('mouseout', moveLine.bind(null, 0));
});

function moveLine(position) {
    document.querySelector('.line').style.transform = `translateX(${position}px)`;
}