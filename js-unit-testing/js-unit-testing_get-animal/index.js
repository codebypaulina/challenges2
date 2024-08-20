export function getAnimal(animalPluralName) {
  if (animalPluralName === "cats") {
    return `I totally love cats!`;
  }

  if (animalPluralName) {
    return `I like ${animalPluralName}!`;
  }

  return `I do not like animals at all!`;
}
