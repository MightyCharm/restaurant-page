
// global so it can be used in every function needed
const divContent = document.querySelector(".content");

export function createHome() {
    createGridHome(); // change grid layout
    createDescription();
    createOpen();
    createEvents();
}

function createGridHome() {
    divContent.style.gridTemplateColumns = "1fr 1fr 1fr";
    divContent.style.gridTemplateRow = "1fr";
    divContent.style.gridRowGap = "0rem"; // set back to zero if not needed
}

function createDescription() {
    const divCardDescription = document.createElement("div");
    divCardDescription.className = "card description";

    const header = document.createElement("h2");
    header.classList = "description-header";
    header.innerHTML = "SPORTS BAR FAIR PLAY";
    divCardDescription.append(header);

    const text = [
        "Fresh and Delicious Food",
        "Ice Cold and Hot Drinks",
        "Trendy Launch Area",
        "For Young and Old",
        "Child friendly"
    ];
    for(let i=0; i < text.length; i++) {
        const para = document.createElement("p");
        para.innerHTML = text[i];
        divCardDescription.append(para);
    };
    divContent.append(divCardDescription);
}

function createOpen() {
    const divCardOpen = document.createElement("div");
    divCardOpen.className = "card open";
    const header = document.createElement("h2");
    header.innerHTML = "Open:"
    divCardOpen.append(header);

    const text = [
        "Monday: 9am to 10pm",
        "Tuesday: 9am to 10pm",
        "Wednesday: 9am to 10pm",
        "Thursday: 9am to 10pm",
        "Friday: 9am to 11pm",
        "Saturday: 9am to 11pm",
        "Sunday: Closed"]
    for (let i=0; i<text.length; i++) {
        const para = document.createElement("p");
        para.innerHTML = text[i];
        divCardOpen.append(para);
    }
    divContent.append(divCardOpen);
}

function createEvents() {
    const divCardLocation = document.createElement("div");
    divCardLocation.className = "card events";

    const header = document.createElement("h2");
    header.innerHTML = "Events:";
    divCardLocation.append(header);

    const text = [
        "Armwrestling: First Week of every Month",
        "Darts Night: Second Week of every Month",
        "Table Hockey: Third Week of every Month",
        "Table Tennis: Forth Week of every Month",
        "All Events starting at 20pm",
        "Win Free Meals and Special Prices"
    ];

    for(let i=0; i< text.length; i++) {
        const para = document.createElement("p");
        para.innerHTML = text[i];
        divCardLocation.append(para);
    }

    const header2 = document.createElement("h2");
    header2.innerHTML = "Location:";
    const para = document.createElement("p");
    para.innerHTML = "Oberes Enztal 10, Purzelhausen 7555";
    divCardLocation.append(header2);
    divCardLocation.append(para);

    divContent.append(divCardLocation);
}