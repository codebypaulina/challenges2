console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDarkMode = document.querySelector('[data-js="dark-mode-button"]');
const buttonLightMode = document.querySelector('[data-js="light-mode-button"]');
const buttonToggleMode = document.querySelector('[data-js="toggle-button"]');

/**** dark mode ****/
buttonDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

/**** light mode ****/
buttonLightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

/**** toggle mode ****/
buttonToggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
