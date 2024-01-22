const form = document.querySelector('.top-banner form');
const input = form.querySelector('input');
const msg = document.querySelector('.top-banner .msg');
const list = document.querySelector('.ajax-section .cities');
const apiKey = 'e4ce712b3e1e71d91c24d7dc360c0e89';

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const {main,name,sys,weather} = data;
            const icon = `https://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png`;
            console.log(icon);
            const li = document.createElement('li');
            li.classList.add('city');
            const markup = `
                <h2 class="city-name" data-name="${name}, ${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <span class="city-temp">${main.temp}<sup>°C</sup></span>
                <figure>
                    <img class="city-icon" src="${icon}" alt="${weather[0]['main']}" />
                    <figcaption>${weather[0]['description']}</figcaption>
                </figure>
            `;
            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            msg.textContent = '정확한 도시 이름을 입력하세요';
        });
});