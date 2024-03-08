const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const listCont = document.querySelector(".list-container");

const getLS = JSON.parse(localStorage.getItem('todo'));
if(getLS){
  getLS.forEach(li =>{
    addTodo(li);
  })
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(param) {
  let todo = input.value;

  if(param){
     todo = param.text;
  }

  if (todo) {
    const el = document.createElement("li");
    if(param && param.completed){
      el.classList.add('completed');
    }    
    el.innerText = todo;

    el.addEventListener("click", () => {
      el.classList.toggle("completed");   
      updateLS();
    });

    el.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      el.remove();
      updateLS()
    });
    listCont.appendChild(el);
    input.value = "";
  updateLS();
  }
}

function updateLS() {
  const todoEls = document.querySelectorAll("li");
  const todoArr = [];
  todoEls.forEach((todo) => {
    todoArr.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed")
    });
  });

  localStorage.setItem('todo', JSON.stringify(todoArr));
}
