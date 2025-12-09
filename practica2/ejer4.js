let lugarTuristico = {
  nombre: "Laguna Alalay",
  ciudad: "Cochabamba",
  precioEntrada: 20,
  horario: "Lunes a Viernes",
  calificaciones: [100,100,49],
  promedioCalificaciones(){
    return this.calificaciones.reduce((a,b)=>a+b)/this.calificaciones.length
  },
  aplicarDescuento(rate){
    this.precioEntrada = this.precioEntrada * (1-rate)
  },
  agrgarCalificacion(n){
    this.calificaciones.push(n)
  }


}

let div = document.createElement("div");

div.innerHTML = `<h2>${lugarTuristico.nombre}</h2>
<h3>${lugarTuristico.ciudad}</h3>
<p id="precio">Precio Entrada: ${lugarTuristico.precioEntrada}</p>
<p>Horario: ${lugarTuristico.horario}</p>
<p id="calificaciones">Calificaciones: ${lugarTuristico.calificaciones}</p>
<input type="number" id="calificacion"><button id="agregarCalificacion"> Ingresa una calificacion</button><br><br><br>
<button id="promedio">Promedio de calificaciones</button>
<p id="promedioText">0</p>
<input type="number" id="tasa" placeHolder=" Ejemplo: 0.05"><button id="aplicarDescuento"> Ingresa la tasa de descuento</button>`;

document.body.appendChild(div)

document.getElementById("agregarCalificacion").addEventListener("click", ()=>{
  let calificacion = Number(document.getElementById("calificacion").value)
  lugarTuristico.agrgarCalificacion(calificacion)
  document.getElementById("calificaciones").textContent = `Calificaciones: ${lugarTuristico.calificaciones}`
})

document.getElementById("promedio").addEventListener("click", ()=>{
  document.getElementById("promedioText").textContent = Math.round(lugarTuristico.promedioCalificaciones()*100)/100;
})
document.getElementById("aplicarDescuento").addEventListener("click", ()=>{
  let descuento = Number(document.getElementById("tasa").value)
  lugarTuristico.aplicarDescuento(descuento)
  document.getElementById("precio").textContent = `Precio Entrada: ${lugarTuristico.precioEntrada}`
})
