import imageDrink from "./images/water.jpg";
import imageDrink2 from "./images/beer.jpg";
import imageDrink3 from "./images/wine.jpg";
import imageSide from "./images/salad.jpg";
import imageSide2 from "./images/soup.jpg";
import imageSide3 from "./images/waffle.jpg";
import imageMain from "./images/pasta.jpg";
import imageMain2 from "./images/salmon.jpg";
import imageMain3 from "./images/schnipo.jpg";
import imageMain4 from "./images/steak.jpg";
import imageMain5 from "./images/chicken.jpg";
import imageMain6 from "./images/vegan.jpg";

function createMenu(container) {
  container.appendChild(createDrinkSection());
  container.appendChild(createSideSection());
  container.appendChild(createMainSection());
}

function createDrinkSection() {
  const section = document.createElement("section");
  const divHeaderDrinkSection = document.createElement("div");
  section.classList.add("menu-drinks");
  divHeaderDrinkSection.classList.add("menu-header-drinks");
  divHeaderDrinkSection.textContent = "DRINKS";

  const divCardDrink = document.createElement("div");
  const divTextDrink = document.createElement("div");
  const image = document.createElement("img");
  const headerDrink = document.createElement("h2");
  const paraDrinkDescription = document.createElement("p");
  const paraDrinkPrice = document.createElement("p");
  divCardDrink.classList.add("card-menu");
  divTextDrink.classList.add("card-div-text");
  image.classList.add("card-menu-img");
  headerDrink.classList.add("card-menu-header");
  paraDrinkDescription.classList.add("card-menu-description");
  paraDrinkPrice.classList.add("card-menu-price");
  image.src = imageDrink;
  image.alt = "image of a delicious glass of water";
  headerDrink.textContent = "Sparkeling Water";
  paraDrinkDescription.textContent =
    "From our own well especially for you. There is nothing more refreshing for the heart and senses.";
  paraDrinkPrice.textContent = "$1.99";
  divTextDrink.appendChild(headerDrink);
  divTextDrink.appendChild(paraDrinkDescription);
  divTextDrink.appendChild(paraDrinkPrice);
  divCardDrink.appendChild(image);
  divCardDrink.appendChild(divTextDrink);

  const divCardDrink2 = document.createElement("div");
  const divTextDrink2 = document.createElement("div");
  const image2 = document.createElement("img");
  const headerDrink2 = document.createElement("h2");
  const paraDrinkDescription2 = document.createElement("p");
  const paraDrinkPrice2 = document.createElement("p");
  divCardDrink2.classList.add("card-menu");
  divTextDrink2.classList.add("card-div-text");
  image2.classList.add("card-menu-img");
  headerDrink2.classList.add("card-menu-header");
  paraDrinkDescription2.classList.add("card-menu-description");
  paraDrinkPrice2.classList.add("card-menu-price");
  headerDrink2.textContent = "German Beer";
  image2.src = imageDrink2;
  image2.alt = "image of an ice cold beer";
  paraDrinkDescription2.textContent =
    "Wheat beer flown in directly from Munich. Taste tradition combined with modernity. Refreshing and tasty.";
  paraDrinkPrice2.textContent = "$3.99";
  divTextDrink2.appendChild(headerDrink2);
  divTextDrink2.appendChild(paraDrinkDescription2);
  divTextDrink2.appendChild(paraDrinkPrice2);

  divCardDrink2.appendChild(image2);
  divCardDrink2.appendChild(divTextDrink2);

  const divCardDrink3 = document.createElement("div");
  const divTextDrink3 = document.createElement("div");
  const headerDrink3 = document.createElement("h2");
  const image3 = document.createElement("img");
  const paraDrinkDescription3 = document.createElement("p");
  const paraDrinkPrice3 = document.createElement("p");
  divCardDrink3.classList.add("card-menu");
  divTextDrink3.classList.add("card-div-text");
  image3.classList.add("card-menu-img");
  headerDrink3.classList.add("card-menu-header");
  paraDrinkDescription3.classList.add("card-menu-description");
  paraDrinkPrice3.classList.add("card-menu-price");
  headerDrink3.textContent = "Chianti";
  image3.src = imageDrink3;
  image3.alt = "image of an glass wine";
  paraDrinkDescription3.textContent =
    "Our italian special. A classic red wine from Tuscany made from Sangiovese grapes. Give it a try, you won't regret it.";
  paraDrinkPrice3.textContent = "$2.99";
  divTextDrink3.appendChild(headerDrink3);
  divTextDrink3.appendChild(paraDrinkDescription3);
  divTextDrink3.appendChild(paraDrinkPrice3);
  divCardDrink3.appendChild(image3);
  divCardDrink3.appendChild(divTextDrink3);

  section.appendChild(divHeaderDrinkSection);
  section.appendChild(divCardDrink);
  section.appendChild(divCardDrink2);
  section.appendChild(divCardDrink3);

  return section;
}

