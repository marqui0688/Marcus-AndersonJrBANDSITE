//Establishing constants for Shows page//
const form = document.querySelector("form");
const button = document.querySelector("button");

///Creates function to have an array of objects already on the page (auto displays shows)

function displayShow(shows) {
  const showsContainer = document.querySelector(".shows-container");
  shows.forEach((show) => {
    const showsListItem = document.createElement("li");
    const showsDate = document.createElement("h3");
    const showsDateValue = document.createElement("p");
    const showsVenue = document.createElement("h3");
    const showsVenueValue = document.createElement("h3");
    const showsLocation = document.createElement("p");
    const showsLocationValue = document.createElement("p");
    const showsButton = document.createElement("button");

    showsDate.classList.add("shows__date");
    showsVenue.classList.add("shows__venue");
    showsLocation.classList.add("shows__location");
    showsButton.classList.add("shows__button");

    showsListItem.classList.add("shows__list-item");

    showsDateValue.classList.add("shows__date-text");
    showsVenueValue.classList.add("shows__name-text");
    showsLocationValue.classList.add("shows__location-text");

    showsDate.innerText = "DATE";
    showsDateValue.innerText = new Date(show.date).toDateString();
    showsLocation.innerText = "LOCATION";
    showsLocationValue.innerText = show.location;
    showsVenue.innerText = "VENUE";
    showsVenueValue.innerText = show.place;
    showsButton.innerText = "BUY TICKETS";

    showsListItem.appendChild(showsDate);
    showsListItem.appendChild(showsDateValue);
    showsListItem.appendChild(showsVenue);
    showsListItem.appendChild(showsVenueValue);
    showsListItem.appendChild(showsLocation);
    showsListItem.appendChild(showsLocationValue);
    showsListItem.appendChild(showsButton);

    showsContainer.appendChild(showsListItem);

    showsListItem.addEventListener("click", () => {
      console.log("click");
      const selected = document.querySelector(".shows__list-item--selected");
      if (selected) {
        selected.classList.remove("shows__list-item--selected");
        console.log(selected);
      }
      showsListItem.classList.add("shows__list-item--selected");
      console.log(showsListItem);
    });
  });
}

axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
  )
  .then((response) => {
    console.log(response.data);
    displayShow(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
