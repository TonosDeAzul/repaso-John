// Importamos el arreglo de objetos
import { datos } from "./datos.js";

const d = document;

// Identificamos el elemento por la clase
const padre = d.querySelector(".container");

// Creamos un elemento
// const elemento = d.createElement("p");
// const texto =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, dolorem dolorum explicabo vitae eligendi cumque, quas dolor est et praesentium recusandae quod beatae ab repudiandae ducimus necessitatibus omnis dignissimos debitis!";
// elemento.innerText = texto;
// padre.appendChild(elemento);

// const texto2 =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, placeat! Aspernatur ipsum iure repellendus deserunt blanditiis voluptate cumque pariatur? Amet eveniet doloremque recusandae possimus libero numquam, facilis aspernatur exercitationem dolor?";
// const elemento2 = d.createElement("p");
// elemento2.innerText = texto2;
// padre.appendChild(elemento2);

const lista = d.querySelector("div.container > div.card > ul.list");
// console.log([...lista]);

// console.clear();

// console.log(item);
// console.log(lista);

// console.log(datos);

// Recorrer el arreglo de objetos
datos.map((a) => {
  // Creamos un elemento "li"
  const item = d.createElement("li");
  // Le agregamos el atributo "name" del objeto
  item.innerHTML = a.name;
  // Le agregamos la clase al item
  item.classList.add("item");
  // Agreamos el elemento al HTML
  lista.appendChild(item);
});

// Investigar fragmentos en JS
