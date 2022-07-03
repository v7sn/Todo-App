const tasks = document.getElementById("tasks");
const createInput = document.getElementById("task-input");
const removeAll = document.getElementById("remove-all-items");

createInput.onkeypress = (e) => {

    if (e.keyCode === 13) {
       
        tasks.innerHTML += `
        <li id="task">
        <p id="name">${createInput.value}</p>
        <div id="options">
        <button id="edit">edit</button>
        <button id="delete">delete</button>
        </div>
        </li>
        `
        createInput.value = '';

    }
}

window.onclick = (e) => {

    if (e.target.id === 'delete') {
        e.target.parentElement.parentElement.remove();
    }


    if (e.target.id === 'edit') {
      let name = e.target.parentElement.parentElement.children['name'];
      name.style.color = '#2a9d8f';
      e.target.parentElement.parentElement.style.borderBottom = "1px solid #2a9d8f";
      e.target.parentElement.style.borderBottom = "none";
      name.setAttribute('contenteditable', 'true');
      name.focus();

      name.onkeypress = (e) => {
        if (e.keyCode === 13) {
            name.style.color = 'white';
            e.target.parentElement.style.borderBottom = "1px solid white";
            name.setAttribute('contenteditable', 'false');
        }
      }
    }

}

removeAll.onclick = () => {
    tasks.innerHTML = "";
}