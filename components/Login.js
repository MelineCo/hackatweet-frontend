import styles from '../styles/Login.module.css';
import SignUp from './SignUp';

function Login() {
    return (
        <div className={styles.container}>
            <img className={styles.bigImage} src="/twitter.png" alt="Twitter-backgroung-img" />
            <div className={styles.rightContainer}>
                <img className={styles.logo} src="/favicon.ico" alt="logo" />
                <h1 className={styles.h1}>See what's happening</h1>
                <h2 className={styles.h2}>Join hackatweet today.</h2>
                
                <SignUp />
            </div>
        </div>
    );
}

export default Login;