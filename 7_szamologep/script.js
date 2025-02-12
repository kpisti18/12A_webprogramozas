const elsoMinusz = document.getElementById('elsoMinusz');
const elsoPlusz = document.getElementById('elsoPlusz');
const elso = document.getElementById('elso');

const masodikMinusz = document.getElementById('masodikMinusz');
const masodikPlusz = document.getElementById('masodikPlusz');
const masodik = document.getElementById('masodik');

const muveletek = document.getElementsByClassName('muvelet');
console.log(muveletek);
const eredmeny = document.getElementById('eredmeny');

elsoMinusz.addEventListener('click', () => {
    elso.textContent = parseInt(elso.textContent) - 1;
});

elsoPlusz.addEventListener('click', () => {
    elso.textContent = parseInt(elso.textContent) + 1;
});

masodikMinusz.addEventListener('click', () => {
    masodik.textContent = parseInt(masodik.textContent) - 1;
});

masodikPlusz.addEventListener('click', () => {
    masodik.textContent = parseInt(masodik.textContent) + 1;
});

for (let i = 0; i < muveletek.length; i++) {
    muveletek[i].addEventListener('click', () => {
        if (muveletek[i].textContent === '+') {
            eredmeny.textContent = parseInt(elso.textContent) + parseInt(masodik.textContent);
        }
        if (muveletek[i].textContent === '-') {
            eredmeny.textContent = parseInt(elso.textContent) - parseInt(masodik.textContent);
        }
        if (muveletek[i].textContent === '×') {
            eredmeny.textContent = parseInt(elso.textContent) * parseInt(masodik.textContent);
        }
        if (muveletek[i].textContent === '÷') {
            eredmeny.textContent = parseInt(elso.textContent) / parseInt(masodik.textContent);
        }
    });
}