import React, { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import './login.css'
const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.profileUrl,
          })
        )
      })
      .catch((error) => alert(error))
  }
  const register = (e) => {
    // e.preventDefault()
    console.log('hello')
    if (!name) {
      return alert('Enter full name you idiot!')
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: photoUrl,
              })
            )
          })
      })
      .catch((error) => alert(error))
  }
  return (
    <div className="login">
      <img
        src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png"
        alt=""
      />
      <form action="">
        <input
          type="text"
          placeholder="Full name (Required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="profile pic url (Optional)"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={loginToApp}>Sign in</button>
      </form>
      <p>
        Not a member?{' '}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
