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

console.clear();

// Pasar a mayúscula
const api = dom.getElementById("api");
console.log(api.innerHTML.toUpperCase());
api.innerHTML = "¿QUÉ ES API?";

console.clear();

console.log(body.childNodes);
