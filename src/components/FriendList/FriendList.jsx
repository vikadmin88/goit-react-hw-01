import clsx from "clsx";
import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';


const FriendList = ({friends}) => {
  return (
    <ul className={clsx(css.list)}>
        {
            friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))
        }
    </ul>
  )
}

export default FriendList