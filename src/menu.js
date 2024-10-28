import imageDrink from "./water.jpg";
import imageDrink2 from "./beer.jpg";
import imageDrink3 from "./wine.jpg";
import imageSide from "./salad.jpg";
import imageSide2 from "./soup.jpg";
import imageSide3 from "./waffle.jpg";
import imageMain from "./pasta.jpg";
import imageMain2 from "./salmon.jpg";
import imageMain3 from "./schnipo.jpg";
import imageMain4 from "./steak.jpg";
import imageMain5 from "./chicken.jpg";
import imageMain6 from "./vegan.jpg";

export function createMenu() {
    createGridMenu(); // change grid layout
    createDrinkSection();
    createSideSection();
    createMainSection();
}

function createGridMenu() {
    // grap main container for content
    const divContent = document.querySelector("#content");
    // change grid columns in main container to fit layout in Menu Page
    divContent.style.gridTemplateColumns = "1fr";
    divContent.style.justifyItems = "center";
    divContent.style.gridRowGap = "5rem";
    divContent.style.justifyItems = "center";
    divContent.style.alignItems = "center";
}

function createDrinkSection() {
    // grap main container for content
    const divContent = document.querySelector("#content");

    // create first section: Drinks
    const divHeaderDrinkSection = document.createElement("div");
    divHeaderDrinkSection.className = "header-menu";
    divHeaderDrinkSection.innerHTML = "DRINKS"

    // create Card for drink
    const divCardDrink = document.createElement("div");
    divCardDrink.className = "card-menu";

    // create elements for card drink
    const headerDrink = document.createElement("h2");
    const paraDrinkPrice = document.createElement("p");
    const image = document.createElement("img");
    const paraDrinkDescription = document.createElement("p");
    // add class name to elements
    headerDrink.className = "card-menu-header";
    paraDrinkPrice.className = "card-menu-price";
    image.className = "card-menu-img";
    paraDrinkDescription.className = "card-menu-description";
    // add content to elements
    headerDrink.innerHTML = "Sparkeling Water";
    paraDrinkPrice.innerHTML = "$1.99";
    image.src = imageDrink;
    image.alt = "image of a delicious glass of water"
    paraDrinkDescription.innerHTML = "From our own well especially for you. There is nothing more refreshing for the heart and senses."
    // append elements to card
    divCardDrink.append(headerDrink);
    divCardDrink.append(paraDrinkPrice);
    divCardDrink.append(image);
    divCardDrink.append(paraDrinkDescription);

    // create Card for drink
    const divCardDrink2 = document.createElement("div");
    divCardDrink2.className = "card-menu";

    // create elements for card drink
    const headerDrink2 = document.createElement("h2");
    const paraDrinkPrice2 = document.createElement("p");
    const image2 = document.createElement("img");
    const paraDrinkDescription2 = document.createElement("p");
    // add class name to elements
    headerDrink2.className = "card-menu-header";
    paraDrinkPrice2.className = "card-menu-price";
    image2.className = "card-menu-img";
    paraDrinkDescription2.className = "card-menu-description";
    // add content to elements
    headerDrink2.innerHTML = "German Beer";
    paraDrinkPrice2.innerHTML = "$3.99";
    image2.src = imageDrink2;
    image2.alt = "image of an ice cold beer"
    paraDrinkDescription2.innerHTML = "Wheat beer flown in directly from Munich. Taste tradition combined with modernity. Refreshing and tasty."
    // append elements to card
    divCardDrink2.append(headerDrink2);
    divCardDrink2.append(paraDrinkPrice2);
    divCardDrink2.append(image2);
    divCardDrink2.append(paraDrinkDescription2);

    //=======
    // create Card for drink
    const divCardDrink3 = document.createElement("div");
    divCardDrink3.className = "card-menu";

    // create elements for card drink
    const headerDrink3 = document.createElement("h2");
    const paraDrinkPrice3 = document.createElement("p");
    const image3 = document.createElement("img");
    const paraDrinkDescription3 = document.createElement("p");
    // add class name to elements
    headerDrink3.className = "card-menu-header";
    paraDrinkPrice3.className = "card-menu-price";
    image3.className = "card-menu-img";
    paraDrinkDescription3.className = "card-menu-description";
    // add content to elements
    headerDrink3.innerHTML = "Chianti";
    paraDrinkPrice3.innerHTML = "$2.99";
    image3.src = imageDrink3;
    image3.alt = "image of an glass wine"
    paraDrinkDescription3.innerHTML = "Our italian special. A classic red wine from Tuscany made from Sangiovese grapes. Give it a try, you won't regret it.";
    // append elements to card
    divCardDrink3.append(headerDrink3);
    divCardDrink3.append(paraDrinkPrice3);
    divCardDrink3.append(image3);
    divCardDrink3.append(paraDrinkDescription3);

    divContent.append(divHeaderDrinkSection);
    divContent.append(divCardDrink);
    divContent.append(divCardDrink2);
    divContent.append(divCardDrink3);
}

