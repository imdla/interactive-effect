let slideWrapper = document.querySelector('.slide_wrapper');
let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slides li');
let currentIdx = 0;
let slideCount = slide.length;
let slideWith = 200;
let slideMargin = 30;
let moveAmt = slideWith + slideMargin;
let maxSlides = 3;
let responsiveMargin = 20;
let newSlide;
let newSlideWidth;
let prevBtn = document.querySelector('.controls .prev');
let nextBtn = document.querySelector('.controls .next');

newSlideWidth = slideWith;


// 슬라이드 복사
for (let i = 0; i < maxSlides; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
}
for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add('clone');  
    slides.prepend(cloneSlide);
}


// 가로 배열하기
function slideLayout() {
    newSlide = document.querySelectorAll('.slides li');
    newSlide.forEach(function(item, index) {
        item.style.left = moveAmt * index + 'px';
    });
    slides.style.width = newSlide.length * moveAmt - slideMargin + 'px';
}
slideLayout();


// 중앙 배치하기
function setSlide(){
    let ulMoveAmt = -slideCount * moveAmt + 'px';
    slides.style.transform = `translateX(${ulMoveAmt})`;
    slides.classList.add('animated');
}
setSlide();


// 좌우 버튼으로 이동
nextBtn.addEventListener('click', function () {
    moveSlide(currentIdx + 1);
});

prevBtn.addEventListener('click', function () {
    moveSlide(currentIdx - 1);
});


// 슬라이드 이동
function moveSlide(num) {
    slides.style.left = -num * moveAmt + 'px';
    currentIdx = num;

    if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function () {
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function () {
            slides.classList.add('animated');
        }, 600);
    }
}


// 자동 슬라이드 이동
let timer = undefined;

function autoSlide() {
    if (timer == undefined) {
        timer = setInterval(function () {
            moveSlide(currentIdx + 1);
        }, 3000);
    }
}
autoSlide();

function stopSlide() {
    clearInterval(timer);
    timer = undefined;
}

slideWrapper.addEventListener('mouseenter', function () {
    stopSlide();
});

slideWrapper.addEventListener('mouseleave', function () {
    autoSlide();
});

// 반응형 슬라이드
window.addEventListener('resize', function(){
    let currentWith = document.querySelector('body').offsetWidth;

    if(currentWith < 700){

        let slidesWidth = slideWrapper.offsetWidth;
        newSlideWidth = (slidesWidth - (responsiveMargin * maxSlides - 1)) / 3;
        console.log(newSlideWidth);
        moveAmt = responsiveMargin + newSlideWidth;

        newSlide.forEach(function (item, index) {
            item.style.width = newSlideWidth + 'px';
            item.style.marginRight = responsiveMargin + 'px';
        });
    } else {
        newSlide.forEach(function (item, index) {
            item.style.width = slideWith + 'px';
            item.style.marginRight = slideMargin + 'px';
        });
        moveAmt = slideWith + slideMargin;
    }
    if (currentWith <= 500) {
        newSlideWidth = slideWrapper.offsetWidth;
        moveAmt = newSlideWidth;

        newSlide.forEach(function(item, index){
            item.style.width = newSlideWidth + 'px';
            item.style.marginRight = 0 + 'px';
        });
    }
    slideLayout();
    setSlide();
});