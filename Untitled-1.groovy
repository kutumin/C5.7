


/* function useRequest(url, callback) {
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

const demo =  document.getElementById("demo");
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
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}

const btn = document.querySelector('.jrandom');

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
  });
  
  // console.log('end cards', cards);
    
  demo.innerHTML = cards;
}


/*btn.addEventListener('click', () => {
}); */


/*
function myFunction() {
    var inpObj = document.getElementById('input-data');
    var inpObj1 = document.getElementById('input-limit');
    if (!inpObj.checkValidity() && !inpObj1.checkValidity()) {
       demo.innerHTML = inpObj.validationMessage; }
    else{
     var url = "https://picsum.photos/" + inpObj.value + '/' + inpObj1.value;
     console.log(url);


     });
    }
}




const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  // Делаем запрос за данными
  fetch('https://picsum.photos/v2/list/?limit=5')
    .then((response) => {
      // Объект ответа на запрос
      console.log('response', response);
      // Превращаем объект в JSON. Мы не можем его сразу прочитать,
      // надо отдать в следующий then
      const result = response.json();
      console.log('result', result);
      return result;
    })
    .then((data) => {
      // Объект результата в формате JSON
      console.log(data);
    })
    .catch(() => { console.log('error') });
});


