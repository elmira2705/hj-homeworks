'use strict';

const doneList = document.querySelector('.done'),
    undoneList = document.querySelector('.undone');

function updateList(event) {
    const currentTask = event.target.parentElement;
    if (event.target.checked) {
        doneList.appendChild(currentTask);
    } else {
        undoneList.appendChild(currentTask);
    }
}

const tasks = document.querySelectorAll('input');

Array.from(tasks).forEach(item => item.addEventListener('click', updateList));
