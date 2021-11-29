import icon from '../../images/add.svg';

export function loadAddIcon(){
    const noTripsSection = document.querySelector('.no-trips');

    noTripsSection.innerHTML = `
        <p>You have no trips!</p>
        <img id="no-trip-add-icon" class="add-icon" src=${icon} alt="add trip icon">
    `;
    return noTripsSection;
}