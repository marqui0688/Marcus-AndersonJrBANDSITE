//Establishing constants for Shows page//
const form = document.querySelector("form");
const button = document.querySelector("button");

//Preventing page from reloading//
const submitForm = (e) => {
  e.preventDefault();
};

//Creates our array of comments//
let showsArray = [
  {
    date: "Monday Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tuesday Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge",
    location: "San Francisco, CA ",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA ",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA ",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Lounge",
    location: "San Francisco, CA ",
  },
];

///Creates function to have an array of objects already on the page (auto displays shows)

function displayShow() {
  const showsContainer = document.querySelector(".shows-container");
  showsArray.forEach((show) => {
    //created elements

    const showsListItem = document.createElement("li");
    const showsDate = document.createElement("h3");
    const showsDateValue = document.createElement("p");
    const showsVenue = document.createElement("h3");
    const showsVenueValue = document.createElement("h3");
    const showsLocation = document.createElement("p");
    const showsLocationValue = document.createElement("p");
    const showsButton = document.createElement("button");

    //gave element a classS
    showsDate.classList.add("shows__date");
    showsVenue.classList.add("shows__venue");
    showsLocation.classList.add("shows__location");
    showsButton.classList.add("shows__button");
    showsListItem.classList.add("shows__list-item");
    showsDateValue.classList.add("shows__date-text");
    showsVenueValue.classList.add("shows__name-text");
    showsLocationValue.classList.add("shows__location-text");
    //Giving it a value
    showsDate.innerText = "DATE";
    showsDateValue.innerText = show.date;
    showsLocation.innerText = "LOCATION";
    showsLocationValue.innerText = show.location;
    showsVenue.innerText = "VENUE";
    showsVenueValue.innerText = show.venue;
    showsButton.innerText = "BUY TICKETS";

    //start appending the child to the parent

    showsListItem.appendChild(showsDate);
    showsListItem.appendChild(showsDateValue);
    showsListItem.appendChild(showsVenue);
    showsListItem.appendChild(showsVenueValue);
    showsListItem.appendChild(showsLocation);
    showsListItem.appendChild(showsLocationValue);
    showsListItem.appendChild(showsButton);

    showsContainer.appendChild(showsListItem);
  });
}

displayShow();
