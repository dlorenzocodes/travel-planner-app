
function daysLeft(departure){
    if(!departure){
        return '';
    } else{
        const today = new Date();
        const depDate = new Date(departure);
        const difference = depDate.getTime() - today.getTime();
        let daysDiff = Math.round(difference / (1000 * 3600 * 24));
        if(daysDiff < 0){
            alert('Departure date chosen has already past!');
            daysDiff = 0;
        }
        const s = daysDiff < 2 ? '' : 's';
        return `(${daysDiff} day${s} left)`;
    }
}

export { daysLeft };