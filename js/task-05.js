const onInput = document.querySelector('#name-input');
const offInput = document.querySelector('#name-output');

const heandlerListener = (event) => {
    offInput.textContent = event.currentTarget.value || 'Anonymous'
    console.log(event);
}
onInput.addEventListener('input', heandlerListener)
