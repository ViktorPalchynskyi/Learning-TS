interface Todo {
    text: string;
    completed: boolean;
}

const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById(
    'todoinput'
) as HTMLInputElement;
const form = document.getElementById('todoform') as HTMLFormElement;
const list = document.getElementById('todolist') as HTMLUListElement;

const todos: Todo[] = [];

const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    craeteTodo(newTodo);

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
