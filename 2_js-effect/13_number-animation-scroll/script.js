let progressWrap = document.querySelector('.progress_wrap'),
    triggerPoint = progressWrap.offsetTop - 400,
    progressBar = progressWrap.querySelector('.bar'),
    progressRate = progressWrap.querySelector('span'),
    initialRate = 0,
    // numAnimation = null,
    excuted = false, // 실행 여부
    targetRate = parseInt(progressWrap.getAttribute('data-num'));

window.addEventListener('scroll', function() {
    let scrollAmt = this.pageYOffset;

    if (scrollAmt > triggerPoint) {
        if (!excuted) {
            startNumberAnimation();
            excuted = true;
        }
    }
});

function startNumberAnimation() {
    //if (numAnimation == null) {
        let numAnimation = setInterval(function(){
            initialRate++;
            if(initialRate == targetRate) {
                clearInterval(numAnimation);
            }
            progressBar.style.width = `${initialRate}%`;
            progressRate.innerText = `${initialRate}%`;
        }, 20);
    //}
}