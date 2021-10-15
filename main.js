const img = document.getElementById("img");

const url = 'https://picsum.photos/103/102'

const btn = document.querySelector('.button');

btn.addEventListener('click', async() => {
    let response = await fetch(url);
    let blob = await response.blob();
    let img = document.createElement('img');
    document.body.append(img);
    img.src = URL.createObjectURL(blob);
  });