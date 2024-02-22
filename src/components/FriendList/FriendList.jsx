import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';


const FriendList = ({friends}) => {
  return (
    <ul>
        {
            friends.map(friend => (
                <FriendListItem key={friend.id} friend={friend} />
            ))
        }
    </ul>
  )
}

export default FriendList