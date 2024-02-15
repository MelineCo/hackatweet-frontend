import styles from '../styles/Home.module.css';
import LastTweets from './LastTweets';
import { useState } from 'react';

function Home() {
  const [cuicui, setCuicui] = useState('');

  const handleTweet = () => {

    const newTweet = {
      firstname: 'tempFirstname',
      username: 'tempusername',
      tweet: cuicui,
      creationDate: new Date()
    }

    fetch(`http://localhost:3000/tweets/new`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTweet)
    })
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          console.log(data)
          setCuicui('');
        }
      });
  }

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Home</h1>

        <div className={styles.newTweetContainer}>
          <input className={styles.cuicuiInput} onChange={(e) => setCuicui(e.target.value)} value={cuicui} placeholder="WHAT'S UP?" />
          <div className={styles.submitTweet}>
            <p className={styles.tweetLength}>{cuicui.length}/ 280</p>
            <button className={styles.tweetButton} onClick={() => handleTweet()}>Tweet</button>
          </div>
        </div>

        <LastTweets />
      </main>
    </div>
  );
}


export default Home;


