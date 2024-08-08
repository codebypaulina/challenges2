console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToastMessage = document.createElement("li");
  newToastMessage.className = "toast-container__message";
  newToastMessage.textContent =
    "WHAT'S UUUUUUUUUUUUP? I'M A NEW TOAST MESSAGE!";
  toastContainer.append(newToastMessage);
  return newToastMessage;
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
