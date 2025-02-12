const screen = document.getElementById('screen');
const dice = document.getElementById('dice');

// console.log(screen);
// console.log(dice);

screen.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    //console.log(randomNumber);
    
    // dice.innerHTML = randomNumber;
    // dice.innerText = randomNumber;
    dice.textContent = randomNumber;
});