import img from '../../images/undraw_departing_re_mlq3.svg';
import icon from '../../images/add.svg';
import { displayDate } from './displayDate.js';

export function loadHeroImages() {
    const heroSection = document.querySelector('.hero-section');
    heroSection.innerHTML = `
        <div class="title-wrapper">
            <div class="title-app">
                <h1>My Trips</h1>
                <h3>${displayDate()}</h3>
            </div>
            <img id="no-trip-add-icon" class="add-icon" src=${icon} alt="add trip icon">
        </div>
        <img class="hero-image" src="${img}" alt="girl with suitcase illustration">
    `;
    return heroSection;
}
