
var home = "HOME";
var result;

var count = 0;
function digitar() {
  result = document.getElementById("result");
  window.setTimeout(function() { inserir(home[count]) }, 1000);
}

function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < home.length)
    window.setTimeout(function() { inserir(home[count]) }, 1000);
}

window.onload = digitar;
