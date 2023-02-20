//Establishing constants for Bios form//
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

///Creates function to have an array of objects already on the page (auto displays comments)

function displayComment() {
  showsArray.forEach((show) => {
    //created elements
    const showsContainer = document.querySelector(".shows-container");
    const showsListItem = document.createElement("li");
    const showsDate = document.createElement("h3");
    const showsDateValue = document.createElement("p");
    const showsVenue = document.createElement("h3");
    const showsVenueValue = document.createElement("h3");
    const showsLocation = document.createElement("p");
    const showsLocationValue = document.createElement("p");
    const showsButton = document.createElement("button");

    //gave element a classS
    commentName.classList.add("comment__name");
    commentDate.classList.add("comment__date");
    commentComment.classList.add("comment__comment");
    commentWrapper.classList.add("comments-container__wrapper");
    commentAvatar.classList.add("comments-container__avatar");
    commentMainWrapper.classList.add("comments-container__mainwrapper");

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
    showsListItem.appendChild(showsVenue);
    showsListItem.appendChild(showsLocation);
    showsListItem.appendChild(showsDateValue);
    showsListItem.appendChild(showsVenueValue);
    showsListItem.appendChild(showsLocationValue);
    showsListItem.appendChild(showsButton);
    showsContainer.appendChild(showsListItem);
  });
}
