const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const total = document.getElementById('total');

console.log(dice1, dice2, total);

dice1.addEventListener('click', () => {
    randomNumber(dice1);
});

dice2.addEventListener('click', () => {
    randomNumber(dice2);
});

function randomNumber(dice) {
    const randomNumber = Math.ceil(Math.random() * 6);
    dice.textContent = randomNumber;
    calculateTotal();
}

function calculateTotal() {
    total.textContent = Number(dice1.textContent) + Number(dice2.textContent);
}