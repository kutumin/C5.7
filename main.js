const img = document.getElementById("img");
const btn = document.querySelector('.button');

btn.addEventListener('click', async() => {
    var inpObj = document.getElementById('input-data');
    var inpObj1 = document.getElementById('input-limit');
    if (!inpObj.checkValidity()) {
        demo.innerHTML = 'Неправильно значение страницы \r' + inpObj.validationMessage; }
    else if  (!inpObj1.checkValidity()) {
        demo.innerHTML = 'Неправильно значение лимита \r' + inpObj1.validationMessage; }
    else{
      var url = "https://picsum.photos/" + inpObj.value + '/' + inpObj1.value;
      console.log(url);
      let response = await fetch(url);
      let blob = await response.blob();
      let img = document.createElement('img');
      document.body.append(img);
      img.src = URL.createObjectURL(blob);}
  });