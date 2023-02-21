//Establishing constants for Bios form//
const form = document.querySelector(".form-container__form");
const button = document.querySelector("button");
console.log(form);
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
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

///Creates function to have an array of objects already on the page (auto displays comments)

function displayComment() {
  commentsArray.forEach((comment) => {
    //created elements
    const commentContainer = document.querySelector(".comments-container");
    const commentName = document.createElement("h3");
    const commentDate = document.createElement("p");
    const commentComment = document.createElement("p");
    const commentWrapper = document.createElement("li");
    const commentAvatar = document.createElement("avatar");
    const commentMainWrapper = document.createElement("mainwrapper");

    //gave element a classS
    commentName.classList.add("comment__name");
    commentDate.classList.add("comment__date");
    commentComment.classList.add("comment__comment");
    commentWrapper.classList.add("comments-container__wrapper");
    commentAvatar.classList.add("comments-container__avatar");
    commentMainWrapper.classList.add("comments-container__mainwrapper");

    //Giving it a value
    commentName.innerText = comment.name;
    commentDate.innerText = comment.date;
    commentComment.innerText = comment.comment;

    //start appending the child to the parent

    commentWrapper.appendChild(commentName);
    commentWrapper.appendChild(commentDate);
    commentWrapper.appendChild(commentComment);
    commentMainWrapper.appendChild(commentAvatar);
    commentMainWrapper.appendChild(commentWrapper);
    commentContainer.appendChild(commentMainWrapper);
  });
}

// ///Function to replace parameters
// const commentBlock = (el, className, parent, innerText = "") => {
//   const newElement = document.createElement(el);

//   newElement.classList.add(className);

//   newElement.innerText = innerText;

//   return parent.appendChild(newElement);
// };

displayComment();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  const newComment = {
    date: new Date(), // search how to transform the raw date into the format desired
    name: event.target.name.value.trim(),
    comment: event.target.comment.value.trim(),
  };

  commentsArray.push(newComment);

  form.reset();

  displayComment();
});
