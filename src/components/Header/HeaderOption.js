import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
const HeaderOption = ({ avatar, title, Icon, onClick }) => {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOptions__icon"></Icon>}
      {avatar && (
        <Avatar className="headerOptions__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  )
}

export default HeaderOption
