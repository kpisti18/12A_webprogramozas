let uzenetek = [];

window.addEventListener('load', async () => {
    const uzik = await fetch('uzik.csv');
    //console.log(uzik, typeof (uzik));
    const uzikText = (await uzik.text()).split('\n');
    for (let i = 0; i < uzikText.length; i++) {
        uzenetek.push(uzikText[i]);
    }
});


// Random üzenet megjelenítése
document.getElementById('messageButton').addEventListener('click', function () {
    if (uzenetek.length > 0) {
        const randomIndex = Math.floor(Math.random() * uzenetek.length);
        document.getElementById('messageBox').textContent = uzenetek[randomIndex];
    } else {
        document.getElementById('messageBox').textContent = "Nem található üzenet.";
    }
});