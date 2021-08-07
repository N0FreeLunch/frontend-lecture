var div1 = document.createElement('div');
document.body.appendChild(div1);

div1.style.backgroundColor = "green";
div1.style.width = "100px";
div1.style.height = "50px";


var div1btn = document.createElement('button');
document.body.appendChild(div1btn);
div1btn.innerText = "div1";

var div1width = 0;
div1btn.onclick = function () {
  div1width = div1width + 50;
  div1.style.width = div1width+"px";
}

var div1width = 0;
div1btn.onclick = function () {
  if( div1width < 500) {
    div1width = div1width + 50;
    div1.style.width = div1width+"px";
  }
}
