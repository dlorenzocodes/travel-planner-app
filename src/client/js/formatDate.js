
function formatDate(arg){
    if(arg === ""){
        return '';
    } else{
        const date = new Date(arg);
        const month = date.getMonth() + 1;
        const day = date.getDate() + 1;
        const year = date.getFullYear();
        const dayZero = day <= 9 ? '0' : '';
        const monthZero = month <= 9 ? '0' : '';
        const newDate = `${monthZero}${month}-${dayZero}${day}-${year}`;
        return newDate;
    }
    
}

export { formatDate };