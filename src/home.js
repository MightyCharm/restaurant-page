
export function createHome() {
    // get main container for content
    const divContent = document.querySelector(".content");
    console.log(divContent);

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




    divContent.append(divCardDescription);
    divContent.append(divCardOpen);
    divContent.append(divCardLocation);
    console.log(divContent);

    // Image by <a href="https://pixabay.com/users/julientromeur-3630051/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4289545">Julien Tromeur</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4289545">Pixabay</a>
    //Foto von Nikita Belokhonov: https://www.pexels.com/de-de/foto/stadt-restaurant-strasse-sommer-5942754/
}