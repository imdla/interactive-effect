// 변수 지정
const rowsPerPage = 10;
const rows = document.querySelectorAll('#my-table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount / rowsPerPage);
const numbers = document.querySelector('#numbers');

// 페이지네이션 생성
for(let i = 1; i <= pageCount; i++) {
    numbers.innerHTML += `<li><a href="#">${i}</a></li>`
}

const numberBtn = numbers.querySelectorAll('a');
console.log(numberBtn);

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