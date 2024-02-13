let slides = document.querySelector('.slides');
let slide = document.querySelectorAll('.slides li');
let currentIdx = 0;
let slideCount = slide.length;
let slideWith = 200;
let slideMargin = 30;
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

makeClone();

// 슬라이드 복사
function makeClone() {
    for (let i = 0; i < slideCount; i++) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for (let i = slideCount - 1; i >= 0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWith();
    setInitialPos();
    setTimeout(function() {
        slides.classList.add('animated');
    }, 100);
}

// slides 넓이 지정
function updateWith() {
    let currentSlides = document.querySelectorAll('.slides li');
    let newSlideCount = currentSlides.length;

    let newWith = (slideWith + slideMargin) * newSlideCount - slideMargin + 'px';
    slides.style.width = newWith;
}

// slide 처음 위치 지정
function setInitialPos() {
    let initialTranslateValue = -(slideWith + slideMargin) * slideCount;
    slides.style.transform = `translateX(${initialTranslateValue}px)`;
}

nextBtn.addEventListener('click', function() {
    moveSlide(currentIdx + 1);
});

prevBtn.addEventListener('click', function() {
    moveSlide(currentIdx - 1);
});

// 슬라이드 이동
function moveSlide(num) {
    slides.style.left = -num * (slideWith + slideMargin) + 'px';
    currentIdx = num;
    
    if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('animated');
        }, 600);
    }
}

// 자동 슬라이드 이동
let timer = undefined;

function autoSlide() {
    if (timer == undefined) {
        timer = setInterval(function(){
            moveSlide(currentIdx + 1);
        }, 3000);
    }
}

autoSlide();

function stopSlide(){
    clearInterval(timer);
    timer = undefined;
}

slides.addEventListener('mouseenter', function(){
    stopSlide();
});

slides.addEventListener('mouseleave', function(){
    autoSlide();
});