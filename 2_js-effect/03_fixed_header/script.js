const body = document.body;
const className = 'sticky';

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
        body.classList.add(className);
    } else {
        body.classList.remove(className);
    }
});