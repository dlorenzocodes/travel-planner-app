
function daysLeft(departure, returning){
    if(!departure && !returning){
        return ''
    } else{
        const depDate = new Date(departure);
        const retuDate = new Date(returning);
        const difference = retuDate.getTime() - depDate.getTime();
        const daysDiff = Math.round(difference / (1000 * 3600 * 24));
        const s = daysDiff < 2 ? '' : 's';
        return `${daysDiff}day${s} left`;
    }
}

export { daysLeft };