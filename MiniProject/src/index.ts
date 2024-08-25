interface Todo {
    text: string;
    completed: boolean;
}

const LOCAL_STORAGE_KEY = 'todos';

const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById(
    'todoinput'
) as HTMLInputElement;
const form = document.getElementById('todoform') as HTMLFormElement;
const list = document.getElementById('todolist') as HTMLUListElement;

const todos: Todo[] = readTodos();
todos.forEach((todo) => craeteTodo(todo));

function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (todosJSON === null) return [];

    return JSON.parse(todosJSON);
}

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    craeteTodo(newTodo);
    todos.push(newTodo);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));

    input.value = '';
};

function craeteTodo(todo: Todo): void {
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}

form.addEventListener('submit', handleSubmit);
