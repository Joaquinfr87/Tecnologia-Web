document.getElementById("boton").addEventListener("click",()=>{
  let fecha = new Date();
  let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
  let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

  let texto;
  
  texto = dias[fecha.getDay()]+", "+fecha.getDate()+" de "+meses[fecha.getMonth()]+" del "+fecha.getFullYear()
    document.getElementById("fecha").textContent = texto
})
