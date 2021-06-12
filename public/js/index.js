let length = 2;
let values = ['head', 'tail'];
let tossResults = [];
const toss = document.getElementsByClassName('toss')[0];
const resultDiv = document.getElementById('result');
toss.addEventListener('click', () => {
    tossResults = [];
    resultDiv.innerText = '';
    resultDiv.style.display = 'none';
    toss.style.display = 'none';
    setTimeout(() => {
        for (let i = 0; i < 5000; i++) {
            const index = Math.floor(Math.random() * length);
            tossResults.push(values[index]);
        }
        const index = Math.floor(Math.random() * 5000);
        // alert(tossResults[index]); 

        resultDiv.style.display = 'block';
        toss.style.display = 'block';
        resultDiv.innerText = tossResults[index];
    }, 150);

})