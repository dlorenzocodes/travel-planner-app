
function checkforTrips() {
    const tripsSection = document.querySelector('.trips-section').children;
    const noTripsSection= document.querySelector('.no-trips');
    const titleWrapper = document.querySelector('.title-wrapper');

    if(tripsSection.length != 0){
        noTripsSection.classList.add('hidde');
        titleWrapper.classList.add('active');
    } else{
        noTripsSection.classList.remove('hidde');
        titleWrapper.classList.remove('active');
    }
}

export { checkforTrips };