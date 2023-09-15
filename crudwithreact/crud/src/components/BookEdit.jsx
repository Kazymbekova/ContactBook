import React, { useState } from "react";

const BookEdit = ({ edits, saveChanges }) => {
  const [editBook, setEditBook] = useState(edits);
  //
  function editName(e) {
    setEditBook({
      ...editBook,
      name: e.target.value,
    });
  }
  function editImg(e) {
    setEditBook({
      ...editBook,
      image: e.target.value,
    });
  }
  function editPhone(e) {
    setEditBook({
      ...editBook,
      phone: e.target.value,
    });
  }
  function handleSaveChanges() {
    saveChanges(editBook);
  }
  return (
    <div>
      <h3>Edit</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={editName}
        value={editBook.name}
      />
      <h3>Edit</h3>
      <input
        type="text"
        placeholder="Img"
        onChange={editImg}
        value={editBook.image}
      />
      <h3>Edit</h3>
      <input
        type="number"
        placeholder="Phone Numbers"
        onChange={editPhone}
        value={editBook.phone}
      />
      <button onClick={handleSaveChanges}>Save</button>
    </div>
  );
};

export default BookEdit;
