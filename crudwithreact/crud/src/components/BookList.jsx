import React from "react";

const BookList = ({ contacts, delContact, getEdit }) => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map((item) => (
        <li key={item.id}>
          <img src={item.id} />
          <p>{item.name}</p>
          <p>{item.img}</p>
          <p>{item.phone}</p>
          <button onClick={() => delContact(item.id)}>Delete</button>
          <button onClick={() => getEdit(item.id)}>Edit</button>
        </li>
      ))}
    </div>
  );
};

export default BookList;
