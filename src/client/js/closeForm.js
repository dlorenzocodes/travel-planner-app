const overlay = document.querySelector('.overlay');
const form = document.querySelector('.modal-form');

function closeForm() {
    const btns = document.querySelectorAll('#close-form');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(form.classList.contains('active')){
                form.classList.remove('active');
                overlay.classList.remove('active');
            } else{
                return;
            }
        })
    })
};


export { closeForm };