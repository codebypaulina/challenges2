console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const imageElementStar = document.createElement("img");

    imageElementStar.addEventListener("click", () => {
      renderStars(i);
    });

    if (i <= filledStars) {
      imageElementStar.src = "./assets/star-filled.svg";
    } else {
      imageElementStar.src = "./assets/star-empty.svg";
    }

    starContainer.append(imageElementStar);
  }
  //--^-- your code here --^--
}

renderStars();
