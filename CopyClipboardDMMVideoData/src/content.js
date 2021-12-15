console.log("content.js開始");

let head = document.querySelector("h1");

var button = document.createElement("BUTTON");
button.name = "Copy";
button.style.width = '100px'; // setting the width to 200px
button.style.height = '50px'; 

var t = document.createTextNode("Copy");
button.appendChild(t);

button.addEventListener('click', function()
{
  //navigator.clipboard.writeText(e.textContent.replace(button.name, ""));

  let head = document.querySelector("h1");

  //?以降をカット
  let url = location.href.replace(/\?.*$/,'');

  const data = {
    url: url,
    title: head.textContent
  }

  let json = JSON.stringify(data);

  chrome.runtime.sendMessage({
    message: json
  }, response => {

    const obj = JSON.parse(response);

    console.log(`backgroundからの戻り値:`+obj);

    if(obj.sucsess == true)
    {
      button.textContent = `成功`;
    }    

    // ここで画面への処理を書く
    //const new_element = document.createElement('p');
    //new_element.textContent = response.text;
    //document.getElementsByTagName("div")[0].appendChild(new_element);
  });

});

head.append(" ");
head.append(button);

/*
// 「Webアプリケーションとして導入」しているGASのURL
const gasUrl = "https://script.google.com/macros/s/AKfycbz8Tx9InH95KZPMzO7NpxX4ctbzMEjxFNRLP0IB1DzSGldwNzHP4h-j4CxX1z5767QA7Q/exec";

  let heading = document.querySelector("h1");

  //let reviewHead = document.getElementById('red');

  //for(let i = 0; i < headings.length; i++){
    //let e = headings[i];

    var button = document.createElement("BUTTON");
    button.name = "Copy";
    button.style.width = '100px'; // setting the width to 200px
    button.style.height = '50px'; 

    var t = document.createTextNode("Copy");
    button.appendChild(t);

    button.addEventListener('click', function()
    {
      //navigator.clipboard.writeText(e.textContent.replace(button.name, ""));

    const url   = location.href;
    const title = "test";
    post2GAS(url, title);

    });

    heading.append(" ");
    heading.append(button);

  //}

function post2GAS(url, title){
  const data = {
    url: url,
    title: title
  }

  jQuery.ajax({
    type: 'POST',
    url: gasUrl,
    data: JSON.stringify(data)
  })
  .done( function(data) {
    console.log("成功");
  })
  .fail( function(jqXHR, textStatus, errorThrown) {
    console.log("失敗");
    console.log("XMLHttpRequest : " + jqXHR.status);
    console.log("textStatus : " + textStatus);
    console.log("errorThrown : " + errorThrown);
  })
  .always( (data) => {
    console.log("処理終了");
  });
}
*/