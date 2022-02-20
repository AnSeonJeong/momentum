const API_KEY = "31523363d51053a83b9cbf3375512937";

// input parameter로 position object를 줌
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`현재 '${lat} ${lon}'에 있습니다.`);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherAndCity = document.querySelector("#weather span:last-child");
        // const city = document.querySelector("#weather span:nth-child(2)");
        
        if(data.name === "Yach’on") {data.name = "Gwangju"}
        if(data.sys.country === "KR") {
            const flagIcon = document.createElement("img");
            flagIcon.src = "img/icons/korea.png";
            const flag = document.querySelector("#weather span:first-child");
            flag.appendChild(flagIcon);
        }

            weatherAndCity.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp} ℃`;
            // city.innerText = `${data.name} / `;
            // weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
    });
}
function onGeoError() {
    alert("위치를 알 수 없습니다.")
}

// 브라우저에서 위치 좌표를 줌
// geolocation.getCurrentPosition(success, error)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);