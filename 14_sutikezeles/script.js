// globális változók
const szam = document.getElementById('szam');
const minusz = document.getElementById('minusz');
const plusz = document.getElementById('plusz');
//console.log(szam, minusz, plusz);

document.addEventListener('DOMContentLoaded', () => {
    szam.textContent = getCookie('szam') ?? 6;
    // hosszabban:
    /*
    const szamSuti = getCookie('szam');
    console.log(szamSuti);
    if (szamSuti !== null) {
        szam.textContent = szamSuti;    
    } else {
        szam.textContent = '6';
    }
        */
});

minusz.addEventListener('click', () => {
    szam.textContent = parseInt(szam.textContent) - 1;
    setCookie('szam', szam.textContent, 2);
});

plusz.addEventListener('click', () => {
    szam.textContent = parseInt(szam.textContent) + 1;
    setCookie('szam', szam.textContent, 2);
});


// cookie létrehozása
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    console.log(expires);
    document.cookie = `${name}=${value};${expires};path=/`;
};

// cookie kinyerése
function getCookie(key) {
    const suti = document.cookie.split('; ').find((row) => row.startsWith(`${key}=`));
    console.log(suti);
    return suti ? suti.split('=')[1] : null;
}