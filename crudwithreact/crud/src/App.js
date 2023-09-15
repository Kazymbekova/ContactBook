import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import BookEdit from "./components/BookEdit";

function App() {
  const [contacts, setContact] = useState([]);
  const [edits, setEdit] = useState(null);
  // Add
  function handleContact(newContact) {
    let newContacts = [...contacts];
    newContacts.push(newContact);
    setContact(newContacts); //функция добавления
  }
  // Delete
  function delContact(id) {
    let delContacts = contacts.filter((item) => item.id === !id);
    setContact(delContacts);
  }
  //Edit
  function getEdit(id) {
    let editContact = contacts.find((item) => item.id === id);
    setEdit(editContact);
  }
  function saveChanges(newContact) {
    let editNewContact = [...contacts];
    editNewContact = editNewContact.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      } else {
        return item;
      }
    });
    setContact(editNewContact);
    setEdit(null);
  }
  return (
    <div className="App">
      <AddBook handleContact={handleContact} />
      <BookList contacts={contacts} delContact={delContact} getEdit={getEdit} />
      {edits ? <BookEdit edits={edits} saveChanges={saveChanges} /> : null}
    </div>
  );
}

export default App;
