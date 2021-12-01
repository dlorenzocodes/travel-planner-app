import { loadHeroImages } from '../client/js/heroImg-component.js';
import { loadAddIcon } from '../client/js/noTrips-component.js';
import { footer } from './js/footer-component.js';
import { showForm } from './js/showForm.js';
import { closeForm } from './js/closeForm.js';
import { tripInfoObj} from './js/saveTrip.js';



import './styles/hero-section.scss';
import './styles/no-trips-section.scss';
import './styles/added-trips.scss';
import './styles/form.scss'
import './styles/footer.scss';


// Appends html to document via JS
document.body.appendChild(loadHeroImages());
document.body.appendChild(loadAddIcon());
document.body.appendChild(footer());

// Call modules functions
showForm();
closeForm();
tripInfoObj();

