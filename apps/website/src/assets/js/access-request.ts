const helperClassName= 'main__footer--request-access__helper-message';
const formClassName = 'access-request--form';
const emailId = 'input__email';

const submitForm = (evt: Event) => {
    evt.preventDefault();
    const { validity: { valid, valueMissing, typeMismatch } } = email;
    let errorMessage = ''

    if (!valid) {
        if (valueMissing) {
            errorMessage = 'Oops! Please add your email';
        } else if (typeMismatch) {
            errorMessage = 'Oops! Please check your email';
        }
    }
    
    message.innerText = errorMessage;

    if (errorMessage.length > 0) message.classList.remove('hidden');
    else message.classList.add('hidden');
};

const form: HTMLFormElement = document.querySelector(`.${formClassName}`);
const email: HTMLInputElement = document.querySelector(`#${emailId}`);
const message: HTMLElement = document.querySelector(`.${helperClassName}`);
form.addEventListener('submit', submitForm);
