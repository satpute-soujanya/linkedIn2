import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
const SideBar = () => {
  const user = useSelector(selectUser)
  const recentItem = (topic) => (
    <div className="sidbar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
          srcset=""
        />
        <Avatar className="sidebar__avatar" src={user.photourl}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile? </p>
          <p className="sidebar__stat__num">189</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections </p>
          <p className="sidebar__stat__num">1081</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('Reactjs')}
        {recentItem('Game Development')}
        {recentItem('Blockchain')}
      </div>
    </div>
  )
}

export default SideBar
