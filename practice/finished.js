/* Paint Finished List */
function paintFinished(text) {
    const item = document.createElement("li");
    const checkBox = document.createElement("input");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const label = document.createElement("label");
    const listId =
      pendingList.length + (Math.floor(Math.random() * 123456789) + 1);
  
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("checked", true);
    label.setAttribute("for", `task-${listId}`);
    item.setAttribute("id", `${listId}`);
    item.setAttribute("class", `item`);
    delBtn.setAttribute("class", `delBtn`);
  
    checkBox.id = `task-${listId}`;
  
    span.innerHTML = text;
    delBtn.innerHTML = "x";
  
    finished.appendChild(item);
    item.appendChild(checkBox);
    item.appendChild(label);
    item.appendChild(span);
    item.appendChild(delBtn);
  
    delBtn.addEventListener("click", deleteItem);
    checkBox.addEventListener("click", moveItem);
  
    const finishedObj = {
      id: listId,
      text: text,
    };
    finishedList.push(finishedObj);
  
    saveFinishedItem();
  }