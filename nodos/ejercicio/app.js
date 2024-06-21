import { data } from "./datos.js";

const d = document;

const contenedor = d.querySelector("div.container");
const fragmento = d.createDocumentFragment();
const contenedor_cards = d.createElement("div");
contenedor_cards.classList.add("cards", "grid");
contenedor.appendChild(contenedor_cards);

// contenedor_cards.style.display = "grid";
// contenedor_cards.style.gridTemplateColumns = "repeat(3, 1fr)";
// contenedor_cards.style.gap = "10px";

data.map((obj) => {
  // Definir elementos cards
  const card = d.createElement("div");
  const card_header = d.createElement("div");
  const card_header_title = d.createElement("h2");
  const card_body = d.createElement("div");
  const card_body_image = d.createElement("img");
  const card_body_paragraph = d.createElement("p");
  const card_body_a = d.createElement("a");
  const card_body_a_span = d.createElement("span");
  const card_body_a_icon = d.createElement("i");

  // Agregar elementos al HTML
  card.appendChild(card_header);
  card_header.appendChild(card_header_title);
  card.appendChild(card_body);
  card_body.appendChild(card_body_image);
  card_body.appendChild(card_body_paragraph);
  card_body.appendChild(card_body_a);
  card_body_a.appendChild(card_body_a_span);
  card_body_a.appendChild(card_body_a_icon);

  // Insertar información HTML
  card_header_title.innerHTML = obj.title;
  card_body_image.src = obj.src;
  card_body_paragraph.innerHTML = obj.paragraph;
  card_body_a.href = "#";
  card_body_a_span.innerHTML = "Saber más";

  // Insertar clases a las etiquetas
  card.classList.add("card");
  card_header.classList.add("card__header");
  card_header_title.classList.add("card__title");
  card_body.classList.add("card__body");
  card_body_image.classList.add("card__image");
  card_body_paragraph.classList.add("card__paragraph");
  card_body_a.classList.add("button", "button--outline");
  card_body_a_span.classList.add("button__text");
  card_body_a_icon.classList.add("bx", "bxs-chevron-right", "button__icon");

  fragmento.appendChild(card);
  contenedor_cards.appendChild(fragmento);
});
