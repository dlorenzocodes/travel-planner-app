
function daysLeft(departure){
    if(!departure){
        return '';
    } else{
        const today = new Date();
        const depDate = new Date(departure);
        const difference = depDate.getTime() - today.getTime();
        const daysDiff = Math.round(difference / (1000 * 3600 * 24));
        const s = daysDiff < 2 ? '' : 's';
        return `(${daysDiff} day${s} left)`;
    }
}

export { daysLeft };