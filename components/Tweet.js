import styles from '../styles/Tweet.module.css';

function Tweet(props) {
    return (
        <div className={styles.tweet}>
            <div className={styles.infos}>
                <img className={styles.profilePic} src="/favicon.ico" alt="profile-pic" />
                <p className={styles.userInfos}>{props.firstname}</p>
                <p className={styles.greyInfos}> @{props.username} - x hours</p>
            </div>
            <p className={styles.text}>{props.tweet}</p>
            {/* <span><FontAwesomeIcon onClick={() => handleLikeClick()} icon={faBookmark} style={iconStyle} className={styles.bookmarkIcon} />{props.like}</span> */}

        </div>
    );
}

export default Tweet;