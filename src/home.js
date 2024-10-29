
// global so it can be used in every function needed
const divContent = document.querySelector(".content");

export function createHome() {
    clearGrid();
    createGridHome(); // change grid layout
    createDescription();
    createOpen();
    createEvents();
}

function clearGrid() {
    let child = divContent.firstChild;
    while (child) {
        divContent.removeChild(child);
        child = divContent.firstChild;
    }
}

function createGridHome() {
    divContent.style.gridTemplateColumns = "1fr 1fr 1fr";
    divContent.style.gridTemplateRow = "1fr";
    divContent.style.gridRowGap = "0rem"; // set back to zero if not needed
}

function createDescription() {
    // create card description
    const divCardDescription = document.createElement("div");
    divCardDescription.className = "card description";
    const header = document.createElement("h2");
    const para = document.createElement("p");
    const para2 = document.createElement("p");
    const para3 = document.createElement("p");
    const para4 = document.createElement("p");
    header.innerHTML = "Sports Bar Fair Play";
    para.innerHTML = "Fresh and Delicious Food";
    para2.innerHTML = "Ice Cold and Hot Drinks";
    para3.innerHTML = "Trendy Launch Area";
    para4.innerHTML = "For Young and Old";
    divCardDescription.append(header);
    divCardDescription.append(para);
    divCardDescription.append(para2);
    divCardDescription.append(para3);
    divCardDescription.append(para4);

    divContent.append(divCardDescription);
}

function createOpen() {
    // create card open
    const divCardOpen = document.createElement("div");
    divCardOpen.className = "card open"
    const headerOpen = document.createElement("h2");
    const paraOpen1 = document.createElement("p");
    const paraOpen2 = document.createElement("p");
    const paraOpen3 = document.createElement("p");
    const paraOpen4 = document.createElement("p");
    const paraOpen5 = document.createElement("p");
    const paraOpen6 = document.createElement("p");
    const paraOpen7 = document.createElement("p");
    headerOpen.innerHTML = "Open";
    paraOpen1.innerHTML = "Monday: 9am to 10pm";
    paraOpen2.innerHTML = "Tuesday: 9am to 10pm";
    paraOpen3.innerHTML = "Wednesday: 9am to 10pm";
    paraOpen4.innerHTML = "Thursday: 9am to 10pm";
    paraOpen5.innerHTML = "Friday: 9am to 11pm";
    paraOpen6.innerHTML = "Saturday: 9am to 11pm";
    paraOpen7.innerHTML = "Sunday: Closed";
    divCardOpen.append(headerOpen);
    divCardOpen.append(paraOpen1);
    divCardOpen.append(paraOpen2);
    divCardOpen.append(paraOpen3);
    divCardOpen.append(paraOpen4);
    divCardOpen.append(paraOpen5);
    divCardOpen.append(paraOpen6);
    divCardOpen.append(paraOpen7);

    divContent.append(divCardOpen);
}

function createEvents() {
    // create card location
    const divCardLocation = document.createElement("div");
    divCardLocation.className = "card location";
    const headerLocation = document.createElement("h2");
    const paraLocation1 = document.createElement("p");
    const paraLocation2 = document.createElement("p");
    const paraLocation3 = document.createElement("p");
    const paraLocation4 = document.createElement("p");
    const paraLocation5 = document.createElement("p");
    const paraLocation6 = document.createElement("p");
    const headerLocation2 = document.createElement("h2");
    const paraLocation7 = document.createElement("p");
    headerLocation.innerHTML = "Events:"
    paraLocation1.innerHTML = "Armwrestling: First Week of every Month"
    paraLocation2.innerHTML = "Darts Night: Second Week of every Month"
    paraLocation3.innerHTML = "Table Hockey: Third Week of every Month"
    paraLocation4.innerHTML = "Table Tennis: Forth Week of every Month"
    paraLocation5.innerHTML = "All Events starting at 20pm"
    paraLocation6.innerHTML = "Win Free Meals and Special Prices";
    headerLocation2.innerHTML = "Location:";
    paraLocation7.innerHTML = "Oberes Enztal 10, Purzelhausen 7555";
    divCardLocation.append(headerLocation);
    divCardLocation.append(paraLocation1);
    divCardLocation.append(paraLocation2);
    divCardLocation.append(paraLocation3);
    divCardLocation.append(paraLocation4);
    divCardLocation.append(paraLocation5);
    divCardLocation.append(paraLocation6);
    divCardLocation.append(headerLocation2);
    divCardLocation.append(paraLocation7);

    divContent.append(divCardLocation);
}