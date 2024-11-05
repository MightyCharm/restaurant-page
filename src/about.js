
const divContent = document.querySelector("#content");

export function createAbout() {
    createGridAbout(); // change grid layout
    createCardContactUs();
    createContacts()
};

/* overall grid container for whole page section content */
function createGridAbout() {
    divContent.style.gridTemplateColumns = "1fr";
    divContent.style.gridRowGap = "5rem";
}

function createCardContactUs() {
    const divCardContact= document.createElement("div");
    divCardContact.className = "card contact-us";
    const header = document.createElement("h2");
    const paraEmail = document.createElement("p");
    const paraPhone = document.createElement("p");
    header.className = "card-contact-us-header";
    paraEmail.className = "card-contact-us-email";
    paraPhone.className = "card-contact-us-phone";

    header.innerHTML = "Any Questions? Contact us:";

    paraEmail.innerHTML = "Email: sportsBar@webb.com";
    paraPhone.innerHTML = "Phone: 444-Fake-Number";

    divCardContact.append(header);
    divCardContact.append(paraEmail);
    divCardContact.append(paraPhone);

    divContent.append(divCardContact);
}

function createContacts() {

    const contactsPosition = [
        "Manager:",
        "Cook:",
        "Waitress:"
    ];
    const contactsName = [
        "Steven M.",
        "Jimmy K.",
        "Juana T."

    ];
    const contactsEmail = [
        "stevenSportsBar@wub.cmp",
        "jimmySportsBar@wub.cmp",
        "juanaSportsBar@wub.cmp"
    ];

    for(let i=0; i<=2; i++) {
        const divCardContact = document.createElement("div");
        divCardContact.className = "card contacts";

        const position = document.createElement("p");
        const name = document.createElement("p");
        const email = document.createElement("p");
        position.classList = "contact-position";
        name.className = "contact-name";
        email.className = "contact-email";

        position.innerHTML = contactsPosition[i];
        name.innerHTML = contactsName[i];
        email.innerHTML = contactsEmail[i];

        divCardContact.append(position);
        divCardContact.append(name);
        divCardContact.append(email);

        divContent.append(divCardContact);
    }
}