

function orderTripsChronologically(){
    const allTrips = document.querySelector('.trips-section').children;
    const tripSection = document.querySelector('.trips-section');
    let dates = [];
    let newTripsArr = [];
    let expiredTrips = [];
   
    for(let i = 0; i < allTrips.length; i++) {
        let date = allTrips[i].getAttribute('data-id');
        if(isNaN(date)){
            const today = new Date();
            const nextYear = today.getFullYear() + 1;
            const month = today.getMonth() + 1;
            const day = today.getDate();
            const emptyTripDate = `${nextYear}-${month}-${day}`;
            date = new Date(emptyTripDate).getTime();
            allTrips[i].setAttribute('data-id', date);
        }
        dates.push(date);
    }

    dates.sort((a,b) => a - b);
    const nodeTripsToArr = Array.from(allTrips);
    dates.forEach( d => {
        const soonerTrips = nodeTripsToArr.filter((trip) => trip.getAttribute('data-id') == d);
        newTripsArr.push(...soonerTrips);
    });

    for(let j = 0; j < newTripsArr.length; j++){

        if(newTripsArr.indexOf(newTripsArr[j]) !== j){
            newTripsArr.splice(j, 1);
        }

        if(newTripsArr[j].getAttribute('data-status')) {
            expiredTrips.push(newTripsArr[j]);
            newTripsArr[j].remove();
            newTripsArr.splice(j, 1);
        }

        newTripsArr[j].remove();
        tripSection.appendChild(newTripsArr[j]);
    }

    expiredTrips.forEach( e => {
        tripSection.appendChild(e);
    });
    
}

export { orderTripsChronologically };