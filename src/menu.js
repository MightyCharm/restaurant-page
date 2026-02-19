function createMenu(container, data) {
  container.append(createSection(data.drinks));
  container.append(createSection(data.sides));
  container.append(createSection(data.main));
}

function createSection(data) {
  const section = document.createElement("section");
  const divHeader = document.createElement("div");
  section.classList.add("section-menu");
  divHeader.classList.add("section-menu-header");
  divHeader.textContent = data.header;

  section.append(divHeader);
  data.cards.forEach((card) => {
    const divCard = document.createElement("div");
    const divText = document.createElement("div");
    const img = document.createElement("img");
    const header = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");
    divCard.classList.add("card-menu");
    divText.classList.add("card-div-text");
    img.classList.add("card-menu-img");
    header.classList.add("card-menu-header");
    description.classList.add("card-menu-description");
    price.classList.add("card-menu-price");
    img.src = card.imgSrc;
    img.alt = card.imgAlt;
    header.textContent = card.header;
    description.textContent = card.description;
    price.textContent = card.price;

    divText.append(header, description, price);
    divCard.append(img, divText);
    section.append(divCard);
  });

  return section;
}

export { createMenu };
