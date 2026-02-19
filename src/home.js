function createHome(container, data) {
  container.append(createDescription(data.description));
  container.append(createEvents(data.events));
  container.append(createOpen(data.open));
  container.append(createLocation(data.location));
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
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const headerText = document.createTextNode(data.header);
  const icon = document.createElement("i");
  const ul = document.createElement("ul");
  section.classList.add("home-opening");
  header.classList.add("opening-header");
  icon.classList.add("fas", "fa-clock");
  ul.classList.add("opening-ul");
  icon.setAttribute("aria-hidden", "true");

  for (let i = 0; i < data.text.length; i++) {
    const li = document.createElement("li");
    li.textContent = data.text[i];
    li.classList.add("opening-li");
    ul.append(li);
  }
  header.append(icon, headerText);
  section.append(header, ul);
  return section;
}

function createLocation(data) {
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const icon = document.createElement("i");
  const headerText = document.createTextNode(data.header);
  const ul = document.createElement("ul");

  section.classList.add("home-location");
  header.classList.add("location-header");
  icon.classList.add("fas", "fa-map-marker-alt");
  icon.setAttribute("aria-hidden", "true");
  ul.classList.add("location-ul");

  for (let i = 0; i < data.text.length; i++) {
    const li = document.createElement("li");
    li.textContent = data.text[i];
    li.classList.add("location-li");
    ul.append(li);
  }
  header.append(icon, headerText);
  section.append(header, ul);
  return section;
}

export { createHome };
