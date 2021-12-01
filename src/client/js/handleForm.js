
async function getData(){
    try{
        const response = await fetch('http://localhost:8080/getData');
        const data = await response.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}

export { getData };