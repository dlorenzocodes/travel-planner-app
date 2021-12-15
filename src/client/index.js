import { loadHeroImages } from './js/heroImgComponent.js.js';
import { loadAddIcon } from './js/noTripsComponent.js';
import { footer } from './js/footerComponent.js';
import { showForm } from './js/showForm.js';
import { closeForm } from './js/closeForm.js';
import { createTripSection } from './js/createTripSection.js';
import { tripInfoObj} from './js/saveTrip.js';
import {getFromLocalStorage } from './js/getFromLocalStorage.js';
import { updateUI } from './js/updateUI.js';
import { deleteTrips } from './js/deleteTrips.js';




import './styles/hero-section.scss';
import './styles/no-trips-section.scss';
import './styles/added-trips.scss';
import './styles/form.scss'
import './styles/footer.scss';


// Appends html to document via JS
document.body.appendChild(loadHeroImages());
document.body.appendChild(loadAddIcon());
document.body.appendChild(footer());
const trips = getFromLocalStorage();


// Call modules functions
showForm();
closeForm();
createTripSection();
updateUI(trips);
deleteTrips();
tripInfoObj();


