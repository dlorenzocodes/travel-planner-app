
async function getData(){
    try{
        const response = await fetch('http://localhost:8080/getData');
        const data = await response.json();

        if(data.code){
            alert(`${data.message}`)
            return;
        }
        
        return data;
    }catch(err){
        throw new Error(err);
    }
}

export { getData };