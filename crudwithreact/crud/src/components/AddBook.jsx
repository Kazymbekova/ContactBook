import React, { useState } from "react";

function AddBook(props) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState(""); //создание состояние

  const handleName = (e) => {
    setName(e.target.value); //предаем значение
  };
  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  function handleContactAdd() {
    //
    if (!name.trim() || !img.trim() || !phone.trim()) {
      alert("заполните поля");
      return; //проверяем на содержание инпутов
    }
    const newContact = {
      //создаем обьект с заданными ключами
      name: name,
      image: img,
      phone: phone,
      id: Date.now(),
    }; //очищвем инпуты
    setName("");
    setImg("");
    setPhone("");
    props.handleContact(newContact); //передаем пропсы
  }
  return (
    <div>
      <h2>Add </h2>
      <input
        type="text"
        onChange={handleName}
        value={name}
        placeholder="Name"
      />
      <input type="text" onChange={handleImg} value={img} placeholder="Image" />
      <input
        type="number"
        onChange={handlePhone}
        value={phone}
        placeholder="Phone Numbers"
      />
      <button onClick={handleContactAdd}> Save</button>
    </div>
  );
}
export default AddBook;
