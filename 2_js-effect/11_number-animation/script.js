let progressWrap = document.querySelector('.progress_wrap'),
    progressBar = progressWrap.querySelector('.bar'),
    progressRate = progressWrap.querySelector('span'),
    initialRate = 0,
    targetRate = progressWrap.getAttribute('data-num');

let numAnimation = setInterval(function(){
    initialRate++;
    if(initialRate == targetRate) {
        clearInterval(numAnimation);
    }
    progressBar.style.width = `${initialRate}%`;
    progressRate.innerText = `${initialRate}%`;
}, 20);