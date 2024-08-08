console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const tosSuccessMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideTosSuccessMessage() {
  tosSuccessMessage.setAttribute("hidden", "");
}

function showTosSuccessMessage() {
  tosSuccessMessage.removeAttribute("hidden");
}

hideTosError();
hideTosSuccessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formElements = event.target.elements;
  const tosChecked = event.target.tos.checked;

  if (!tosChecked) {
    showTosError();
    return;
  }
  showTosSuccessMessage();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

// hide & show error message again:
tosCheckbox.addEventListener("change", () => {
  if (tosCheckbox.checked) {
    hideTosError();
    return;
  }
  showTosError();
});
