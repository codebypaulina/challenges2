console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const postSection = document.createElement("section");
postSection.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "HELLOOOOOO, I'M THE CONTENT OF THE NEW POST!";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postCreator = document.createElement("span");
postCreator.classList.add("post__username");
postCreator.textContent = "@username";

const postLikeButton = document.createElement("button");
postLikeButton.classList.add("post__button");
postLikeButton.type = "button";
postLikeButton.setAttribute("data-js", "like-button");
postLikeButton.textContent = "♥ Like";

postLikeButton.addEventListener("click", handleLikeButtonClick);

postSection.append(postContent, postFooter);
postFooter.append(postCreator, postLikeButton);

document.body.append(postSection);
