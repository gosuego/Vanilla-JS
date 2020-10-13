let pendingList = [];
let finishedList = [];

/*Pending list */
function paintPendingList(text) {
  const item = document.createElement("li");
  const checkBox = document.createElement("input");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const label = document.createElement("label");
  const listId =
    pendingList.length + (Math.floor(Math.random() * 123456789) + 1);
    //idㅇㅔ 랜덤으로 숫자를 부여하고 거기에 1을 더한다. 

  checkBox.setAttribute("type", "checkbox");
  label.setAttribute("for", `task-${listId}`);
  item.setAttribute("id", `${listId}`);
  item.setAttribute("class", `item`);
  delBtn.setAttribute("class", "delBtn");
  checkBox.id = `task-${listId}`;

  span.innerHTML = text;
  delBtn.innerHTML = "x";

  pending.appendChild(item);
  item.appendChild(checkBox);
  item.appendChild(label);
  item.appendChild(span);
  item.appendChild(delBtn);

  delBtn.addEventListener("click", deleteItem);
  label.addEventListener("click", moveItem);

  const pendingObj = {
    id: listId,
    text: text,
  };
  pendingList.push(pendingObj);
  savePendingItem();
}

/* Save Value */
function savePendingItem() {
  localStorage.setItem("PENDING", JSON.stringify(pendingList));
}

function saveFinishedItem() {
  localStorage.setItem("FINISHED", JSON.stringify(finishedList));
}

/* Delete Item */
function deleteItem(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;

  if (ul.className === "pending") {
    pending.removeChild(li);
    const updatedPending = pendingList.filter((list) => list.id !== +li.id);
    // update PENDING list
    pendingList = updatedPending;
    savePendingItem();
  } else {
    finished.removeChild(li);
    const updatedFinished = finishedList.filter((list) => list.id !== +li.id);
    // update FINISHED list
    finishedList = updatedFinished;
    saveFinishedItem();
  }
}

// Move items
function moveItem(event) {
  const checkedItem = event.target;
  const checkedList = checkedItem.parentNode;

  if (checkedList.parentNode.className === "pending") {
    pending.removeChild(checkedList);
    finished.appendChild(checkedList);

    const finishedTask = pendingList.filter(
      (list) => list.id === +checkedList.id
    );
    const updatePending = pendingList.filter(
      (list) => list.id !== +checkedList.id
    );
    // update PENDING ITEM
    pendingList = updatePending;
    savePendingItem();

    // update FINISHED ITEM
    finishedList.push(...finishedTask);
    saveFinishedItem();
  } else if (checkedList.parentNode.className === "finished") {
    finished.removeChild(checkedList);
    pending.appendChild(checkedList);

    const notFinished = finishedList.filter(
      (list) => list.id === +checkedList.id
    );
    const savedFinshed = finishedList.filter(
      (list) => list.id !== +checkedList.id
    );

    // update PENDING ITEM
    pendingList.push(...notFinished);
    savePendingItem();

    // update FINISHED ITEM
    finishedList = savedFinshed;
    saveFinishedItem();
  }
}