
function createTripSection() {
    const footer = document.querySelector('footer');
    const parent = document.body;
    const tripSection = document.createElement('section');
    tripSection.className = 'trips-section';
    parent.insertBefore(tripSection, footer);
}

export { createTripSection };