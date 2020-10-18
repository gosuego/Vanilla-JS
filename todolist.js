const toDoform = document.querySelector(".js-toDoForm"),
toDoInput = toDoform.querySelector("input"),
pendingList = document.querySelector(".pending"),
finishedList =document.querySelector(".finished");

const PENDINGS_LS = "pendings",
 FINISHED_LS = "finished";

let pendings = [],
finished=[];

function deletePending(event) {
  const btn = event.target
  const li = btn.parentNode
  pendingList.removeChild(li)
  const cleanToDos = pendings.filter(function (pending) {
    return pending.id !== parseInt(li.id)
  });
  pendings = cleanToDos
  savePendings()
}
function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);
    const cleanToDos = finished.filter(function (finished) {
      return finished.id !== parseInt(li.id);
    });
    finished = cleanToDos;
    saveFinished();
  }

function savePendings() {
  localStorage.setItem(PENDINGS_LS, JSON.stringify(pendings));
}
function saveFinished() {
    localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
  }

  function pendingToFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    deletePending(event);
    paintFinished(li.querySelector("span").innerText);
  }
  
  function finishToPending(event) {
    const btn = event.target;
    const li = btn.parentNode;
    deleteFinished(event);
    paintPending(li.querySelector("span").innerText);
  }
  
function paintPending(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendings.length + (Math.floor(Math.random()*123456789)+1);
  delBtn.innerText = "delete❤️";
  delBtn.addEventListener("click", deletePending);
  finBtn.innerText = "complete🌈";
  finBtn.addEventListener("click", pendingToFinished);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
  
  li.id = newId;
  pendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  pendings.push(toDoObj)
  savePendings()
}
function paintFinished(text){
    const li =document.createElement("li");
    const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = pendings.length + (Math.floor(Math.random()*123456789)+1);
  delBtn.innerText = "delete❤️";
  delBtn.addEventListener("click", deleteFinished);
  finBtn.innerText = "prepare🌈";
  finBtn.addEventListener("click", finishToPending);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);
 
  li.id = newId;
 finishedList.appendChild(li);
 const toDoObj = {
    text: text,
    id: newId
  };
  finished.push(toDoObj);
  saveFinished();
}


function handleSubmit(event) {
  event.preventDefault()
  const currentValue = toDoInput.value
  paintPending(currentValue)
  toDoInput.value = ""
}

function loadToDos() {
  const loadedPendings = localStorage.getItem(PENDINGS_LS)
  if (loadedPendings !== null) {
    const parsedToDos = JSON.parse(loadedPendings)
    parsedToDos.forEach(function (toDo) {
      paintPending(toDo.text)
    });
  }
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if (loadedFinished !== null) {
    const parsedFinished = JSON.parse(loadedFinished);
    parsedFinished.forEach(function (toDo) {
      paintFinished(toDo.text);
    });
  }
}

function init() {
  loadToDos()
  toDoform.addEventListener("submit", handleSubmit)
}

init()