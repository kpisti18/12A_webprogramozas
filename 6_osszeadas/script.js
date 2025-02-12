const elso = document.getElementById('elso');
const masodik = document.getElementById('masodik');
const eredmeny = document.getElementById('eredmeny');
// const elsoMinusz = document.getElementById('elsoMinusz');
// const elsoPlusz = document.getElementById('elsoPlusz');
// const masodikMinusz = document.getElementById('masodikMinusz');
// const masodikPlusz = document.getElementById('masodikPlusz');

const gombok =
{
    elsoMinusz: 'elsoMinusz',
    elsoPlusz: 'elsoPlusz',
    masodikMinusz: 'masodikMinusz',
    masodikPlusz: 'masodikPlusz'
}


console.log(elso, elsoMinusz, elsoPlusz);
// 1. Old meg hogy a szám1 piros gombjára klikkelve
// csökkenjen a 'elso' értéke 1-el
elsoMinusz.addEventListener('click', () => {
    elso.textContent = parseInt(elso.textContent) - 1;
    eredmenySzamol();
});

// 2. Old meg hogy a szám1 zöld gombjára klikkelve
// növekedjen a 'elso' értéke 1-el
elsoPlusz.addEventListener('click', () => {
    elso.textContent = parseInt(elso.textContent) + 1;
    eredmenySzamol();
});

// 3. Old meg az előző kettő feladatot a szam2-re is
masodikMinusz.addEventListener('click', () => {
    masodik.textContent = parseInt(masodik.textContent) - 1;
    eredmenySzamol();
});

masodikPlusz.addEventListener('click', () => {
    masodik.textContent = parseInt(masodik.textContent) + 1;
    eredmenySzamol();
});

// 4. Old meg, hogy az eredményben lévő érték is 
// megváltozzon
function eredmenySzamol() {
    eredmeny.textContent = parseInt(elso.textContent) + parseInt(masodik.textContent);
}