const decreaseBtn = document.getElementById('decreaseBtn');
const incraseBtn = document.getElementById('incraseBtn');
const counter = document.getElementById('counter');

console.log(decreaseBtn, incraseBtn, counter);

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent);
    console.log(currentValue);
    
    counter.textContent = currentValue-1;
});

incraseBtn.addEventListener('click', () => {
    let currentValue = parseInt(counter.textContent);

    counter.textContent = currentValue+1;
});