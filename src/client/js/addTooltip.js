function addTooltip() {
    const trips = document.querySelector('.trips-section').children
    const today = new Date().getTime();

    for(let i = 0; i < trips.length; i++){
        const dateTime = Number(trips[i].getAttribute('data-id'));

        if(dateTime < today){
            trips[i].setAttribute('data-status', 'expired');
            trips[i].classList.add('show');
            const tripDatesContainer = trips[i].firstElementChild.nextElementSibling.lastElementChild;
            const tooltip = tripDatesContainer.firstElementChild.lastElementChild;
            tooltip.style.display = 'flex';
        }
    }

}

export { addTooltip };