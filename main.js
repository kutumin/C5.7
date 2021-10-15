const img = document.getElementById("img");

const url = 'https://picsum.photos/103/102'

const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    fetch('https://picsum.photos/103/102')
    .then((response) => {
        console.log('response', response);
        const result = response.json();
        console.log('result', result);
        return result;
        img.src=result.url;
    })
    .then((data) => {
        console.log(data);
    })
    .catch(() => { console.log('error') });
});