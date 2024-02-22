import css from './FriendListItem.module.css'

const FriendListItem = ({friend}) => {

  return (
    <li>
        <img src={friend.avatar} alt="Avatar" width="48" />
        <p>{friend.name}</p>
        <p>{friend.isOnline ? "True" : "False"}</p>
    </li>
  );
}

export default FriendListItem