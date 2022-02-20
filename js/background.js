const images = [
    "01.메리다.jpg",
    "02. 메리다.jpg",
    "03. 인사이드아웃.jpg",
    "04. 소울.jpg",
    "05. 업.jpg",
    "06. 디즈니랜드.jpg",
    "07. 알라딘.jpg",
    "08. 디즈니랜드2.jpg",
    "09. 신데렐라1.jpg",
    "10. 신데렐라2.jpg",
    "11. 신데렐라3.jpg",
    "12. 미녀와 야수1.jpg",
    "13. 미녀와 야수2.jpg",
    "14. 라이온킹.jpg",
    "15. 라이온킹2.jpg",
    "16. 겨울왕국.jpg",
    "17. 겨울왕국2.jpg",
    "18. 미키마우스.jpg",
    "19. 디즈니공주들.jpg",
    "20. 백설공주.jpg",
    "21. 백설공주2.jpg",
    "22. 백설공주3.jpg",
    "23. 백설공주3.png",
    "24. 인어공주.jpg",
    "25. 인어공주2.jpg",
    "26. 니모를 찾아서.jpg",
    "27. 라푼젤.jpg",
    "28. 라푼젤2.jpg",
    "29. 라푼젤3.jpg",
    "30. 라푼젤4.jpg",
    "31. 인어공주3.jpg",
    "32. 이상한 나라의 앨리스.jpg",
    "33. 온워드.jpg",
    "34. 인사이드아웃2.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// img요소 생성
const bgImage = document.createElement("img");
bgImage.className = "bg-image";
bgImage.src = `img/${chosenImage}`

// 생성한 요소를 body내부에 추가
document.body.appendChild(bgImage);

// 특정 배경에서 글자색 바꾸기 
const blackQuote = document.getElementById("quote");
const blackWeather = document.getElementById("weather");

if(chosenImage === images[17] || chosenImage === images[16]) {
    blackQuote.classList.toggle("font-color");
} else if(chosenImage === images[2]) {
    blackWeather.classList.toggle("font-color");
}