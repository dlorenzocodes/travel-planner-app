
import icon from '../../images/delete.svg';
import { formatDate } from './formatDate.js';
import { daysLeft } from './days-left.js';


const overlay = document.querySelector('.overlay');
const form = document.querySelector('.modal-form');
const noTripsSection= document.querySelector('.no-trips');
const footer = document.querySelector('footer');
const parent = document.body;

function updateUI(data) {
    console.log(data);
    const tripSection = document.createElement('section');
    tripSection.className = 'trips-section';
    parent.insertBefore(tripSection, footer);

    tripSection.innerHTML = `
        <div class="trip-wrapper">
            <div style="background-image: url(${data.img})" class="city-img"></div>
            <div class="trip-info">
                <h1>${data.name}</h1>
                <h3>City: ${data.city}</h3>
                <div class="trip-dates">
                    <h3 id="start-date">${formatDate(data.startDate)}</h3>
                    <h3 id="end-date">${formatDate(data.endDate)}<span class="days-left">(${daysLeft(data.startDate, data.endDate)})</span></h3>
                </div>
            </div>

            <div class="weather-info">
                <h3>Typical weather for then is:</h3>
                <div class="temperature">
                    <span id="high">High: ${data.temp}</span>
                    <span id="low">Feels Like: ${data.app_temp || data.app_max_temp}</span>
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
    form.classList.remove('active');
    overlay.classList.remove('active');
    noTripsSection.classList.add('hidde');
}

export { updateUI };