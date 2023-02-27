const form = document.querySelector(".form-container__form");
const button = document.querySelector("button");

///Creates function to have an array of objects already on the page (auto displays comments)

function displayComment(comments) {
  const commentContainer = document.querySelector(".comments-container");
  commentContainer.innerHTML = "";
  comments.forEach((comment) => {
    //created elements

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

    commentName.innerText = comment.name;
    commentDate.innerText = new Date(comment.timestamp).toDateString();
    commentComment.innerText = comment.comment;

    commentWrapper.appendChild(commentName);
    commentWrapper.appendChild(commentDate);
    commentWrapper.appendChild(commentComment);
    commentMainWrapper.appendChild(commentAvatar);
    commentMainWrapper.appendChild(commentWrapper);
    commentContainer.appendChild(commentMainWrapper);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  const newComment = {
    name: event.target.name.value.trim(),
    comment: event.target.comment.value.trim(),
  };

  ///////////////  API   //////////////
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments/?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4",
      newComment
    )
    .then((response) => {
      console.log(response);
      axios
        .get(
          "https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
        )
        .then((response) => {
          console.log(response);
          displayComment(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((err) => console.log(err));

  form.reset();
});

axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
  )
  .then((response) => {
    console.log(response);
    displayComment(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
