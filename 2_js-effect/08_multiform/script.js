// 변수 지정
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const submitButton = document.querySelector('#submit');
const tabTargets = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tabpanel');
const isEmpty = (str) => !str.trim().length;
let currentStep = 0;

// next 버튼
nextButton.addEventListener('click', () => {
    tabTargets[currentStep].classList.remove('active');
    tabPanels[currentStep].classList.add('hidden');

    tabTargets[currentStep + 1].classList.add('active');
    tabPanels[currentStep + 1].classList.remove('hidden');
    currentStep++;

    vaildateEntry();
    updateStatusDisplay();
});

// prev 버튼
prevButton.addEventListener('click', () => {
    tabTargets[currentStep].classList.remove('active');
    tabPanels[currentStep].classList.add('hidden');

    tabTargets[currentStep - 1].classList.add('active');
    tabPanels[currentStep - 1].classList.remove('hidden');
    currentStep--;

    nextButton.removeAttribute('disabled');
    updateStatusDisplay();
});

// 스텝 업데이트 함수
function updateStatusDisplay() {
    // 마지막 스텝일 때
    if (currentStep === tabTargets.length - 1) {
        nextButton.classList.add('hidden');
        prevButton.classList.remove('hidden');
        submitButton.classList.remove('hidden');
    } else if (currentStep === 0) { // 첫 스텝일 때
        nextButton.classList.remove('hidden');
        prevButton.classList.add('hidden');
        submitButton.classList.add('hidden');
    } else { // 중간 스텝일 때
        nextButton.classList.remove('hidden');
        prevButton.classList.remove('hidden');
        submitButton.classList.add('hidden');
    }
}

// 입력 상태 따라 버튼 업데이트
function vaildateEntry() {
    let input = tabPanels[currentStep].querySelector('.form-input');
    
    nextButton.setAttribute('disabled', true);
    submitButton.setAttribute('disabled', true);

    setButtonPermissions(input);

    input.addEventListener('input', () => setButtonPermissions(input));
    input.addEventListener('blur', () => setButtonPermissions(input));
}

// 입력 상태 확인
function setButtonPermissions(input) {
    if (isEmpty(input.value)) {
        nextButton.setAttribute('disabled', true);
        submitButton.setAttribute('disabled', true);
    } else {
        nextButton.removeAttribute('disabled');
        submitButton.removeAttribute('disabled');
    }
}

// 로드하자마자 버튼 업데이트
vaildateEntry();