const kep = document.getElementById("kep");
const szoveg = document.getElementById("szoveg");

let isClosed = true;

const uzik = [
    "A BELSŐ SZÁMÍT",
    "A CSILLAGOK FIGYELNEK",
    "A DOLGOK JÓL HALADNAK",
    "VIDÁMSÁG! :)",
    "VIDD VÉGIG AZ ÖTLETEIDET!",
    "VIGYÉL EGY JÓ HÍRT!"
];

const animateCap = async (start, end, updateText) => {
    const step = start < end ? 1 : -1;
    for (let index = start; index !== end + step; index += step) {
        await new Promise(resolve => setTimeout(resolve, 13));
        kep.src = `images/bottlecap_${index}.png`;
    }
    if (updateText) {
        szoveg.textContent = isClosed ? uzik[Math.floor(Math.random() * uzik.length)] : '';
    }
};

window.addEventListener("click", async () => {
    if (isClosed) {
        await animateCap(0, 10, true);
        isClosed = false;
    } else {
        await animateCap(10, 0, true);
        isClosed = true;
    }
});
