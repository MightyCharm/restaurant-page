function createHome(container) {
  container.appendChild(createDescription());
  container.appendChild(createEvents());
  container.appendChild(createOpen());
}

function createDescription() {
  const sectionDescription = document.createElement("section");
  const header = document.createElement("h2");
  const ul = document.createElement("ul");
  sectionDescription.className = "home-description";
  header.classList = "description-header";
  ul.classList.add("description-ul");

  header.textContent = "Visit Us";

  const text = [
    "Fresh and Delicious Food",
    "Ice Cold and Hot Drinks",
    "Trendy Launch Area",
    "For Young and Old",
    "Child friendly",
  ];
  for (let i = 0; i < text.length; i++) {
    const li = document.createElement("li");
    li.textContent = text[i];
    li.classList.add("description-li");
    ul.append(li);
  }
  sectionDescription.appendChild(header);
  sectionDescription.appendChild(ul);
  return sectionDescription;
}

function createEvents() {
  const sectionLocation = document.createElement("section");
  const header = document.createElement("h2");
  const ul = document.createElement("ul");

  sectionLocation.className = "home-event";
  header.classList.add("event-header");
  ul.classList.add("event-ul");

  header.textContent = "Events";

  const text = [
    "Armwrestling: First Week of every Month",
    "Darts Night: Second Week of every Month",
    "Table Hockey: Third Week of every Month",
    "Table Tennis: Forth Week of every Month",
    "All Events starting at 20pm",
    "Win Free Meals and Special Prices",
  ];

  for (let i = 0; i < text.length; i++) {
    const li = document.createElement("li");
    li.textContent = text[i];
    li.classList.add("event-li");
    ul.append(li);
  }
  sectionLocation.appendChild(header);
  sectionLocation.appendChild(ul);
  return sectionLocation;
}

function createOpen() {
  const sectionOpen = document.createElement("section");
  const header = document.createElement("h2");
  const ul = document.createElement("ul");
  const divLocation = document.createElement("div");
  const headerLocation = document.createElement("h3");
  const paraLocation = document.createElement("p");

  sectionOpen.classList.add("home-opening");
  header.classList.add("opening-header");
  ul.classList.add("opening-ul");
  divLocation.classList.add("opening-div-location");
  headerLocation.classList.add("opening-header-location");
  paraLocation.classList.add("opening-para-location");

  header.textContent = "Open";
  headerLocation.textContent = "Location";
  paraLocation.textContent = "Oberes Enztal 10, Purzelhausen 7555";

  const text = [
    "Monday: 9am to 10pm",
    "Tuesday: 9am to 10pm",
    "Wednesday: 9am to 10pm",
    "Thursday: 9am to 10pm",
    "Friday: 9am to 11pm",
    "Saturday: 9am to 11pm",
    "Sunday: Closed",
  ];
  for (let i = 0; i < text.length; i++) {
    const li = document.createElement("li");
    li.textContent = text[i];
    li.classList.add("opening-li");
    ul.append(li);
  }

  divLocation.appendChild(headerLocation);
  divLocation.appendChild(paraLocation);

  sectionOpen.appendChild(header);
  sectionOpen.appendChild(ul);
  sectionOpen.appendChild(divLocation);
  return sectionOpen;
}

export { createHome };
