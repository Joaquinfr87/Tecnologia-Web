let lista = document.createElement('ul');

document.getElementById("boton").addEventListener("click",()=>{
  for(let i=0;i<100;i++){
    let elemento = document.createElement("li");
    if(i%3==0) elemento.textContent += "Fizz"
    if(i%5==0) elemento.textContent += "Buzz"
    
    elemento.textContent = elemento.textContent||i
  
    lista.appendChild(elemento)
  }

  document.body.appendChild(lista)
  
})
