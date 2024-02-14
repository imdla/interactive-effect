const imageList = document.querySelector('.image-list');
const btns = document.querySelectorAll('.view-options button');
const imageListItems = document.querySelectorAll('.image-list li');
const active = 'active';
const listView = 'list-view';
const gridView = 'grid-view'
const dNone = 'd-none';

// 버튼 활성화
for(const btn of btns) {
    btn.addEventListener('click', function(){
        const parent = this.parentElement;
        document.querySelector('.view-options .active').classList.remove(active);
        parent.classList.add(active);

        if(parent.classList.contains('show-list')){
            parent.previousElementSibling.previousElementSibling.classList.add(dNone);
            imageList.classList.remove(gridView);
            imageList.classList.add(listView);
        }else {
            parent.previousElementSibling.classList.remove(dNone);
            imageList.classList.remove(listView);
            imageList.classList.add(gridView);
        }
    });
}

// 리스트 넓이 조절
const rangeInput = document.querySelector('input[type="range"]');

rangeInput.addEventListener('input', function(){
    document.documentElement.style.setProperty('--minRangeValue', `${this.value}px`);
});

// 검색키워드 필터
const captions = document.querySelectorAll('.image-list figcaption p:first-child');
const myArray = [];
let counter = 1;

for(const caption of captions) {
    myArray.push({
        id:counter++,
        text:caption.textContent
    });
}

const searchInput = document.querySelector('input[type="search"]');
const photosCounter = document.querySelector('.toolbar .counter span');

searchInput.addEventListener('keyup', keyupHandler);

function keyupHandler(){
    for(const item of imageListItems){
        item.classList.add(dNone);
    }
    const keywords = this.value;

    const filteredArray = myArray.filter(el => el.text.toLowerCase().includes(keywords.toLowerCase()));
    if(filteredArray.length > 0){
        for(const el of filteredArray){
            document.querySelector(`.image-list li:nth-child(${el.id})`).classList.remove(dNone);

        }
    }
    photosCounter.textContent = filteredArray.length;
}