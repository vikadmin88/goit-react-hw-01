import clsx from "clsx";
import css from './Profile.module.css'

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={clsx(css.container)}>
            <div>
                <div className={clsx(css.imgBox)}>
                    <img
                        src={image}
                        alt="User avatar"
                    />
                </div>
                <p className={clsx(css.name)}>{name}</p>
                <p className={clsx(css.tag)}>@{tag}</p>
                <p className={clsx(css.location)}>{location}</p>
            </div>

            <ul className={clsx(css.list)}>
                <li className={clsx(css.listItem)}>
                    <span className={clsx(css.listTitle)}>Followers</span>
                    <span className={clsx(css.listValue)}>{stats.followers}</span>
                </li>
                <li className={clsx(css.listItem)}>
                    <span className={clsx(css.listTitle)}>Views</span>
                    <span className={clsx(css.listValue)}>{stats.views}</span>
                </li>
                <li className={clsx(css.listItem)}>
                    <span className={clsx(css.listTitle)}>Likes</span>
                    <span className={clsx(css.listValue)}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
};

export default Profile;