function createSideSection() {
    // grap main container for content
    const divContent = document.querySelector("#content");

    // create header for sides section
    const divHeaderSidesSection = document.createElement("div");
    divHeaderSidesSection.className = "header-menu";
    divHeaderSidesSection.innerHTML = "SIDES";

    // create card for side
    const divCardSide = document.createElement("div");
    divCardSide.className = "card-menu";
    // create elements for card drink
    const headerSide = document.createElement("h2");
    const paraSidePrice = document.createElement("p");
    const image = document.createElement("img");
    const paraSideDescription = document.createElement("p");
    // add class name to elements
    headerSide.className = "card-menu-header";
    paraSidePrice.className = "card-menu-price";
    image.className = "card-menu-img";
    paraSideDescription.className = "card-menu-description";
    // add content to elements
    headerSide.innerHTML = "Salad";
    paraSidePrice.innerHTML = "$4.99";
    image.src = imageSide;
    image.alt = "image of a fresh and delicious salad";
    paraSideDescription.innerHTML = "Vegetables fresh from the farmer around the corner. Healthy and delicious.";
    // append elements to card
    divCardSide.append(headerSide);
    divCardSide.append(paraSidePrice);
    divCardSide.append(image);
    divCardSide.append(paraSideDescription);


    // create card for side
    const divCardSide2 = document.createElement("div");
    divCardSide2.className = "card-menu";
    // create elements for card drink
    const headerSide2 = document.createElement("h2");
    const paraSidePrice2 = document.createElement("p");
    const image2 = document.createElement("img");
    const paraSideDescription2 = document.createElement("p");
    // add class name to elements
    headerSide2.className = "card-menu-header";
    paraSidePrice2.className = "card-menu-price";
    image2.className = "card-menu-img";
    paraSideDescription2.className = "card-menu-description";
    // add content to elements
    headerSide2.innerHTML = "Pumpkin Soup";
    paraSidePrice2.innerHTML = "$3.99";
    image2.src = imageSide2;
    image2.alt = "image of a fresh and delicious salad";
    paraSideDescription2.innerHTML = "Pumpkin soup made according to an old family recipe. Ginger optional.";
    // append elements to card
    divCardSide2.append(headerSide2);
    divCardSide2.append(paraSidePrice2);
    divCardSide2.append(image2);
    divCardSide2.append(paraSideDescription2);

    // create card for side
    const divCardSide3 = document.createElement("div");
    divCardSide3.className = "card-menu";
    // create elements for card drink
    const headerSide3 = document.createElement("h2");
    const paraSidePrice3 = document.createElement("p");
    const image3 = document.createElement("img");
    const paraSideDescription3 = document.createElement("p");
    // add class name to elements
    headerSide3.className = "card-menu-header";
    paraSidePrice3.className = "card-menu-price";
    image3.className = "card-menu-img";
    paraSideDescription3.className = "card-menu-description";
    // add content to elements
    headerSide3.innerHTML = " Waffles";
    paraSidePrice3.innerHTML = "$5.99";
    image3.src = imageSide3;
    image3.alt = "image of a fresh and delicious salad";
    paraSideDescription3.innerHTML = "Freshly prepared waffles with cream and chocolate sauce. Simply delicious.";
    // append elements to card
    divCardSide3.append(headerSide3);
    divCardSide3.append(paraSidePrice3);
    divCardSide3.append(image3);
    divCardSide3.append(paraSideDescription3);

    // append everything to main container 
    divContent.append(divHeaderSidesSection);
    divContent.append(divCardSide);
    divContent.append(divCardSide2);
    divContent.append(divCardSide3);
}

