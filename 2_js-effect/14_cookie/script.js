const myPopup = document.querySelector('.popup');
const checkbox = document.querySelector('#popup');
const popupClose = document.querySelector('.close');

// 쿠키 생성
function setCookie(name, value, day) {
    let date = new Date();
    date.setDate(date.getDate() + day);

    let myCookie = '';
    myCookie += name + '=' + value + ';';
    myCookie += 'Expires=' + date.toUTCString();

    document.cookie = myCookie;
}

// 쿠키 삭제
function delCookie(name) {
    let date = new Date();
    date.setDate(date.getDate() - 1);

    let myCookie = '';
    myCookie += `${name}=${value};`;
    myCookie += 'Expires=' + date.toUTCString();

    document.cookie = myCookie;
}

// 쿠키 확인
function checkCookie(name) {
    let cookies = document.cookie.split(';');
    let visited = false; // 방문 여부

    for(let i in cookies) {
        if (cookies[i].indexOf(name) > - 1) {
            visited = true;
            console.log(visited);
        }
    }

    if (visited) {
        // 재방문
        myPopup.style.display = 'none';
    } else {
        // 신규 방문
        myPopup.style.display = 'block';
    }
}
checkCookie('ABCcorp');

popupClose.addEventListener('click', function() {
    if(checkbox.checked) {
        // 팝업 다시 안봄
        setCookie('ABCcorp', 'Main', 3);
        myPopup.style.display = 'none';
    } else {
        // 팝업 다시 봄
        myPopup.style.display = 'none';
        delCookie('ABCcorp');
    }
});