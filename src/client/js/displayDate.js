
function displayDate() {
    const today = new Date();
    const week = today.toLocaleDateString('en-US',{weekday: 'long'});
    const month = today.toLocaleDateString('en-US',{month: 'short'});
    const day = today.getDate();
    const year = today.getFullYear();
    const date = `${week}, ${month} ${day}`;
    return date;
}

export { displayDate };