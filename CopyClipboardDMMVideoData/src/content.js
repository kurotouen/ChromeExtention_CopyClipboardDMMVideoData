//window.alert('アプリ開いたね！');

let headings = document.querySelectorAll("h1");
for(let i = 0; i < headings.length; i++){
  let e = headings[i];
  //e.textContent = i + ". " + e.textContent;

  var button = document.createElement("BUTTON");
  button.name = "Copy";
  button.style.width = '100px'; // setting the width to 200px
  button.style.height = '50px'; 
  var t = document.createTextNode("Copy");
  button.appendChild(t);
  button.addEventListener('click', function()
  {
    navigator.clipboard.writeText(e.textContent.replace(button.name, ""));
  });
  e.appendChild(button);
}

