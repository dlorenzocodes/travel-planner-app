
function getFromLocalStorage(){
    const trips = window.localStorage.getItem('trip');
    if(trips){
        const data = JSON.parse(trips);
        return data;
    }
}

export { getFromLocalStorage };