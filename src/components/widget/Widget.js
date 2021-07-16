import React from 'react'
import './widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        'Get the email response you desire',
        '4-day ago - 16,234 reader'
      )}
      {newsArticle(`A 'two-pizza rule' for work`, '1-day ago - 26,234 reader')}
      {newsArticle(
        `Shorter hours 'boost productivity'`,
        '5-day ago - 26,234 reader'
      )}
      {newsArticle(
        `Flipkart's mega funding round`,
        '2-day ago - 20,234 reader'
      )}
    </div>
  )
}

export default Widget
