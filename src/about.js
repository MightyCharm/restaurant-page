function createAbout(container, data) {
  console.log("createAbout");
  console.log(data);
  container.append(createCardContactUs(data.contactUs));
  container.append(createContacts(data.contactDirectly));
  container.append(createForm(data.contactForm));
}

function createCardContactUs(data) {
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const paraEmail = document.createElement("p");
  const iconEmail = document.createElement("i");
  const textEmail = document.createTextNode(data.text[0]);
  const paraPhone = document.createElement("p");
  const iconPhone = document.createElement("i");
  const textPhone = document.createTextNode(data.text[1]);
  section.classList.add("about-contact-us");
  header.classList.add("contact-us-header");
  paraEmail.classList.add("contact-us-email");
  iconEmail.classList.add("fas", "fa-envelope");
  paraPhone.classList.add("contact-us-phone");
  iconPhone.classList.add("fas", "fa-phone");
  iconEmail.setAttribute("aria-hidden", "true");
  iconPhone.setAttribute("aria-hidden", "true");
  header.textContent = data.header;

  paraEmail.append(iconEmail, textEmail);
  paraPhone.append(iconPhone, textPhone);
  section.append(header, paraEmail, paraPhone);
  return section;
}

function createContacts(data) {
  const section = document.createElement("section");
  const header = document.createElement("h2");
  const ul = document.createElement("ul");
  section.classList.add("about-contact-employees");
  header.classList.add("contact-employees-header");
  ul.classList.add("contact-employee-ul");
  header.textContent = data.header;
  for (let i = 0; i <= 2; i++) {
    const li = document.createElement("li");
    const position = document.createElement("p");
    const name = document.createElement("p");
    const email = document.createElement("p");
    li.classList.add("li-employee");
    position.classList.add("contact-position");
    name.classList.add("contact-name");
    email.classList.add("contact-email");

    position.textContent = data.text[i].position;
    name.textContent = data.text[i].name;
    email.textContent = data.text[i].email;

    li.append(position, name, email);
    ul.append(li);
  }
  section.append(header, ul);
  return section;
}

function createForm(data) {
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
  header.textContent = data.header;
  label.textContent = data.text[0];
  btnSubmit.textContent = data.text[1];
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
