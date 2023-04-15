import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={topic} className="blog-image" />
        <div className="blog-details-container">
          <p className="topic-name">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="avatar-author-container">
            <img src={avatarUrl} alt="avatar" className="avatar-image" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
