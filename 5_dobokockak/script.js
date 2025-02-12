const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const total = document.getElementById('total');

console.log(dice1, dice2, total);

dice1.addEventListener('click', () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    // const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    
    dice1.textContent = randomNumber;

    total.textContent = Number(dice1.textContent) + Number(dice2.textContent);
});

dice2.addEventListener('click', () => {
    const randomNumber = Math.ceil(Math.random() * 6);
    // const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);

    dice2.textContent = randomNumber;

    total.textContent = Number(dice1.textContent) + Number(dice2.textContent);
});