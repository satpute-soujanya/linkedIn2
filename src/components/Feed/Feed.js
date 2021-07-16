import React, { useEffect, useState } from 'react'
import './feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/Event'
import DescriptionIcon from '@material-ui/icons/Description'
import InputOpt from './InputOpt.js'
import Post from '../Posts/Post'
import { db } from '../../firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import FlipMove from 'react-flip-move'
const Feed = () => {
  const user = useSelector(selectUser)
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
      .orderBy('timeStamp', 'desc')
      .onSnapshot((snapShot) =>
        setPosts(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      )
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }
  return (
    <div className="feed">
      <div className="feed__inputcontainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOpt title="Photo" Icon={ImageIcon} color="#70b5f9" />
          <InputOpt title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOpt title="Event" Icon={EventIcon} color="#C0CBCD" />
          <InputOpt title="Write" Icon={DescriptionIcon} color="#7FC15E" />
        </div>
      </div>
      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timeStamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timeStamp={timeStamp}
            />
          )
        )}
      </FlipMove>
    </div>
  )
}

export default Feed
