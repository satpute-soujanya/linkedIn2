import React from 'react'
import './InputOpt.css'
const InputOpt = ({ Icon, title, color }) => {
  return (
    <div className="InputOpt">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOpt
