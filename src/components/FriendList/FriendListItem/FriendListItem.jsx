import clsx from "clsx";
import css from './FriendListItem.module.css'

const FriendListItem = ({friend}) => {

  return (
    <li className={clsx(css.listItem)}>
        <img className={clsx(css.image)} src={friend.avatar} alt="Avatar" width="48" />
        <p className={clsx(css.name)}>{friend.name}</p>
        <p className={clsx(css.state, {
          [css.isOnline]: friend.isOnline
          })}>{friend.isOnline ? "Online" : "Offline"}</p>
    </li>
  );
}

export default FriendListItem