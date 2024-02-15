import {useState } from 'react';
import styles from '../styles/SignIn.module.css';

function SignIn() {
   
const [signInUsername, setSignInUsername] = useState('')
const [signInPassword, setSignInPassword] = useState('');


const handleSignIn = () => {
console.log('click')

  fetch('http://localhost:3000/users/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: signInUsername, password: signInPassword }),
  }).then(response => response.json())
    .then(data => {
      console.log(data)

      if (data.result) {
        console.log(data.result)
        setSignInUsername('');
        setSignInPassword('');

      }
    });
};
    return (
  <>
            <div className={styles.form}>
					<p>Sign-in</p>
					<input className={styles.input} type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
					<input className={styles.input} type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
					<button className={styles.button} id="signIn" onClick={() => handleSignIn()}>SignIn</button>
            </div>
            </>
      )
    }

    export default SignIn