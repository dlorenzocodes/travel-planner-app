
import icon from '../../images/delete.svg';
import photo from '../../images/ImageNotFound-01.png';
import { formatDate } from './formatDate.js';
import { daysLeft } from './daysLeftToTrip.js';
import { checkforTrips } from './checkforTrips.js';




function updateUI(data) {

    if(data != undefined){
        const tripSection = document.querySelector('.trips-section');
        tripSection.style.overflow = 'auto';
        tripSection.innerHTML = '';
        let idCount = 0;

        data.forEach( trip => {
            tripSection.innerHTML += `
                <div class="trip-wrapper" id="${idCount++}">
                    <div style="background-image: url(${trip.img || photo})" class="city-img"></div>
                    <div class="trip-info">
                        <h1>${trip.name}</h1>
                        <h3>City: ${trip.city}</h3>
                        <div class="trip-dates">
                            <div class="days-for-departure">
                                <h3 id="start-date">Departure: ${formatDate(trip.startDate)}</h3>
                                <span class="days-left">${daysLeft(trip.startDate)}</span>
                            </div>
                            <h3 id="end-date">Return: ${formatDate(trip.endDate)}</h3>
                        </div>
                    </div>

                    <div class="weather-info">
                        <h3>Typical weather for then is:</h3>
                        <div class="temperature">
                            <span id="high">High: ${Math.round(trip.temp)}<span>&#176</span>F</span>
                            <span id="low">Feels Like: ${Math.round(trip.app_temp) || Math.round(trip.app_max_temp)}<span>&#176</span>F</span>
                        </div>
                    <p>${trip.weather_desc}</p>
                    </div>

                    <div class="trip-notes">
                        <div class="notes"> 
                            <h3>Trip Notes</h3>
                            <p>${trip.notes}</p>
                        </div>
                        <img class="delete" src="${icon}" alt="trash can delete icon">
                    </div>
                </div>
            `;
        });

        checkforTrips();

    }else{
        return;
    }
    
}

export { updateUI };