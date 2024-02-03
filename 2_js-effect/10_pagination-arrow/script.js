// 변수 지정
const rowsPerPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector('#numbers');
// 변수 추가
const prevPageBtn = document.querySelector('.pagination .fa-arrow-left');
const nextPageBtn = document.querySelector('.pagination .fa-arrow-right');
let pageActiveIdx = 0; // 현재 페이지그룹 번호
let currentPageNum = 0; // 현재 페이지네이션 번호
let maxPageNum = 3; // 페이지 그룹 최대 개수

// 페이지네이션 생성
for(let i = 1; i <= pageCount; i++) {
    numbers.innerHTML += `<li><a href="#">${i}</a></li>`
}

const numberBtn = numbers.querySelectorAll('a');
console.log(numberBtn);

// 페이지네이션 번호 감추기
for (nb of numberBtn) {
    nb.style.display = 'none';
}

numberBtn.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        // 테이블 출력 함수
        displayRow(idx);
    });
});

function displayRow(idx) {
    let start = idx * rowsPerPage;
    let end = start + rowsPerPage;
    let rowsArray = [...rows];

    for (let ra of rowsArray) {
        ra.style.display = 'none';
    }

    let newRows = rowsArray.slice(start, end);
    for (let nr of newRows) {
        nr.style.display = '';
    }

    // 활성화 버튼 표시
    for (let nb of numberBtn) {
        nb.classList.remove('active');
    }
    numberBtn[idx].classList.add('active');

} // displayRow

displayRow(0);

// 페이지네이션 그룹 표시 함수
function displayPage(num) {
    // 페이지네이션 번호 감추기
    for (nb of numberBtn) {
        nb.style.display = 'none';
    }
    let totalPageCount = Math.ceil(pageCount / maxPageNum);

    let pageArr = [...numberBtn];
    let start = num * maxPageNum;
    let end = start + maxPageNum;
    let pageList = pageArr.slice(start, end);

    for (let item of pageList) {
        item.style.display = 'block';
    }
    if (pageActiveIdx == 0) {
        prevPageBtn.style.display = 'none';
    } else {
        prevPageBtn.style.display = 'block';
    }
    if (pageActiveIdx == totalPageCount - 1) {
        nextPageBtn.style.display = 'none';
    } else {
        nextPageBtn.style.display = 'block';
    }
}

displayPage(0);

nextPageBtn.addEventListener('click', () => {
    let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
    displayRow(nextPageNum);
    ++pageActiveIdx;
    displayPage(pageActiveIdx);
});

prevPageBtn.addEventListener('click', () => {
    let prevPageNum = pageActiveIdx * maxPageNum - maxPageNum;
    displayRow(prevPageNum);
    --pageActiveIdx;
    displayPage(pageActiveIdx);
});