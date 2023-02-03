const counterValue = document.querySelector("#value");
const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');

const counter = {
    value: 0,
    plusValue() {
        this.value += 1;
    },
     minusValue() {
        this.value -= 1;
    },
};



addBtn.addEventListener('click', function () {
    counter.plusValue();
    counterValue.textContent = counter.value;
});
removeBtn.addEventListener('click', function () {
    counter.minusValue();
    counterValue.textContent = counter.value;
});