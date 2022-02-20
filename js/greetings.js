const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 관습적으로 string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // 브라우저의 기본 동작을 막아줌
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // input의 내용을 가져오기 위해서는 value속성을 찾아야함
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);    
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    toDoLoad.classList.remove(HIDDEN_CLASSNAME);
}

// 유저 정보 유무에 따라 form을 보여주거나 h1을 보여줘야함
// 유저 정보 유 >> h1
// 유저 정보 무 >> form
const savedUsername = localStorage.getItem(USERNAME_KEY);

const toDoLoad = document.querySelector("#todo-list");
const logOutBtn = document.querySelector(".logout");

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    toDoLoad.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);    
} else {
    // show the greetings
    // loginForm.classList.add(HIDDEN_CLASSNAME); ??
    paintGreetings(savedUsername);
}

// 로그아웃
function logout() {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}

console.log(toDoLoad);
logOutBtn.addEventListener("click", logout);



































