import { useState } from 'react';
import styles from '../styles/SignIn.module.css';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user';

function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');


  const handleSignIn = () => {
    console.log('click signin')
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          console.log(data)
          dispatch(login({ username: data.username, token: data.token, firstname: data.firstname }));
          setSignInUsername('');
          setSignInPassword('');
          // Redirection vers la page index
          router.push('/')
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