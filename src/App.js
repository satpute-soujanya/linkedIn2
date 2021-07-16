import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import SideBar from './components/sideBar/SideBar'
import { selectUser } from './features/userSlice'
import Login from './components/Login/Login'
import { auth } from './firebase'
import { login, logout } from './features/userSlice'
import Widget from './components/widget/Widget'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoUrl,
          })
        )
      } else {
        // loggedOut
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  )
}

export default App
