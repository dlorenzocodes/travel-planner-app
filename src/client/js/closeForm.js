const overlay = document.querySelector('.overlay');
const form = document.querySelector('.modal-form');

function closeForm() {
    const cancelbtn = document.querySelector('#cancel');
    cancelbtn.addEventListener('click', () => {
        if(form.classList.contains('active')){
            form.classList.remove('active');
            overlay.classList.remove('active');
        } else{
            return;
        }
    })
};


export { closeForm };