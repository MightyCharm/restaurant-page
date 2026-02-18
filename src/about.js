function createAbout(container) {
  container.append(createCardContactUs());
  container.append(createContacts());
}

function createCardContactUs() {
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const paraEmail = document.createElement("p");
  const paraPhone = document.createElement("p");
  section.classList.add("about-contact-us");
  header.classList.add("contact-us-header");
  paraEmail.classList.add("contact-us-email");
  paraPhone.classList.add("contact-us-phone");
  header.textContent = "Any Questions? Contact us:";
  paraEmail.textContent = "Email: sportsBar@webb.com";
  paraPhone.textContent = "Phone: 444-Fake-Number";

  section.append(header, paraEmail, paraPhone);
  return section;
}

function createContacts() {
  const contactsPosition = ["Manager", "Cook", "Waitress"];
  const contactsName = ["Steven M.", "Jimmy K.", "Juana T."];
  const contactsEmail = [
    "stevenSportsBar@wub.cmp",
    "jimmySportsBar@wub.cmp",
    "juanaSportsBar@wub.cmp",
  ];
  const section = document.createElement("section");
  section.classList.add("about-contact-employees");

  const ul = document.createElement("ul");
  ul.classList.add("ul-employee");
  for (let i = 0; i <= 2; i++) {
    const li = document.createElement("li");
    const position = document.createElement("p");
    const name = document.createElement("p");
    const email = document.createElement("p");
    li.classList.add("li-employee");
    position.classList.add("contact-position");
    name.classList.add("contact-name");
    email.classList.add("contact-email");

    position.textContent = contactsPosition[i];
    name.textContent = contactsName[i];
    email.textContent = contactsEmail[i];

    li.append(position, name, email);
    ul.append(li);
  }
  section.append(ul);
  return section;
}

export { createAbout };
