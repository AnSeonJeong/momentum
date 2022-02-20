const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "toDos";

function saveToDos() {
    // localStorage에서는 오직 텍스트만 저장할 수 있기 때문에
    // 배열을 저장할 수 없고, 텍스트로 저장된다
    // array값이 필요하기 때문에, JSON.stringify를 이용하여 array를 string으로 바꾸고
    // 이를 JSON.parse를 이용하여 array로 만들어주어야 한다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// toDo를 지운 후 saveToDos를 한 번 더 불러와야 함
function deleteToDo(event) {
    // 어떤 버튼이 클릭되었는지 알 수 없음
    // console.log(event);
    // console.log(event.target); >> button
    const li = event.target.parentElement;
    li.remove();
    // li.id → string, toDo.id → number
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.Text;
    const button = document.createElement("button");
    button.innerText = "❤";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    // toDos array 안에 텍스트 값을 push함
    // toDos.push(newToDo);
    // toDos array 안에 object값을 push함
    const newToDoObj = {
        Text : newToDo,
        // 각각의 li item을 구별하기 위해
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    // 각각의 item에 대해 function을 실행
    // 어떤 item을 사용하고 있는지 중요
    parseToDos.forEach(paintToDo);
}