function createSideSection() {
  const section = document.createElement("section");
  const divHeaderSidesSection = document.createElement("div");
  section.classList.add("menu-sides");
  divHeaderSidesSection.classList.add("menu-header-sides");
  divHeaderSidesSection.textContent = "SIDES";

  const divCardSide = document.createElement("div");
  const divTextSide = document.createElement("div");
  const image = document.createElement("img");
  const headerSide = document.createElement("h2");
  const paraSideDescription = document.createElement("p");
  const paraSidePrice = document.createElement("p");
  divCardSide.classList.add("card-menu");
  divTextSide.classList.add("card-div-text");
  image.classList.add("card-menu-img");
  headerSide.classList.add("card-menu-header");
  paraSideDescription.className = "card-menu-description";
  paraSidePrice.classList.add("card-menu-price");
  image.src = imageSide;
  image.alt = "image of a fresh and delicious salad";
  headerSide.textContent = "Salad";
  paraSideDescription.textContent =
    "Vegetables fresh from the farmer around the corner. Healthy and delicious.";
  paraSidePrice.textContent = "$4.99";

  divTextSide.appendChild(headerSide);
  divTextSide.appendChild(paraSideDescription);
  divTextSide.appendChild(paraSidePrice);

  divCardSide.appendChild(image);
  divCardSide.appendChild(divTextSide);

  const divCardSide2 = document.createElement("div");
  const divTextSide2 = document.createElement("div");
  const image2 = document.createElement("img");
  const headerSide2 = document.createElement("h2");
  const paraSideDescription2 = document.createElement("p");
  const paraSidePrice2 = document.createElement("p");
  divCardSide2.classList.add("card-menu");
  divTextSide2.classList.add("card-div-text");
  image2.classList.add("card-menu-img");
  headerSide2.classList.add("card-menu-header");
  paraSideDescription2.classList.add("card-menu-description");
  paraSidePrice2.classList.add("card-menu-price");
  image2.src = imageSide2;
  image2.alt = "image of a fresh and delicious salad";
  headerSide2.textContent = "Pumpkin Soup";
  paraSideDescription2.textContent =
    "Pumpkin soup made according to an old family recipe. Ginger optional.";
  paraSidePrice2.textContent = "$3.99";
  divTextSide2.appendChild(headerSide2);
  divTextSide2.appendChild(paraSideDescription2);
  divTextSide2.appendChild(paraSidePrice2);

  divCardSide2.appendChild(image2);
  divCardSide2.appendChild(divTextSide2);

  const divCardSide3 = document.createElement("div");
  const divTextSide3 = document.createElement("div");
  const image3 = document.createElement("img");
  const headerSide3 = document.createElement("h2");
  const paraSideDescription3 = document.createElement("p");
  const paraSidePrice3 = document.createElement("p");
  divCardSide3.classList.add("card-menu");
  divTextSide3.classList.add("card-div-text");
  image3.classList.add("card-menu-img");
  headerSide3.classList.add("card-menu-header");
  paraSideDescription3.classList.add("card-menu-description");
  paraSidePrice3.classList.add("card-menu-price");
  image3.src = imageSide3;
  image3.alt = "image of a fresh and delicious salad";
  headerSide3.textContent = " Waffles";
  paraSideDescription3.textContent =
    "Freshly prepared waffles with cream and chocolate sauce. Simply delicious.";
  paraSidePrice3.textContent = "$5.99";

  divTextSide3.appendChild(headerSide3);
  divTextSide3.appendChild(paraSideDescription3);
  divTextSide3.appendChild(paraSidePrice3);
  divCardSide3.appendChild(image3);
  divCardSide3.appendChild(divTextSide3);

  section.appendChild(divHeaderSidesSection);
  section.appendChild(divCardSide);
  section.appendChild(divCardSide2);
  section.appendChild(divCardSide3);

  return section;
}

