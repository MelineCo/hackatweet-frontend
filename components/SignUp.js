import styles from '../styles/SignUp.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

function SignUp() {
    const router = useRouter();
    const [firstname, setFirstname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {

        const newUser = {
            firstname: firstname,
            username: username,
            password: password
        }

        fetch(`http://localhost:3000/users/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
			.then(response => response.json())
			.then(data => {
				if (data.result) {
                    console.log(data)
                    setFirstname('');
                    setUsername('');
                    setPassword('');
                    // Redirection vers la page index
                    router.push('/')
                }
			});
    }

    return (
        <div className={styles.signUpContainer}>
            {/* <img src="/favicon.ico" alt="logo" /> */}
            <h2>Create your Hackatweet account</h2>
            <div className={styles.form}>
                <input className={styles.input} onChange={(e) => setFirstname(e.target.value)} value={firstname} placeholder='Firstname' />
                <input className={styles.input} onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username' />
                <input className={styles.input} onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
                <button className={styles.signUpButton} onClick={() => handleSignUp()}>Sign up</button>
            </div>

        </div>
    );
}

export default SignUp;