function createMainSection() {
    const divContent = document.querySelector("#content");

    // create header for sides section
    const divHeaderMainSection = document.createElement("div");
    divHeaderMainSection.className = "header-menu";
    divHeaderMainSection.innerHTML = "MAIN";

    // create card for main
    const divCardMain = document.createElement("div");
    divCardMain.className = "card-menu";
    // create elements for card drink
    const headerMain = document.createElement("h2");
    const paraMainPrice = document.createElement("p");
    const image = document.createElement("img");
    const paraMainDescription = document.createElement("p");
    // add class name to elements
    headerMain.className = "card-menu-header";
    paraMainPrice.className = "card-menu-price";
    image.className = "card-menu-img";
    paraMainDescription.className = "card-menu-description";
    // add content to elements
    headerMain.innerHTML = "Spaghetti Bolognese";
    paraMainPrice.innerHTML = "$7.99";
    image.src = imageMain;
    image.alt = "image of a plate with spaghetti bolognese";
    paraMainDescription.innerHTML = "Delicious spaghetti in homemade Bolognese. Fresh herbs make the difference here.";
    // append elements to card
    divCardMain.append(headerMain);
    divCardMain.append(paraMainPrice);
    divCardMain.append(image);
    divCardMain.append(paraMainDescription);

    // create card for main
    const divCardMain2 = document.createElement("div");
    divCardMain2.className = "card-menu";
    // create elements for card drink
    const headerMain2 = document.createElement("h2");
    const paraMainPrice2 = document.createElement("p");
    const image2 = document.createElement("img");
    const paraMainDescription2 = document.createElement("p");
    // add class name to elements
    headerMain2.className = "card-menu-header";
    paraMainPrice2.className = "card-menu-price";
    image2.className = "card-menu-img";
    paraMainDescription2.className = "card-menu-description";
    // add content to elements
    headerMain2.innerHTML = "Salmon with Vegetables";
    paraMainPrice2.innerHTML = "$10.99";
    image2.src = imageMain2;
    image2.alt = "image of a plate with salmon and fresh vegetables";
    paraMainDescription2.innerHTML = "Healthy and delicious. Freshly caught and delivered straight to the table. Delicious vegetables to go with it.";
    // append elements to card
    divCardMain2.append(headerMain2);
    divCardMain2.append(paraMainPrice2);
    divCardMain2.append(image2);
    divCardMain2.append(paraMainDescription2);

    // create card for main
    const divCardMain3 = document.createElement("div");
    divCardMain3.className = "card-menu";
    // create elements for card drink
    const headerMain3 = document.createElement("h2");
    const paraMainPrice3 = document.createElement("p");
    const image3 = document.createElement("img");
    const paraMainDescription3 = document.createElement("p");
    // add class name to elements
    headerMain3.className = "card-menu-header";
    paraMainPrice3.className = "card-menu-price";
    image3.className = "card-menu-img";
    paraMainDescription3.className = "card-menu-description";
    // add content to elements
    headerMain3.innerHTML = "Schnitzel and Fries";
    paraMainPrice3.innerHTML = "$8.99";
    image3.src = imageMain3;
    image3.alt = "image of a plate with schnitzel and fries";
    paraMainDescription3.innerHTML = "A classic and not without reason. A tender, juicy schnitzel with fries";
    // append elements to card
    divCardMain3.append(headerMain3);
    divCardMain3.append(paraMainPrice3);
    divCardMain3.append(image3);
    divCardMain3.append(paraMainDescription3);

    // create card for main
    const divCardMain4 = document.createElement("div");
    divCardMain4.className = "card-menu";
    // create elements for card drink
    const headerMain4 = document.createElement("h2");
    const paraMainPrice4 = document.createElement("p");
    const image4 = document.createElement("img");
    const paraMainDescription4 = document.createElement("p");
    // add class name to elements
    headerMain4.className = "card-menu-header";
    paraMainPrice4.className = "card-menu-price";
    image4.className = "card-menu-img";
    paraMainDescription4.className = "card-menu-description";
    // add content to elements
    headerMain4.innerHTML = "Steak with Vegetables";
    paraMainPrice4.innerHTML = "$12.99";
    image4.src = imageMain4;
    image4.alt = "image of a plate with steak and vegetables";
    paraMainDescription4.innerHTML = "From well done to rare, as you like it, with delicious vegetables";
    // append elements to card
    divCardMain4.append(headerMain4);
    divCardMain4.append(paraMainPrice4);
    divCardMain4.append(image4);
    divCardMain4.append(paraMainDescription4);

    // create card for main
    const divCardMain5 = document.createElement("div");
    divCardMain5.className = "card-menu";
    // create elements for card drink
    const headerMain5 = document.createElement("h2");
    const paraMainPrice5 = document.createElement("p");
    const image5 = document.createElement("img");
    const paraMainDescription5 = document.createElement("p");
    // add class name to elements
    headerMain5.className = "card-menu-header";
    paraMainPrice5.className = "card-menu-price";
    image5.className = "card-menu-img";
    paraMainDescription5.className = "card-menu-description";
    // add content to elements
    headerMain5.innerHTML = "Chicken Wings and Hot Sauce";
    paraMainPrice5.innerHTML = "$9.99";
    image5.src = imageMain5;
    image5.alt = "image of a plate with chicken wings and hot sauce";
    paraMainDescription5.innerHTML = "Chicken Wings with Hot Sauce. You will love it.";
    // append elements to card
    divCardMain5.append(headerMain5);
    divCardMain5.append(paraMainPrice5);
    divCardMain5.append(image5);
    divCardMain5.append(paraMainDescription5);

    // create card for main
    const divCardMain6 = document.createElement("div");
    divCardMain6.className = "card-menu";
    // create elements for card drink
    const headerMain6 = document.createElement("h2");
    const paraMainPrice6 = document.createElement("p");
    const image6 = document.createElement("img");
    const paraMainDescription6 = document.createElement("p");
    // add class name to elements
    headerMain6.className = "card-menu-header";
    paraMainPrice6.className = "card-menu-price";
    image6.className = "card-menu-img";
    paraMainDescription6.className = "card-menu-description";
    // add content to elements
    headerMain6.innerHTML = "Vegan Wraps";
    paraMainPrice6.innerHTML = "$11.99";
    image6.src = imageMain6;
    image6.alt = "image of a plate with a delicious vegan wrap";
    paraMainDescription6.innerHTML = "Filled with feta cheese, tofu and fresh vegetables. Vegan doesn't have to be boring.";
    // append elements to card
    divCardMain6.append(headerMain6);
    divCardMain6.append(paraMainPrice6);
    divCardMain6.append(image6);
    divCardMain6.append(paraMainDescription6);

    divContent.append(divHeaderMainSection);
    divContent.append(divCardMain);
    divContent.append(divCardMain2);
    divContent.append(divCardMain3);
    divContent.append(divCardMain4);
    divContent.append(divCardMain5);
    divContent.append(divCardMain6);
}