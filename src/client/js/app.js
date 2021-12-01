

async function postTripData(obj){
    const response = await fetch('http://localhost:8080/newtrip', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
};

export { postTripData };