function createMainSection() {
  const section = document.createElement("section");
  const divHeaderMainSection = document.createElement("div");
  section.classList.add("menu-main");
  divHeaderMainSection.classList.add("menu-header-main");
  divHeaderMainSection.textContent = "MAIN";

  const divCardMain = document.createElement("div");
  const divTextMain = document.createElement("div");
  const image = document.createElement("img");
  const headerMain = document.createElement("h2");
  const paraMainDescription = document.createElement("p");
  const paraMainPrice = document.createElement("p");
  divCardMain.classList.add("card-menu");
  divTextMain.classList.add("card-div-text");
  image.classList.add("card-menu-img");
  headerMain.classList.add("card-menu-header");
  paraMainDescription.classList.add("card-menu-description");
  paraMainPrice.classList.add("card-menu-price");
  image.src = imageMain;
  image.alt = "image of a plate with spaghetti bolognese";
  headerMain.textContent = "Spaghetti Bolognese";
  paraMainDescription.textContent =
    "Delicious spaghetti in homemade Bolognese. Fresh herbs make the difference here.";
  paraMainPrice.textContent = "$7.99";
  divTextMain.appendChild(headerMain);
  divTextMain.appendChild(paraMainDescription);
  divTextMain.appendChild(paraMainPrice);
  divCardMain.appendChild(image);
  divCardMain.appendChild(divTextMain);

  const divCardMain2 = document.createElement("div");
  const divTextMain2 = document.createElement("div");
  const image2 = document.createElement("img");
  const headerMain2 = document.createElement("h2");
  const paraMainDescription2 = document.createElement("p");
  const paraMainPrice2 = document.createElement("p");
  divCardMain2.classList.add("card-menu");
  divTextMain2.classList.add("card-div-text");
  image2.classList.add("card-menu-img");
  headerMain2.classList.add("card-menu-header");
  paraMainDescription2.classList.add("card-menu-description");
  paraMainPrice2.classList.add("card-menu-price");
  image2.src = imageMain2;
  image2.alt = "image of a plate with salmon and fresh vegetables";
  headerMain2.textContent = "Salmon with Vegetables";
  paraMainDescription2.textContent =
    "Healthy and delicious. Freshly caught and delivered straight to the table. Delicious vegetables to go with it.";
  paraMainPrice2.textContent = "$10.99";
  divTextMain2.appendChild(headerMain2);
  divTextMain2.appendChild(paraMainDescription2);
  divTextMain2.appendChild(paraMainPrice2);
  divCardMain2.appendChild(image2);
  divCardMain2.appendChild(divTextMain2);

  const divCardMain3 = document.createElement("div");
  const divTextMain3 = document.createElement("div");
  const image3 = document.createElement("img");
  const headerMain3 = document.createElement("h2");
  const paraMainDescription3 = document.createElement("p");
  const paraMainPrice3 = document.createElement("p");
  divCardMain3.classList.add("card-menu");
  divTextMain3.classList.add("card-div-text");
  image3.classList.add("card-menu-img");
  headerMain3.classList.add("card-menu-header");
  paraMainDescription3.classList.add("card-menu-description");
  paraMainPrice3.classList.add("card-menu-price");
  image3.src = imageMain3;
  image3.alt = "image of a plate with schnitzel and fries";
  headerMain3.textContent = "Schnitzel and Fries";
  paraMainDescription3.textContent =
    "A classic and not without reason. A tender, juicy schnitzel with fries.";
  paraMainPrice3.textContent = "$8.99";
  divTextMain3.appendChild(headerMain3);
  divTextMain3.appendChild(paraMainDescription3);
  divTextMain3.appendChild(paraMainPrice3);
  divCardMain3.appendChild(image3);
  divCardMain3.appendChild(divTextMain3);

  const divCardMain4 = document.createElement("div");
  const divTextMain4 = document.createElement("div");
  const image4 = document.createElement("img");
  const headerMain4 = document.createElement("h2");
  const paraMainDescription4 = document.createElement("p");
  const paraMainPrice4 = document.createElement("p");
  divCardMain4.classList.add("card-menu");
  divTextMain4.classList.add("card-div-text");
  image4.classList.add("card-menu-img");
  headerMain4.classList.add("card-menu-header");
  paraMainDescription4.classList.add("card-menu-description");
  paraMainPrice4.classList.add("card-menu-price");
  headerMain4.textContent = "Steak with Vegetables";
  image4.src = imageMain4;
  image4.alt = "image of a plate with steak and vegetables";
  paraMainDescription4.textContent =
    "Steak, fresh from the grill with delicious vegetables.";
  paraMainPrice4.textContent = "$12.99";
  divTextMain4.appendChild(headerMain4);
  divTextMain4.appendChild(paraMainDescription4);
  divTextMain4.appendChild(paraMainPrice4);
  divCardMain4.appendChild(image4);
  divCardMain4.appendChild(divTextMain4);

  const divCardMain5 = document.createElement("div");
  const divTextMain5 = document.createElement("div");
  const image5 = document.createElement("img");
  const headerMain5 = document.createElement("h2");
  const paraMainDescription5 = document.createElement("p");
  const paraMainPrice5 = document.createElement("p");
  divCardMain5.classList.add("card-menu");
  divTextMain5.classList.add("card-div-text");
  image5.classList.add("card-menu-img");
  headerMain5.classList.add("card-menu-header");
  paraMainDescription5.classList.add("card-menu-description");
  paraMainPrice5.classList.add("card-menu-price");
  image5.src = imageMain5;
  image5.alt = "image of a plate with chicken wings and hot sauce";
  headerMain5.textContent = "Chicken Wings and Hot Sauce";
  paraMainDescription5.textContent =
    "Chicken Wings with Hot Sauce. You will love it.";
  paraMainPrice5.textContent = "$9.99";

  divTextMain5.appendChild(headerMain5);
  divTextMain5.appendChild(paraMainDescription5);
  divTextMain5.appendChild(paraMainPrice5);

  divCardMain5.appendChild(image5);
  divCardMain5.appendChild(divTextMain5);

  const divCardMain6 = document.createElement("div");
  const divTextMain6 = document.createElement("div");
  const image6 = document.createElement("img");
  const headerMain6 = document.createElement("h2");
  const paraMainDescription6 = document.createElement("p");
  const paraMainPrice6 = document.createElement("p");
  divCardMain6.classList.add("card-menu");
  divTextMain6.classList.add("card-div-text");
  image6.classList.add("card-menu-img");
  headerMain6.classList.add("card-menu-header");
  paraMainDescription6.classList.add("card-menu-description");
  paraMainPrice6.classList.add("card-menu-price");
  image6.src = imageMain6;
  image6.alt = "image of a plate with a delicious vegan wrap";
  headerMain6.textContent = "Vegan Wraps";
  paraMainDescription6.textContent =
    "Filled with feta cheese, tofu and fresh vegetables. Vegan doesn't have to be boring.";
  paraMainPrice6.textContent = "$11.99";

  divTextMain6.appendChild(headerMain6);
  divTextMain6.appendChild(paraMainDescription6);
  divTextMain6.appendChild(paraMainPrice6);

  divCardMain6.appendChild(image6);
  divCardMain6.appendChild(divTextMain6);

  section.appendChild(divHeaderMainSection);
  section.appendChild(divCardMain);
  section.appendChild(divCardMain2);
  section.appendChild(divCardMain3);
  section.appendChild(divCardMain4);
  section.appendChild(divCardMain5);
  section.appendChild(divCardMain6);

  return section;
}

export { createMenu };
