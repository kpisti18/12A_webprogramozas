const hello = document.getElementById('hello');
console.log(hello);

hello.addEventListener('click', function () {
    const vez = document.getElementById('vez').value;
    const ker = document.getElementById('ker').value;
    console.log(typeof (ker), ker);
    if (ker === '') {
        alert('A *-al jelölt mezőt ki kell tölteni!');
    } else {
        alert(`Szia ${vez} ${ker}. \nHogy vagy?`);
    }
});