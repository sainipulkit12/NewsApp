import React from 'react'
import image from '../assets/news.jpg'

function NewsItem(props) {
  let { title, description, src, url } = props
  return (
    <div className='my-3'>
      <div className="card" style={{ Width: "18rem" }}>
        <img src={src?src:image} style={{ height: "200px" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 40)}..</h5>
          <p className="card-text">{description ? description.slice(0, 90) : "News is information about current events. It is a information about something that has just happened."}..</p>
          <a href={url} className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem