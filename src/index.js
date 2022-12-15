import './style.css';
import { createAboutUs } from './createAboutUs.js';
import { createMenu } from './createMenu.js';
import { createLive } from './createLive.js';

const content = document.querySelector('.content');


function clicktab(tab) {
    while (content.firstChild) {
        content.firstChild.remove()
    }
    if (tab == 1) {
        createAboutUs(content);
    } else if (tab ==2 ) {
        createMenu(content);
    } else if (tabe ==3) {
        createLive(content);
    }
}

document.querySelector('.menuAbout').addEventListener('click', () => clicktab(1));
document.querySelector('.menuMenu').addEventListener('click', () => clicktab(2));
document.querySelector('.menuLive').addEventListener('click', () => clicktab(3));
createAboutUs(content);
