function rent(event){
    event.preventDefault() 
    const valor = document.getElementById("centroCosto").value;  
    
       if (valor === 'DAP'){ 
        Resultado.innerText = "La rentabilidad es 12%";
        } 
        else {
          alert("La rentabilidad es 32%");
        }
    } 