
import { getFromLocalStorage } from './getFromLocalStorage.js';
let idCount = 0;

function addToLocalStorage(data) {

    if(data != undefined){
        const tripObj = {
            tripId: idCount++,
            ...data};

        const getGroupOfTrips = getFromLocalStorage() ;
        const groupOfTrips = (typeof getGroupOfTrips === 'undefined') ? [] : getFromLocalStorage();
        groupOfTrips.push(tripObj);
        window.localStorage.setItem('trip', JSON.stringify(groupOfTrips));
        console.log(groupOfTrips);
    } else{
        return;
    }
}

export { addToLocalStorage };