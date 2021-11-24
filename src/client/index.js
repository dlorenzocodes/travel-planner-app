import { loadHeroImages } from '../client/js/heroImg-component.js';
import { loadAddIcon } from '../client/js/noTrips-component.js';
import { footer } from './js/footer-component.js';

import './styles/hero-section.scss';
import './styles/no-trips-section.scss';
import './styles/footer.scss';

document.body.appendChild(loadHeroImages());
document.body.appendChild(loadAddIcon());
document.body.appendChild(footer());