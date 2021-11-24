import img from '../../images/undraw_departing_re_mlq3.svg';
import icon from '../../images/add.svg';

export function loadHeroImages() {
    const heroSection = document.querySelector('.hero-section');
    heroSection.innerHTML = `
        <div class="title-wrapper">
            <div class="title-app">
                <h1>My Trip</h1>
                <h3>Wed, Nov 24</h3>
            </div>
            <img class="add-icon" src=${icon} alt="add trip icon">
        </div>
        <img class="hero-image" src="${img}" alt="girl with suitcase illustration">
    `;
    return heroSection;
}
