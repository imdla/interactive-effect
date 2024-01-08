// tabs

var tabLinks = document.querySelectorAll(".tablinks"); // 탭 메뉴 설정 
var tabContent = document.querySelectorAll(".tabcontent"); // 탭 콘텐츠 설정

tabLinks.forEach(function(el) { // 탭 메뉴 각각 클릭할 때 openTabs 함수 실행
    el.addEventListener("click", openTabs);
});

function openTabs(el) { // openTabs function
    var btnTarget = el.currentTarget; // 현재 tabLinks 타겟 설정
    var country = btnTarget.dataset.country; // 현재 tabLinks의 country 설정

    tabContent.forEach(function(el) { // 탭 콘텐츠 각각 active 비활성
        el.classList.remove("active");
    });

    tabLinks.forEach(function(el) { // 탭 링크 각각 active 비활성
        el.classList.remove("active");
    });

    document.querySelector("#" + country).classList.add("active"); // 현재 wrapper_tabcontent의 해당 div를 active 활성

    btnTarget.classList.add("active"); // 현재 tabLinks를 active 활성
}