import styles from '../styles/LeftPanel.module.css';
import { useRouter } from 'next/router';

function LeftPanel() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <img className="logo" src="/logo-down.png" alt="Twitter-backgroung-img" onClick={() => router.push('/')} />
            <div className={styles.bottomContainer}>
                <div className={styles.user}>
                    <img className="profilePic" src="/egg.png" alt="profile-picture" />
                    <div className={styles.userInfos}>
                        <p><span className="userInfos">Anthony</span><br /><span className="greyInfos"> @shifoumi</span></p>
                    </div>
                </div>
                <button className="logOutButton">Logout</button>
            </div>
        </div>
    );
}

export default LeftPanel;