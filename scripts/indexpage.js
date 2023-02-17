//Establishing constants for Bios form//
const form = document.querySelector("form");
const button = document.querySelector("button");

//Preventing page from reloading//
const submitForm = (e) => {
  e.preventDefault();
};

//Creates our array of comments//
let commentsArray = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough",
  },
];

///Creates function to have an array of objects already on the page (auto displays comments)

function displayComment() {
  commentsArray.forEach((comment) => {
    //created elements
    const commentName = document.createElement("h3");
    const commentDate = document.createElement("p");
    const commentComment = document.createElement("p");

    //gave element a classS
    commentName.classList.add("comment__name");
    commentDate.classList.add("comment__date");
    commentComment.classList.add("comment__comment");

    //Giving it a value
    commentName.innerText = comment.name;
    commentDate.innerText = comment.date;
    commentComment.innerText = comment.comment;

    //create a tag for list item for each of the comment
    const commentListItem = document.createElement("p");

    //create a class for the list item//
    commentListItem.classList.add(".comments__list");

    //start appending the child to the parent

    commentListItem.appendChild(commentName);
    commentListItem.appendChild(commentDate);
    commentListItem.appendChild(commentComment);

    //Accessing the UL
    const commentsList = document.querySelector(".comments__list");
    commentsList.appendChild(commentListItem);
  });
}

displayComment();
//
