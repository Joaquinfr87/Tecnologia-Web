let resultado = document.getElementById("resultado")
document.getElementById("boton").addEventListener("click", ()=>{
  let clima = Number(document.getElementById("clima").value);
  
  if (clima >= -10 && clima <= 15) {
    resultado.textContent = "Frio"
  }
  else if (clima >= 16 && clima <= 25) {
    resultado.textContent = "Templado"
  }
  else {
    resultado.textContent = "Calor"
  }
})







