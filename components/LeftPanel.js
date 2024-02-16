import styles from '../styles/LeftPanel.module.css';
import { useRouter } from 'next/router';
import {useSelector, useDispatch} from 'react-redux'
import { logout } from '../reducers/user';

function LeftPanel() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout= () =>{
        dispatch(logout()) 
        router.push('/login')   
    };

    const user = useSelector((state) => state.user.value);

    return (
        <div className={styles.container}>
            <img className="logo" src="/logo-down.png" alt="Twitter-backgroung-img" onClick={() => router.push('/')} />
            <div className={styles.bottomContainer}>
                <div className={styles.user}>
                    <img className="profilePic" src="/egg.png" alt="profile-picture" />
                    <div className={styles.userInfos}>
                        <p><span className="userInfos">{user.firstname}</span><br /><span className="greyInfos"> @{user.username}</span></p>
                    </div>
                </div>
                <button onClick={()=> handleLogout()} className="logOutButton">Logout</button>
            </div>
        </div>
    );
}

export default LeftPanel;