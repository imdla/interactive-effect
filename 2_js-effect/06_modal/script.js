const openModalBtn = document.querySelectorAll('[data-open]');
const isVisible = 'is-visible';

for (let btn of openModalBtn) {
    btn.addEventListener('click', function() {
        const target = this.dataset.open;
        document.getElementById(target).classList.add(isVisible);
    });
}

const closeModalBtn = document.querySelectorAll('.close-modal');
for (let btn of closeModalBtn) {
    btn.addEventListener('click', function(){
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
}

document.addEventListener('click', e => {
    // if (e.target == document.querySelector('modal.is-visible')) {
    //     document.querySelector('.modal.is-visible').classList.remove(isVisible);
    // }
    if (e.target.classList.contains('is-visible')) {
        e.target.classList.remove(isVisible);
    }
});

document.addEventListener('keyup', e => {
    if(e.key == 'Escape' && document.querySelector('.modal.is-visible')) {
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
})