function createAbout(container) {
  container.append(createCardContactUs());
  container.append(createContacts());
  container.append(createForm());
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
  header.textContent = "Any Questions?";
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
  const header = document.createElement("h2");
  const ul = document.createElement("ul");
  section.classList.add("about-contact-employees");
  header.classList.add("contact-employees-header");
  ul.classList.add("contact-employee-ul");
  header.textContent = "Contact directly";
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
  section.append(header, ul);
  return section;
}

function createForm() {
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const form = document.createElement("form");
  const divTextarea = document.createElement("div");
  const label = document.createElement("label");
  const textarea = document.createElement("textarea");
  const btnSubmit = document.createElement("button");

  section.classList.add("about-contact-form");
  header.classList.add("contact-form-header");
  divTextarea.classList.add("contact-form-div");
  form.classList.add("contact-form");
  label.classList.add("contact-form-label");
  textarea.classList.add("contact-form-textarea");
  btnSubmit.classList.add("contact-form-btn-submit");
  label.htmlFor = "contact-us-textarea";
  textarea.id = "contact-us-textarea";
  btnSubmit.id = "btn-submit";
  header.textContent = "What want to hear your opinion";
  label.textContent = "Contact Form";
  btnSubmit.textContent = "Send";
  textarea.name = "customer-message";
  textarea.placeholder = "Enter your message here...";
  textarea.rows = 5;
  textarea.style.resize = "none";

  divTextarea.append(label, textarea);
  form.append(divTextarea, btnSubmit);
  section.append(header, form);

  return section;
}

export { createAbout };
