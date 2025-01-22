//Creación de código para el header
const NAV_BAR = document.createElement("nav");

const HEADER = document.getElementById("header");

const H1 = document.createElement("h1");
HEADER.appendChild(H1);

H1.textContent = "Ejercicio de JavaScript";
HEADER.appendChild(NAV_BAR);
NAV_BAR.id = "nav_bar";

const LINKS_NAV = ["Inicio", "Rusos", "Americanos", "Alemanes"];
let links_header = "";
LINKS_NAV.forEach((element) => {
  let href = "";
  if (element === "Inicio") {
    href = "#header";
  } else {
    href = `#tanques_${element.toLowerCase()}`;
  }
  links_header += `<a href=${href}>${element}</a>`;
});

NAV_BAR.innerHTML = links_header;

//Creación de código para el main
let numeroDivs = 3;
const TANQUES = ["Rusos", "Americanos", "Alemanes"];
const SECTION = document.createElement("section");
SECTION.id = "section_container";

for (let i = 0; i < numeroDivs; i++) {
  SECTION.innerHTML += `<div id=tanques_${TANQUES[
    i
  ].toLowerCase()}> <h2> Tanques ${TANQUES[i]} </h2> </div>`;
}

const MAIN = document.getElementById("main");
MAIN.appendChild(SECTION);

const RESUMEN_RUSOS =
  "Los tanques rusos son conocidos por su diseño robusto, simplicidad y capacidad de operar en condiciones extremas.Su fortaleza es la producción masiva y resistencia, pero suelen ser menos avanzados tecnológicamente que sus contrapartes occidentales.";
const RESUMEN_AMERICANOS =
  "Los tanques estadounidenses, sobresalen por su equilibrio entre movilidad, potencia de fuego y protección. Su tecnología avanzada es una fortaleza clave, aunque pueden ser más costosos y logísticamente complicados de mantener.";
const RESUMEN_ALEMANES =
  "Los tanques alemanes, se distinguen por su ingeniería de precisión, poder de fuego y blindaje. Durante la Segunda Guerra Mundial, su complejidad dificultó la producción en masa.";

const PARRAFO_RUSOS = document.createElement("p");
PARRAFO_RUSOS.textContent = RESUMEN_RUSOS;

const PARRAFO_AMERICANOS = document.createElement("p");
PARRAFO_AMERICANOS.textContent = RESUMEN_AMERICANOS;

const PARRAFO_ALEMANES = document.createElement("p");
PARRAFO_ALEMANES.textContent = RESUMEN_ALEMANES;

const DIV_RUSOS = document.getElementById("tanques_rusos");
DIV_RUSOS.appendChild(PARRAFO_RUSOS);

const DIV_AMERICANOS = document.getElementById("tanques_americanos");
DIV_AMERICANOS.appendChild(PARRAFO_AMERICANOS);

const DIV_ALEMANES = document.getElementById("tanques_alemanes");
DIV_ALEMANES.appendChild(PARRAFO_ALEMANES);

const IMG_RUSO = document.createElement("img");
IMG_RUSO.setAttribute("src", "./img/T-34.webp");
DIV_RUSOS.appendChild(IMG_RUSO);

const IMG_USA = document.createElement("img");
IMG_USA.setAttribute("src", "./img/M4.webp");
DIV_AMERICANOS.appendChild(IMG_USA);

const IMG_ALEMAN = document.createElement("img");
IMG_ALEMAN.setAttribute("src", "./img/TIGER1.webp");
DIV_ALEMANES.appendChild(IMG_ALEMAN);

//Creación de código para el footer
const FOOTER = document.createElement("footer");
document.getElementsByTagName("body")[0].appendChild(FOOTER);

const ANCLA = document.createElement("button");
ANCLA.innerHTML = `
    <a href="#header">
        Inicio
    </a>
`;
FOOTER.appendChild(ANCLA);
