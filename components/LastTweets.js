import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';
import { useState, useEffect } from 'react';

function LastTweets() {
    const [tweetsData, setTweetsData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tweets/')
          .then(response => response.json())
          .then(data => {
            setTweetsData(data.data);
            console.log(tweetsData)
          });
      }, []);


      const tweets = tweetsData.map((data, i) => {
          return <Tweet key={i} {...data} />;
      });

    return (
        <div className={styles.tweetsContainer}>
            {tweets}
        </div>
    );
}

export default LastTweets;