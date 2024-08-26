/********************************************** TypeScript Coding Challenge: Address Book Application *********************************************
 
***** Challenge Overview **************************************************************************************************************************
In this coding challenge, you will leverage TypeScript's static typing system to create a simple, type-safe address book application.
This challenge is designed to reinforce the basics of TypeScript, including working with types, interfaces, and arrays.
Your application will allow users to add, remove, and search for contacts in an address book.

***** Requirements *********************************************************************************************************************************
[x] 1. Define Contact Interface: Create an interface named Contact with the following properties:
   - id: A unique identifier for the contact (type number).
   - name: The name of the contact (type string).
   - email: The email address of the contact (type string).
   - phone: The phone number of the contact (optional, type string).
[x] 2. Implement Add Contact Function: Write a function named addContact that takes a Contact object and adds it to an array of Contact objects.
   Ensure that each contact has a unique id.
[x] 3. Implement Remove Contact Function:
   Write a function named removeContact that takes a contact id and removes the contact with that id from the address book.
[x] 4. Implement Search Function:
   Write a function named searchContacts that searches for contacts by name and returns an array of contacts that match the search query.
   The search should be case-insensitive.
[x] 5. Optional: Enhance Search Functionality:
   Extend the searchContacts function to allow searching by email or phone number in addition to the name.

***** Instructions **********************************************************************************************************************************
[x] 1. Begin by defining the Contact interface according to the requirements specified above.
[x] 2. Implement the addContact, removeContact, and searchContacts functions, making sure to adhere to the type definitions you've created.
[x] 3. Ensure your functions handle edge cases, such as attempting to add a contact with an existing id or trying to remove a contact that doesn't exist.
4. Test your application by creating a few contacts, removing a contact, and searching for contacts by various attributes.

***** Evaluation Criteria ****************************************************************************************************************************
- Type Safety: Proper use of TypeScript features to enforce type constraints throughout the application.
- Functionality: The application should correctly add, remove, and search for contacts as specified.
- Code Quality: The code should be well-organized, properly commented, and easy to read.
- Edge Case Handling: The application should gracefully handle and report errors or invalid operations.

***** Submission *************************************************************************************************************************************
Submit your TypeScript file containing the implementation of the address book application.
Ensure your code is well-commented to explain your logic and decisions.

******************************************************************************************************************************************************/

// Starter Code:

// requirement 1: Define Contact Interface
interface Contact {
  // TODO: Define the Contact interface
  id: number;
  name: string;
  email: string;
  phone?: string; // optional
}

let addressBook: Contact[] = [];

// requirement 2: Implement Add Contact Function:
/* 
- function addContact soll einen Kontakt vom Typ Contact entgegennehmen & ihn zum Array addressBook hinzufügen
- jeder Kontakt muss eine eindeutige id haben
- wenn die id bereits existiert, sollte der Kontakt nicht hinzugefügt werden; evtl. Fehlermeldung ausgeben
*/
function addContact(contact: Contact): void {
  // TODO: Implement the addContact function
  const existingContact = addressBook.find((c) => c.id === contact.id);

  if (existingContact) {
    console.log(`Contact with id ${contact.id} already exists.`);
    return;
  }

  addressBook.push(contact);
  console.log(`Contact with id ${contact.id} added successfully.`);
}

// requirement 3: Implement Remove Contact Function
/*
- function removeContact soll eine Kontakt-ID entgegennehmen & den entsprechenden Kontakt aus dem adressBook-Array entfernen
- wenn kein Kontakt mit der angegebenen ID existiert, soll eine Fehlermeldung ausgegeben werden
*/
function removeContact(id: number): void {
  // TODO: Implement the removeContact function
  const contactIndex = addressBook.findIndex((c) => c.id === id); // sucht den Index des Kontakts im Array, der die angegebene ID hat

  if (contactIndex === -1) {
    // wenn der Index -1 ist, dann existiert kein Kontakt mit dieser ID => Fehlermeldung wird ausgegeben
    console.log(`Contact with id ${id} not found.`);
    return;
  }

  addressBook.splice(contactIndex, 1); // andernfalls wird dieser Kontakt mit splice aus dem Array entfernt
  console.log(`Contact with id ${id} removed successfully.`);
}

// requirement 4: Implement Search Function
/*
- function searchContacts soll eine Suchanfrage (query) entgegennehmen & eine Liste der Kontakte zurückgeben, deren Namen die Suchanfrage beinhalten
- die Suche soll case-insensitive sein (Groß-/Kleinschreibung ignorieren)
 */
function searchContacts(query: string): Contact[] {
  // TODO: Implement the searchContacts function
  const lowerCaseQuery = query.toLocaleLowerCase(); // konvertiert Suchanfrage in Kleinbuchstaben

  // nur diejenigen Kontakte zurückgeben, die in der Suchanfrage enthalten sidn
  return addressBook.filter((contact) => {
    const matchesName = contact.name
      .toLocaleLowerCase()
      .includes(lowerCaseQuery);

    // requirement 5: Enhance Search Functionality (allow searching by email or phone number in addition to the name)
    const matchesEmail = contact.email
      .toLocaleLowerCase()
      .includes(lowerCaseQuery);
    const matchesPhone = contact.phone
      ? contact.phone.toLocaleLowerCase().includes(lowerCaseQuery)
      : false;

    return matchesName || matchesEmail || matchesPhone;
  });
}

// TEST
// Testdaten hinzufügen: addContact
addContact({
  id: 1,
  name: "John Doe",
  email: "john@web.de",
  phone: "11111111",
});
addContact({
  id: 2,
  name: "Jane Doe",
  email: "jane@web.de",
  phone: "22222222",
});
addContact({ id: 3, name: "Max Mustermann", email: "max@web.de" });
addContact({
  id: 4,
  name: "Paulina Czeschla",
  email: "paulina@web.de",
  phone: "44444444",
});
// Testdaten hinzufügen: mit bereits vorhandener ID
addContact({ id: 1, name: "John Smith", email: "john@web.de" });

// Kontakt mit ID 2 entfernen: removeContact
removeContact(2);

// Kontakte suchen: searchContacts
// nach Namen suchen
console.log(searchContacts("paulina"));
// nach Mail suchen
console.log(searchContacts("john@web.de"));
// nach Nummer suchen
console.log(searchContacts("11111111"));
// nach Namen suchen, der entfernt wurde
console.log(searchContacts("jane"));
