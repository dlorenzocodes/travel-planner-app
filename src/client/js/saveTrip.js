import { postTripData } from './app.js';
import { getData } from './getData.js';
import { updateUI } from './updateUI.js';
import { deleteTrips } from './deleteTrips.js';



// Grabbing Inputs
const tripName = document.querySelector('input#trip-name');
const tripCity = document.querySelector('input#trip-city');
const startDate = document.querySelector('input#trip-start-date');
const endDate = document.querySelector('input#trip-end-date');
const tripNotes = document.querySelector('textarea#notes');
const saveBtn = document.querySelector('.save');



const tripInfoObj = () => {
    saveBtn.addEventListener('click', () => {
        const tripData = {
            name: tripName.value,
            city: tripCity.value,
            startDate: startDate.value,
            endDate: endDate.value,
            notes: tripNotes.value
        }

        if(tripData.city === '') {
            throw new Error(alert('A city must be provided! Please enter a city name.'));
        }

        postTripData(tripData)
            .then(getData)
            .then(updateUI)
            .then( () => {
                tripName.value = '';
                tripCity.value = '';
                startDate.value = '';
                endDate.value = '';
                tripNotes.value = '';
            })
            .then(deleteTrips)
            .catch(err => {
                alert(err.message);
            });
    });
}

export { tripInfoObj };