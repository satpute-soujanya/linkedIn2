import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOpt from '../Feed/InputOpt'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'
import ShareIcon from '@material-ui/icons/Share'
import SendIcon from '@material-ui/icons/Send'
import './Post.css'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name?.[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__btn">
        <InputOpt title="Like" Icon={ThumbUpAltIcon} color="#757575" />
        <InputOpt title="Comment" Icon={QuestionAnswerIcon} color="#757575" />
        <InputOpt title="Share" Icon={ShareIcon} color="#757575" />
        <InputOpt title="Send" Icon={SendIcon} color="#757575" />
      </div>
    </div>
  )
})

export default Post
