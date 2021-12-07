export function footer() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `
        <p>Icons by <a href="https://www.flaticon.com/">Flaticon</a></p>
        <p>Illustrations by <a href="https://undraw.co/">unDraw.co</a></p>
    `;
    return footer;
}