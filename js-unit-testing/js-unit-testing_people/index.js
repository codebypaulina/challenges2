export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people
    .filter((person) => person.age === age) // filtert people-Array & gibt nur die Personen mit dem angegebenen Alter zurück
    .map((person) => `${person.firstName} ${person.lastName}`); // erstellt ein Array mit vollständigen Namen
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => person.age > age) // filtert Personen, die älter als das angegebene Alter sind
    .map((person) => `${person.firstName} ${person.lastName}`); // erstellt ein Array mit vollständigen Namen
}

export function getPeopleByLastName(people, lastName) {
  return people
    .filter((person) => person.lastName === lastName)
    .map((person) => `${person.firstName} ${person.lastName}`);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  return people
    .sort((a, b) => a.age - b.age) // sortiert Personen nach Alter aufsteigend
    .map((people) => `${people.firstName} ${people.lastName}`); // erstellt ein Array mit vollständigen Namen
}
