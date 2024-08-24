"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.getElementById('todoform');
const list = document.getElementById('todolist');
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(newTodoText);
    newLI.append(checkbox);
    list.append(newLI);
    input.value = '';
};
form.addEventListener('submit', handleSubmit);
