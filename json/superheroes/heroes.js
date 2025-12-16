// Función principal que inicializa todo
async function cargar() {
  const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  const response = await fetch(requestURL);

  if (!response.ok) {
    console.error(`Error al cargar los datos: ${response.status}`);
    return;
  }

  const superHeroes = await response.json();

  cargarHeader(superHeroes);
  cargarContenido(superHeroes);
}

// Función para cargar el encabezado
function cargarHeader(obj) {
  const header = document.querySelector("header");
  if (!header) return;

  // 1. TÍTULO PRINCIPAL (h1): Más impacto con degradado y sombra
  let h1 = document.createElement("h1");
  h1.textContent = obj.squadName;
  h1.className = `
    text-6xl md:text-8xl lg:text-9xl   /* TAMAÑO: Hacemos el título más grande y más responsivo */
    font-black                         /* PESO: Usamos el peso más grueso */
    text-center                        /* ALINEACIÓN */
    tracking-tighter                   /* ESPACIADO: Letras más ajustadas para impacto */
    mb-4                               /* MARGEN: Margen inferior para separarlo del subtítulo */
    
    /* EFECTO DE DEGRADADO EN TEXTO */
    text-transparent                   /* 1. Hacemos el texto transparente */
    bg-clip-text                       /* 2. Recortamos el fondo al área del texto */
    bg-gradient-to-r                   /* 3. Degradado de izquierda a derecha */
    from-indigo-600 to-pink-500        /* 4. Colores llamativos */
    
    /* Sombra sutil para "levantar" el texto */
    drop-shadow-lg 
  `;
  header.appendChild(h1);

  // 2. SUBTÍTULO (h2): Más contraste y fondo ligero
  let h2 = document.createElement("h2");
  h2.textContent = `Protegiendo ${obj.homeTown} desde ${obj.formed}`;
  h2.className = `
    text-lg md:text-2xl font-semibold   /* TAMAÑO y PESO */
    text-center                         /* ALINEACIÓN */
    text-gray-700                       /* COLOR: Gris oscuro para mejor contraste */
    px-4 py-2                           /* PADDING: Le damos un poco de espacio alrededor */
    mx-auto                             /* CENTRADO: Para limitar el ancho */
    max-w-xl                            /* ANCHO MÁXIMO: Limita el subtítulo a un ancho legible */
    rounded-full                        /* BORDES: Bordes completamente redondeados (forma de píldora) */
    bg-white/70                         /* FONDO: Fondo blanco semi-transparente */
    shadow-md                           /* SOMBRA: Sombra sutil */
    mb-12                               /* MARGEN: Más margen inferior para separarlo del contenido */
  `;
  header.appendChild(h2);
}
// Función para cargar el contenido (Tarjetas de Héroes)
function cargarContenido(obj) {
  // Mejor usar querySelector si solo quieres la primera <section>
  const seccion = document.querySelector("section");
  if (!seccion) return;

  // Contenedor principal para centrar y aplicar padding
  seccion.className = "max-w-7xl mx-auto p-4";

  // Título de la sección
  let h1 = document.createElement('h1');
  h1.textContent = "Miembros del Equipo";
  h1.className = "text-3xl font-bold text-center text-pink-400 mb-8";
  seccion.appendChild(h1);

  // Contenedor Flex/Grid para las tarjetas
  let div = document.createElement('div');
  // Usamos GRID para crear 3 columnas en desktop y 2 en tablet
  div.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

  // Iteración eficiente de los miembros del equipo
  for (const heroe of obj.members) {
    let articulo = document.createElement("article");

    // Estilos de Tailwind para la tarjeta del artículo
    articulo.className = "bg-white shadow-xl rounded-lg p-6 border-t-4 border-red-500 transform hover:scale-[1.02] transition duration-300";

    // Generamos la lista de poderes usando .map().join('')
    const poderesHTML = heroe.powers.map(poder => {
      // Estilos para cada poder (píldora/tag)
      return `<li class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">${poder}</li>`;
    }).join('');

    // Rellenamos el artículo con el contenido y los estilos correctos (usando 'class')
    articulo.innerHTML = `
      <h3 class="text-3xl font-bold text-gray-900 mb-2">${heroe.name}</h3>
      <p class="text-sm text-gray-500 italic mb-4">Identidad Secreta: ${heroe.secretIdentity}</p>
      <p class="text-gray-700 mb-4">Edad: ${heroe.age}</p>
      <p class="font-semibold text-gray-800 mt-4 mb-2">Poderes:</p>
      
      <ul class="flex flex-wrap gap-2">
        ${poderesHTML}
      </ul>
    `;

    div.appendChild(articulo);
  }

  seccion.appendChild(div);
}

cargar();
