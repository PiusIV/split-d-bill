import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function addFriend(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      id,
      balance: 0,
    };

    onAddFriend(newFriend);

    setImage("https://i.pravatar.cc/48");
    setName("");
  }
  return (
    <form action="" className="form-add-friend" onSubmit={addFriend}>
      <label htmlFor="friend-name">Friend's Name</label>
      <input
        type="text"
        name=""
        id="friend-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image">🖼 Image URL</label>
      <input
        type="text"
        name=""
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <div>
        <Button className="button" onClick={addFriend}>
          Add
        </Button>
      </div>
    </form>
  );
}

export default FormAddFriend;
