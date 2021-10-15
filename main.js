const img = document.getElementById("img");
const demo = document.getElementById("demo");
const btn = document.querySelector('.button');
const previousimage = localStorage.getItem('previousimage');

document.addEventListener('DOMContentLoaded', () =>{
    var url = localStorage.getItem('previousimage');
        console.log(url);
        useRequest(url,displayResult);
    });

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };

function displayResult(apiData) {
    let cards = '';
    // console.log('start cards', cards);
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
      `;
      cards = cards + cardBlock;
      demo.innerHTML = cards
    });}

btn.addEventListener('click', () => {
    var inpObj = document.getElementById('input-data');
    var inpObj1 = document.getElementById('input-limit');
    if (!inpObj.checkValidity() && !inpObj1.checkValidity()) {
        demo.innerHTML = "Неправильно значение страницы и лимита <br><br>" + inpObj.validationMessage}
    else if (!inpObj.checkValidity()) {
        demo.innerHTML = 'Неправильно значение страницы <br><br> \r' + inpObj.validationMessage; }
    else if  (!inpObj1.checkValidity()) {
        demo.innerHTML = 'Неправильно значение лимита <br><br> \r' + inpObj1.validationMessage; }
    else{
      var url = "https://picsum.photos/v2/list?page=" + inpObj.value + '&limit=' + inpObj1.value;
      localStorage.setItem('previousimage', url);
      console.log(url);
      useRequest(url,displayResult);
    };
})