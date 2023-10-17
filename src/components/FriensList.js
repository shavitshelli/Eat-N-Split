import  Friend  from "./Friend";

export default function FriensList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          key={friend.id} />
      ))}
    </ul>
  );
}
