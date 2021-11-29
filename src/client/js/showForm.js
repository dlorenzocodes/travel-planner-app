
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.modal-form');

const showForm = () => {
    setTimeout(() => {
        const icons = document.querySelectorAll('.add-icon');
        
        icons.forEach(icon => {
            icon.addEventListener('click', () => {
                overlay.classList.add('active');
                form.classList.add('active');
            })
        })
    }, 1000);
}

export { showForm };