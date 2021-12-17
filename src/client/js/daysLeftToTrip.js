
function daysLeft(departure){
    if(!departure){
        return '';
    } else{
        const today = new Date();
        const depDate = new Date(departure);
        let difference = Math.round((depDate.getTime() - today.getTime()) / 86400000);
        const s = difference === 1 ? '' : 's';
        if(difference < 0){
            difference = Math.abs(difference);
            return `(${difference} day${s} ago)`;
        }
        return `(${difference} day${s} left)`;
    }
}

export { daysLeft };