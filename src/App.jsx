import { useState } from "react";
import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7000,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20_000,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  // const [isDark, setIsDark] = useState(false);

  function handleOpen() {
    setIsOpen((prev) => !prev);
    // console.log(isOpen);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsOpen(false);
  }

  const handleSelect = (friend) => {
    // setSelectedFriend(friend);
    // setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

    // my fav way of writin this
    setSelectedFriend((cur) => cur?.id !== friend.id && friend);
    setIsOpen(false);
  };

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        selectedFriend.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  // function handleDark() {
  //   setIsDark((prev) => !prev);
  // }

  return (
    <div className={`app`}>
      <div className="sidebar">
        {/* <nav onClick={handleDark}>
          <h1>yooo</h1>
        </nav> */}
        <FriendsList
          friends={friends}
          onSelect={handleSelect}
          selectedFriend={selectedFriend}
        />
        {isOpen && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleOpen}>{isOpen ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
