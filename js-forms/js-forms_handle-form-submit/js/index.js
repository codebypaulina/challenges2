console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const firstName = data.firstName;
  const ageBadnessSum = Number(data.age) + Number(data.badness);

  console.log(`The age-badness-sum of ${firstName} is ${ageBadnessSum}.`);

  event.target.reset();
  event.target.elements.firstName.focus();
});
