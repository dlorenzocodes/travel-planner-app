import img from '../../images/eiffel-tower-g2f5f0afe3_1920.jpg';
import icon from '../../images/delete.svg';

export function tripInfo() {
    const tripSection = document.querySelector('.trips-section');

    tripSection.innerHTML = `
        <div class="trip-wrapper">
            <div style="background-image: url(${img})" class="city-img"></div>
            <div class="trip-info">
                <h1>Trip to France</h1>
                <h3>City: Paris</h3>
                <div class="trip-dates">
                    <h3 id="start-date">Nov, Friday 26th</h3>
                    <h3 id="end-date">— Nov, Friday 26th<span class="days-left">(days left)</span></h3>
                </div>
            </div>

            <div class="weather-info">
                <h3>Typical weather for then is:</h3>
                <div class="temperature">
                    <span id="heigh">High: 45</span>
                    <span id="low">Low: 45</span>
                </div>
            <p>Mostly cloudy</p>
            </div>

            <div class="trip-notes">
                <div class="notes"> 
                    <h3>Trip Notes</h3>
                    <p>
                        Filler text is text that shares 
                        some characteristics of a real written text,
                        but is random or otherwise generated. It may be used
                        to display a sample of fonts, generate text for 
                        testing, or to spoof an e-mail spam filter.
                    </p>
                </div>
                <img class="delete" src="${icon}" alt="trash can delete icon">
            </div>
        </div>
    `;

    return tripSection;
}