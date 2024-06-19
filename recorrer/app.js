let win = window;
let dom = document;
let body = dom.body;
let form = dom.forms;
// Nuevas
let divs = dom.querySelectorAll("div");
let div = dom.querySelector("div");
let porIdNuevo = dom.querySelector("#documento");
let porClase = dom.querySelector(".container");
let divsClases = dom.querySelectorAll(".card");
let porId = dom.getElementById("documento");
let atributo = dom.getElementsByName("search");
let oldClass = dom.getElementsByClassName("input");
let liItem = dom.querySelectorAll("ul.list > li.item");
// console.log(win);
// console.log(dom);
// console.log(dom.doctype);
// console.log(dom.head);
// console.log(body);
// console.log(body.children);
// console.log(body.children[0]);

// let array = body.children;
// console.clear();

let array = [...body.children];

array.map((x) => {
  console.log(x);
});

console.log(divs);

console.log(form);
console.log(dom.links);
console.log(dom.images);
console.log(porId);
console.log(porIdNuevo);
console.log(porClase);
console.log(divsClases);
console.log(atributo);
console.log(oldClass);
console.log(liItem);

// Pasar a mayúscula
// const api = dom.getElementById("api");
// console.log(api.innerHTML.toUpperCase());
// api.innerHTML = "¿QUÉ ES API?";

// console.log(body.childNodes);

// console.log(parrafos);

// const cards = dom.getElementById("cards");
// const lista = [...cards.children];
// console.log(parrafo);
// const parrafos = dom.querySelectorAll("div.card__body > p");

// lista.map((a, i) => {
//   if (i % 2 !== 0) {
//     console.log(a);
//     a.classList.add("bg-white");
//     a.classList.add("paragraph-color");
//     console.log(a.querySelectorAll("div.card__body > p.card__paragraph"));
//   }
// });

console.clear();

// Cargar archivo multimedia
const formulario = dom.getElementById("search");
formulario.setAttribute("enctype", "multipart/form-data");
// console.log(formulario);
const input = dom.querySelector(".search__form > .input");
console.log(input);
input.setAttribute("autocomplete", "off");
// input.setAttribute("placeholder", "");
input.removeAttribute("placeholder");
input.setAttribute("placeholder", "47");

// Acceder a custom properties
const html = dom.documentElement;
console.log(html);

const mineShaft = getComputedStyle(html).getPropertyValue("--mineShaft");
const white = getComputedStyle(html).getPropertyValue("--white");
// console.log(mineShaft);
// console.log(white);
// html.style.setProperty("--mineShaft", "#fff");
// html.style.setProperty("--white", "#1d1d1d");

console.clear();

const parrafo = dom.getElementById("elementos");
console.log(parrafo);
// parrafo.textContent +=
//   "<b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur fugiat corrupti molestiae! Ea quasi voluptatibus verorepellendus distinctio voluptatum voluptatem quam, perspiciatis necessitatibus illum hic ut dolorum tenetur laborum.";
parrafo.innerHTML +=
  "<b>Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur fugiat corrupti molestiae! Ea quasi voluptatibus verorepellendus distinctio voluptatum voluptatem quam, perspiciatis necessitatibus illum hic ut dolorum tenetur laborum.";
