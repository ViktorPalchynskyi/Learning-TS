"use strict";
const LOCAL_STORAGE_KEY = 'todos';
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.getElementById('todoform');
const list = document.getElementById('todolist');
const todos = readTodos();
todos.forEach((todo) => craeteTodo(todo));
function readTodos() {
    const todosJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    craeteTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    input.value = '';
};
function craeteTodo(todo) {
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener('submit', handleSubmit);
