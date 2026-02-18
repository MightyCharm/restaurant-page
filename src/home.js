function createHome(container) {
  container.appendChild(createDescription());
  container.appendChild(createEvents());
  container.appendChild(createOpen());
}

function createDescription() {
  const sectionDescription = document.createElement("section");
  const header = document.createElement("h2");
  const headerText = document.createTextNode("Visit Us");
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  sectionDescription.className = "home-description";
  header.classList.add("description-header");
  icon.classList.add("fas", "fa-door-open");
  ul.classList.add("description-ul");
  icon.setAttribute("aria-hidden", "true");

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
  header.append(icon, headerText);
  sectionDescription.append(header, ul);
  return sectionDescription;
}

function createEvents() {
  const sectionLocation = document.createElement("section");
  const header = document.createElement("h2");
  const headerText = document.createTextNode("Events");
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  sectionLocation.classList.add("home-event");
  header.classList.add("event-header");
  icon.classList.add("fas", "fa-calendar-alt");
  ul.classList.add("event-ul");
  icon.setAttribute("aria-hidden", "true");

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

  header.append(icon, headerText);
  sectionLocation.append(header, ul);
  return sectionLocation;
}

function createOpen() {
  const sectionOpen = document.createElement("section");
  const header = document.createElement("h2");
  const headerText = document.createTextNode("Open");
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  const divLocation = document.createElement("div");
  const headerLocation = document.createElement("h2");
  const iconLocation = document.createElement("i");
  const headerLocationText = document.createTextNode("Location");
  const paraLocation = document.createElement("p");

  sectionOpen.classList.add("home-opening");
  header.classList.add("opening-header");
  icon.classList.add("fas", "fa-clock");
  ul.classList.add("opening-ul");
  divLocation.classList.add("opening-div-location");
  headerLocation.classList.add("opening-header-location");
  iconLocation.classList.add("fas", "fa-map-marker-alt");
  paraLocation.classList.add("opening-para-location");
  icon.setAttribute("aria-hidden", "true");

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

  header.append(icon, headerText);
  headerLocation.append(iconLocation, headerLocationText);
  divLocation.append(headerLocation, paraLocation);
  sectionOpen.append(header, ul, divLocation);
  return sectionOpen;
}

export { createHome };
