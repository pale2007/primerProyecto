
function go(event){
event.preventDefault() 
const user = document.getElementById("nombre").value;

const pwd = document.getElementById("password").value;


   if (user === 'ARAF' && pwd === '1810' || user === 'LUIS' && pwd === '2007'){ 
    window.location.href= "./home.html";
    } 
    else {
      alert("Datos incorrectos, favor ingresa nuevamente");
    }
} 