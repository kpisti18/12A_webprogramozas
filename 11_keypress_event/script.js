const demo = document.getElementById('demo');
const area = document.getElementById('area');

area.addEventListener('keyup', () => {
    let csillag = '';

    for (let i = 0; i < area.value.length; i++) {
        csillag += '*';
    }

    demo.textContent = csillag;

    // vagy egyszerűbben repeat metódussal:
    //demo.textContent = '*'.repeat(area.value.length);
});