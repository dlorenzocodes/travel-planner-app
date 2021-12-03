
import icon from '../../images/delete.svg';
import { formatDate } from './formatDate.js';
import { daysLeft } from './daysLeftToTrip.js';
import { checkforTrips } from './checkforTrips.js';



function updateUI(data) {

    const tripSection = document.querySelector('.trips-section');
    tripSection.style.overflow = 'auto';

    tripSection.innerHTML += `
        <div class="trip-wrapper">
            <div style="background-image: url(${data.img})" class="city-img"></div>
            <div class="trip-info">
                <h1>${data.name}</h1>
                <h3>City: ${data.city}</h3>
                <div class="trip-dates">
                    <div class="days-for-departure">
                        <h3 id="start-date">Departure: ${formatDate(data.startDate)}</h3>
                        <span class="days-left">${daysLeft(data.startDate)}</span>
                    </div>
                    <h3 id="end-date">Return: ${formatDate(data.endDate)}</h3>
                </div>
            </div>

            <div class="weather-info">
                <h3>Typical weather for then is:</h3>
                <div class="temperature">
                    <span id="high">High: ${data.temp}<span>&#176</span>F</span>
                    <span id="low">Feels Like: ${data.app_temp || data.app_max_temp}<span>&#176</span>F</span>
                </div>
            <p>${data.weather_desc}</p>
            </div>

            <div class="trip-notes">
                <div class="notes"> 
                    <h3>Trip Notes</h3>
                    <p>${data.notes}</p>
                </div>
                <img class="delete" src="${icon}" alt="trash can delete icon">
            </div>
        </div>
    `;
    checkforTrips();
}

export { updateUI };