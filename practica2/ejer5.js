let boton = document.getElementById("boton")
let hotel;
boton.addEventListener("click", () => {
  let hotel = document.getElementById("hotel")
  hotel.style.display = "block"
  let nombre = document.getElementById("nombre").value;
  let ciudad = document.getElementById("ciudad").value;
  let habitacionesDisp = Number(document.getElementById("habitacionesDisp").value)
  hotel = new Hotel(nombre, ciudad, habitacionesDisp);
  console.log(hotel)
  eventos(hotel);
})
function eventos(hotel){
  document.getElementById("reservarBoton").addEventListener("click",()=> { hotel.reservar() })
  document.getElementById("liberarBoton").addEventListener("click", ()=>{ hotel.liberar() })
  document.getElementById("infoBoton").addEventListener("click", ()=>{ hotel.info() })
  console.log(hotel)
}
class Hotel {
  constructor(nombre, ciudad, habitacionesDisp) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.habitacionesDisp = habitacionesDisp;
  }
  reservar() {
    let cantidad = Number(document.getElementById("reservar").value)
    let dif = this.habitacionesDisp - cantidad;
    this.habitacionesDisp = dif > 0 ? dif : this.habitacionesDisp;
  }
  liberar() {
    let cantidad = Number(document.getElementById("liberar").value)
    this.habitacionesDisp += cantidad
  }
  info() {
    console.log(this)
    let texto = `Nombre: ${this.nombre}\n
    Ciudad: ${this.ciudad}\n
    habitacionesDisp: ${this.habitacionesDisp}`
    alert(texto)
  }
}

