import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  //A function that gets the event action
  //first thind is to prevent the default action that is to reload the entire page
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤼 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />

      <label> 📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)} />
      {/* This is the only button inside this form , thus it will be treated as a submit button
            and the form will call onSubmit whenever this button is pressed  */}
      <Button>Add</Button>
    </form>
  );
}
