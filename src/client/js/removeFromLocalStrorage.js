import { getFromLocalStorage } from './getFromLocalStorage.js';

function removeFromLocalStorage(id){
    const currentLStriplist = getFromLocalStorage();
    let tripToRemoveIndex;
    currentLStriplist.forEach( trip => {
        const index = trip.tripId;
        if(index == id){
            tripToRemoveIndex = currentLStriplist.indexOf(trip);
        }
    })
    
    currentLStriplist.splice(tripToRemoveIndex, 1);
    console.log(currentLStriplist);
    window.localStorage.setItem('trip', JSON.stringify(currentLStriplist));
}

export { removeFromLocalStorage };