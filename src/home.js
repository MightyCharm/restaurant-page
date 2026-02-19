function createHome(container, data) {
  container.appendChild(createDescription(data.description));
  container.appendChild(createEvents(data.events));
  container.appendChild(createOpen(data.open));
}

function createDescription(data) {
  const sectionDescription = document.createElement("section");
  const header = document.createElement("h2");
  const headerText = document.createTextNode(data.header);
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  sectionDescription.className = "home-description";
  header.classList.add("description-header");
  icon.classList.add("fas", "fa-door-open");
  ul.classList.add("description-ul");
  icon.setAttribute("aria-hidden", "true");

  for (let i = 0; i < data.text.length; i++) {
    const li = document.createElement("li");
    li.textContent = data.text[i];
    li.classList.add("description-li");
    ul.append(li);
  }
  header.append(icon, headerText);
  sectionDescription.append(header, ul);
  return sectionDescription;
}

function createEvents(data) {
  const sectionLocation = document.createElement("section");
  const header = document.createElement("h2");
  const headerText = document.createTextNode(data.header);
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  sectionLocation.classList.add("home-event");
  header.classList.add("event-header");
  icon.classList.add("fas", "fa-calendar-alt");
  ul.classList.add("event-ul");
  icon.setAttribute("aria-hidden", "true");

  for (let i = 0; i < data.text.length; i++) {
    const li = document.createElement("li");
    li.textContent = data.text[i];
    li.classList.add("event-li");
    ul.append(li);
  }

  header.append(icon, headerText);
  sectionLocation.append(header, ul);
  return sectionLocation;
}

function createOpen(data) {
  const sectionOpen = document.createElement("section");
  const header = document.createElement("h2");
  const headerText = document.createTextNode(data.header);
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  const divLocation = document.createElement("div");
  const headerLocation = document.createElement("h2");
  const iconLocation = document.createElement("i");
  const headerLocationText = document.createTextNode(data.location.header);
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

  paraLocation.textContent = data.location.text;

  for (let i = 0; i < data.text.length; i++) {
    const li = document.createElement("li");
    li.textContent = data.text[i];
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
