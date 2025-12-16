async function cargarDatos(){
  const request = new Request("https://joaquinfr87.github.io/Tecnologia-Web/json/turismo/destinos.json");
  const response = await fetch(request);
  const destinos = await response.json();
  console.log(destinos);
   
  turismoCards(destinos);
}

function turismoCards(obj){
  let section = document.getElementsByTagName("section")[0];
  obj.forEach(a => {
    // 2. **Contenedor de la Card (<article>)**
    let article = document.createElement("article");
    article.className = "bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 ease-in-out"; 
    
    let html = `
      <figure class="w-full h-48 overflow-hidden">
        <img src="${a.imageUrl}" alt="${a.slug}" class="w-full h-full object-cover">
      </figure>

      <div class="p-5">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">${a.title}</h2>
        <p class="text-gray-600 mb-4 text-sm">${a.description}</p>
      </div>

      <div class="px-5 pb-5 pt-0">
        <h4 class="text-sm font-semibold text-gray-700 mb-2">Destacados:</h4>
        <ul class="flex flex-wrap gap-2">
          ${a.highlights.map(h => 
            // 10. Elemento de Lista (<li>) - Estilo Badge
            `<li class="text-xs font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">${h}</li>`
          ).join("")}
        </ul>
      </div>
    `;
    
    article.innerHTML = html;
    section.appendChild(article);
  });
}

cargarDatos();

