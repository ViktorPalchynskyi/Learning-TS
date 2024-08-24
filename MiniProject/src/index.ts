const btn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById(
    'todoinput'
) as HTMLInputElement;

btn.addEventListener('click', () => {
    alert((<HTMLInputElement>input).value);
    (<HTMLInputElement>input).value = '';
});

const mystery: unknown = 'Hello world!!!';

const numChars = (mystery as string).length;
