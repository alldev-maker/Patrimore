import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import formatDate from "../../utils/formatDate"

const BlogItem = ({ blog }) => (
  <div className="blog-item">
    <GatsbyImage
      className="blog-item__image"
      image={getImage(blog.data.header_img)}
      alt={blog.data.title}
    />
    <p className="blog-item__category">{blog.data.category}</p>
    <Link className="blog-item__title" to={blog.url}>
      <h3>{blog.data.title}</h3>
    </Link>
    <p className="blog-item__content">{blog.data.summary}</p>
    <p className="blog-item__date">{formatDate(blog.data.publish_date)}</p>
  </div>
)

export default BlogItem
