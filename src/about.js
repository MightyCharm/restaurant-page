
const divContent = document.querySelector("#content");

export function createAbout() {
    clearGrid();
    createGridAbout(); // change grid layout
    createCardContactUs();
    createContacts()
};

function clearGrid() {
    let child = divContent.firstChild;
    while(child) {
        divContent.removeChild(child);
        child = divContent.firstChild;
    }
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
    const header2 = document.createElement("h3");
    const paraEmail = document.createElement("p");
    const paraEmailAddress = document.createElement("p");
    const paraPhone = document.createElement("p");
    const paraPhoneNumber = document.createElement("p");
    header.className = "card-contact-us-header1";
    header2.className = "card-contact-us-header2";
    paraEmail.className = "card-contact-us-email-left";
    paraEmailAddress.className = "card-contact-us-email-right";
    paraPhone.className = "card-contact-us-phone-left";
    paraPhoneNumber.className = "card-contact-us-phone-right";

    header.innerHTML = "Any Questions?";
    header2.innerHTML = "Contact us:";

    paraEmail.innerHTML = "Email:";
    paraEmailAddress.innerHTML = "sportsBar@webb.com";
    paraPhone.innerHTML = "Phone:";
    paraPhoneNumber.innerHTML = "999-R43al-Num6er";

    divCardContact.append(header);
    divCardContact.append(header2);
    divCardContact.append(paraEmail);
    divCardContact.append(paraEmailAddress);
    divCardContact.append(paraPhone);
    divCardContact.append(paraPhoneNumber);

    divContent.append(divCardContact);
}

function createContacts() {
    const divCardContact = document.createElement("div");
    divCardContact.className = "card contacts";

    const position = document.createElement("p");
    const name = document.createElement("p");
    const email = document.createElement("p");
    position.className = "contact-position";
    name.className = "contact-name";
    email.className = "contact-email";

    position.innerHTML = "Manager:";
    name.innerHTML = "Steven M.";
    email.innerHTML = "stevenSportsBar@wub.cmp";

    divCardContact.append(position);
    divCardContact.append(name);
    divCardContact.append(email);

    const divCardContact2 = document.createElement("p");
    divCardContact2.className = "card contacts";

    const position2 = document.createElement("p");
    const name2 = document.createElement("p");
    const email2 = document.createElement("p");
    position2.className = "contact-position";
    name2.className = "contact-name";
    email2.className = "contact-email";

    position2.innerHTML = "Cook:";
    name2.innerHTML = "Jimmy K.";
    email2.innerHTML = "jimmySportsBar@wub.cmp";

    divCardContact2.append(position2);
    divCardContact2.append(name2);
    divCardContact2.append(email2);

    const divCardContact3 = document.createElement("p");
    divCardContact3.className = "card contacts";

    const position3 = document.createElement("p");
    const name3 = document.createElement("p");
    const email3 = document.createElement("p");
    position3.className = "contact-position";
    name3.className = "contact-name";
    email3.className = "contact-email";

    position3.innerHTML = "Waitress:";
    name3.innerHTML = "Juana T.";
    email3.innerHTML = "juanaSportsBar@wub.cmp";

    divCardContact3.append(position3);
    divCardContact3.append(name3);
    divCardContact3.append(email3);

    divContent.append(divCardContact);
    divContent.append(divCardContact2);
    divContent.append(divCardContact3);
}



