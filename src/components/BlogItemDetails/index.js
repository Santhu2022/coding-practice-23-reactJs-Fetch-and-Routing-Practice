import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogItemDetails: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogItemDetails
    return (
      <div className="blog-info">
        <h1 className="title-blog-info">{title}</h1>
        <div className="avatar-author-blog-info-container">
          <img src={avatarUrl} alt="avatar" className="avatar-image" />
          <p className="author-name-blog-info">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-info-image" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
