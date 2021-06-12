let length = 2;
let values = ['head', 'tail'];
let tossResults = [];
const toss = document.getElementsByClassName('toss')[0];

toss.addEventListener('click', () => {
    tossResults = [];
    for(let i = 0; i < 5000; i++) {
        const index = Math.floor(Math.random() * length);
        tossResults.push(values[index]);
    }
    const index = Math.floor(Math.random() * 5000);
    // alert(tossResults[index]); 
    document.getElementById('result').innerText = tossResults[index];
})