import { checkforTrips } from './checkforTrips.js'

function deleteTrips() {
    const deleteIcon = document.querySelectorAll('.delete');
    const trips = document.querySelectorAll('.trip-wrapper');
    
    for(let i = 0; i < deleteIcon.length; i++){
        deleteIcon[i].addEventListener('click', () => {
            for(let t = 0; t < trips.length; t++){
                let iIndex = i;
                let tIndex = t;
                if(iIndex === tIndex){
                    const tripToRemove = trips[tIndex];
                    tripToRemove.remove();
                    checkforTrips();
                }
            }
        });
    }
}

export { deleteTrips };