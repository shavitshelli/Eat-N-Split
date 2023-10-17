import { useState } from "react";
import "./App.css";
import  Button  from "./Button";
import  FriensList from "./FriensList";
import  FormAddFriend from "./FormAddFriend";
import  FormSplitBill  from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  //Because we display FormAddFriend inside the App component we should place the state of the form here
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const [friends, setFriends] = useState(initialFriends);

  function handleClickEvent() {
    setShowAddFriend((currShowAddFriend) => !currShowAddFriend);
  }

  function handleSelection(friend) {
    setSelectedFriend((currSelectedFriend) =>
      friend.id === currSelectedFriend?.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleAddFriend(friend) {
    setFriends((currFriends) => [...currFriends, friend]);
    //whenever we add a new friend we want to colapse the form
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friendsArr) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriensList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleClickEvent}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
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


