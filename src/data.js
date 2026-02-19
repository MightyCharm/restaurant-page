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

const data = {
  home: {
    description: {
      header: "Visit Us",
      text: [
        "Fresh and Delicious Food",
        "Ice Cold and Hot Drinks",
        "Trendy Launch Area",
        "For Young and Old",
        "Child friendly",
      ],
    },

    events: {
      header: "Events",
      text: [
        "Armwrestling: First Week of every Month",
        "Darts Night: Second Week of every Month",
        "Table Hockey: Third Week of every Month",
        "Table Tennis: Forth Week of every Month",
        "All Events starting at 20pm",
        "Win Free Meals and Special Prices",
      ],
    },
    open: {
      header: "Open",
      text: [
        "Monday: 9am to 10pm",
        "Tuesday: 9am to 10pm",
        "Wednesday: 9am to 10pm",
        "Thursday: 9am to 10pm",
        "Friday: 9am to 11pm",
        "Saturday: 9am to 11pm",
        "Sunday: Closed",
      ],
    },
    location: {
      header: "Location",
      text: ["Oberes Enztal 10", "Purzelhausen 7555"],
    },
  },
  menu: {
    drinks: {
      header: "Drinks",
      cards: [
        {
          header: "Sparkeling Water",
          description:
            "From our own well especially for you. There is nothing more refreshing for the heart and senses.",
          price: "$1.99",
          imgSrc: imageDrink,
          imgAlt: "image of a delicious glass of water",
        },
        {
          header: "German Beer",
          description:
            "Wheat beer flown in directly from Munich. Taste tradition combined with modernity. Refreshing and tasty.",
          price: "$3.99",
          imgSrc: imageDrink2,
          imgAlt: "ice cold beer in a big glass",
        },
        {
          header: "Chianti",
          description:
            "Our italian special. A classic red wine from Tuscany made from Sangiovese grapes. Give it a try, you won't regret it.",
          price: "$2.99",
          imgSrc: imageDrink3,
          imgAlt: "a wine glass filled with delicious wine",
        },
      ],
    },
    sides: {
      header: "Sides",
      cards: [
        {
          header: "Salad",
          description:
            "Vegetables fresh from the farmer around the corner. Healthy and delicious.",
          price: "$4.99",
          imgSrc: imageSide,
          imgAlt: "a fresh and delicious salad",
        },
        {
          header: "Pumpkin Soup",
          description:
            "Pumpkin soup made according to an old family recipe. Ginger optional.",
          price: "$3.99",
          imgSrc: imageSide2,
          imgAlt: "a delicious pumpkin soup",
        },
        {
          header: "Waffles",
          description:
            "Freshly prepared waffles with cream and chocolate sauce. Simply delicious.",
          price: "$5.99",
          imgSrc: imageSide3,
          imgAlt: "fresh waffles with whipped cream and chocolate sauce",
        },
      ],
    },
    main: {
      header: "Main",
      cards: [
        {
          header: "Spaghetti Bolognese",
          description:
            "Delicious spaghetti in homemade Bolognese. Fresh herbs make the difference here.",
          price: "$7.99",
          imgSrc: imageMain,
          imgAlt: "a plate with spaghetti bolognese",
        },
        {
          header: "Salmon with Vegetable",
          description:
            "Healthy and delicious. Freshly caught and delivered straight to the table. Delicious vegetables to go with it.",
          price: "$10.99",
          imgSrc: imageMain2,
          imgAlt: "a plate with salmon and fresh vegetables",
        },
        {
          header: "Schnitzel and Fries",
          description:
            "A classic and not without reason. A tender, juicy schnitzel with fries.",
          price: "$8.99",
          imgSrc: imageMain3,
          imgAlt: "a plate with schnitzel and fries",
        },
        {
          header: "Steak with Vegetables",
          description: "Steak, fresh from the grill with delicious vegetables.",
          price: "$12.99",
          imgSrc: imageMain4,
          imgAlt: "a plate with steak and vegetables",
        },
        {
          header: "Chicken Wings and Hot Sauce",
          description: "Chicken Wings with Hot Sauce. You will love it.",
          price: "$9.99",
          imgSrc: imageMain5,
          imgAlt: "a plate with chicken wings and hot sauce",
        },
        {
          header: "Vegetarian Wraps",
          description:
            "Filled with feta cheese, tofu and fresh vegetables. Vegan doesn't have to be boring.",
          price: "$11.99",
          imgSrc: imageMain6,
          imgAlt: "image of a plate with a delicious vegan wrap",
        },
      ],
    },
  },
  about: {
    contactUs: {
      header: "Any Questions?",
      text: ["sportsBar@webb.com", "444-Fake-Number"],
    },
    contactDirectly: {
      header: "Contact directly",
      text: [
        {
          position: "Manager",
          name: "Steven M.",
          email: "stevenSportsBar@wub.cmp",
        },
        {
          position: "Cook",
          name: "Jimmy K.",
          email: "jimmySportsBar@wub.cmp",
        },
        {
          position: "Waitress",
          name: "Juana T.",
          email: "juanaSportsBar@wub.cmp",
        },
      ],
    },
    contactForm: {
      header: "We want to hear your opinion",
      text: ["Contact Form", "Send"],
    },
  },
};

export { data };
