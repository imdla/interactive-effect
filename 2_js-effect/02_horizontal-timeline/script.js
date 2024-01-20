const target = document.querySelectorAll('.timeline li div');

window.addEventListener('load', init);

function init() {
    setEqualHeight(target);
}

function setEqualHeight(el) {
    let initHeight = 0;
    for (let i = 0; i < el.length; i++) {
        let tallestHgt = el[i].offsetHeight;
        if(initHeight < tallestHgt) {
            initHeight = tallestHgt;
        }
    }
    for (let item of target) {
        item.style.height = `${initHeight}px`;
    }
}