interface LoadingButton {
    type: 'loading';
    message: string;
}

interface SubmitButton {
    type: 'submit';
    message: string;
}

interface CancelButton {
    type: 'cancel';
    message: string;
}

type Button = LoadingButton | SubmitButton | CancelButton;

function handlerButtonClick(button: Button): void {
    switch (button.type) {
        case 'loading':
            console.log(button.message);
            break;

        case 'submit':
            console.log(button.message);
            break;

        case 'cancel':
            console.log(button.message);
            break;
        default:
            const _exhaustiveCheck: never = button;

            return _exhaustiveCheck;
    }
}

handlerButtonClick({
    type: 'loading',
    message: 'Page is loading...',
});
