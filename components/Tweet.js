import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
    return (
        <div className={styles.tweet}>
            <div className={styles.infos}>
                <img className={styles.profilePic} src="/egg.png" alt="profile-pic" />
                <p className={styles.userInfos}>{props.firstname}</p>
                <p className={styles.greyInfos}> @{props.username} - x hours</p>
            </div>
            <p className={styles.text}>{props.tweet}</p>
            <div className={styles.likes}>
                <span className={styles.numberLikes}><FontAwesomeIcon onClick={() => handleLikeClick()} icon={faHeart} className={styles.iconHeart} /> {props.like}</span>
            </div>
        </div>
    );
}

export default Tweet;