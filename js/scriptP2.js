// DATOS CURIOSOS
const datos = [
    "Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.",
    "Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.",
    "Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.",
    "Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.",
    "Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.",
    "Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.",
    "Publicó libros fundamentales sobre programación creativa como Processing: A Programming Handbook for Visual Designers and Artists.",
    "Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA (Universidad de California, Los Ángeles).",
    "Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.",
    "Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series."
];

const dato = document.getElementById('datos');
const botonDato = document.getElementById('nuevo');

function mostrarDatoCurioso() {
    const oracion = Math.floor(Math.random() * datos.length);
    dato.textContent = datos[oracion];
}

mostrarDatoCurioso();
botonDato.addEventListener('click', mostrarDatoCurioso);

// MOSTRAR y OCULTAR FOTOS

const botonGaleria = document.querySelector(".abrirCerrar");
const contenedorGaleria = document.getElementById("galeria");

botonGaleria.addEventListener("click", function() {
    if (contenedorGaleria.style.display === "none") {
        contenedorGaleria.style.display = "flex";
        botonGaleria.innerText = "Imágenes ↑";
    } else {
        contenedorGaleria.style.display = "none";
        botonGaleria.innerText = "Imágenes ↓";
    }
});

//LA GALERIA
const obras = [
    { nombre: "#1: DETAIL OF Process 6", año: 2005, imagen: "img/galeria1.jpg" },
    { nombre: "Still from Study for a Garden of Earthly Delights", año: 2018, imagen: "img/galeria2.jpg" },
    { nombre: "DETAIL OF PROCESS 13 from PRocess compendium", año: 2010, imagen: "img/galeria3.jpg" },
    { nombre: "DETAIL of A Mathematical Theory of Communication book", año: 2018, imagen: "img/galeria4.jpg" },
    { nombre: "Still from ATOMS, 2023.", año: 2023, imagen: "img/galeria5.jpg" }
];

function galeriaObras() {
    let grupoObras = "";
    for (let i = 0; i < obras.length; i++) {
        grupoObras += `
            <article class="cuadro">
                <img src="${obras[i].imagen}" alt="${obras[i].nombre}">
                <h3>${obras[i].nombre}</h3>
                <p>Año: ${obras[i].año}</p>
            </article>
        `;
    }
    contenedorGaleria.innerHTML = grupoObras;
}

galeriaObras();
