import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';

function LastTweets(props) {
    const inverseTweetsData = [...props.tweetsData];
    const tweets = inverseTweetsData.reverse().map((data, i) => {
        return <Tweet key={i} {...data} />;
    });

    return (
        <div className={styles.tweetsContainer}>
            {tweets}
        </div>
    );
}

export default LastTweets;