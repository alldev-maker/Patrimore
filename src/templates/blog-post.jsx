import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import formatDate from "../utils/formatDate"

const BlogPost = ({ data }) => {
  const blogData = data.prismicBlogPost.data
  return (
    <Layout>
      <section className="blogs-section container">
        <div className="row top-blog">
          <div className="col-md-6">
            <GatsbyImage
              className="blog-item__image"
              image={getImage(blogData.header_img)}
              alt={blogData.title}
            />
          </div>
          <div className="col-md-6">
            <p className="kicker">{blogData.category}</p>
            <h2>{blogData.title}</h2>
            <p className="blog-item__content">{blogData.summary}</p>
            <p className="blog-item__date">
              {formatDate(blogData.publish_date)} · {blogData.reading_time} min
            </p>
            <div className="d-flex align-items-center mt-2">
              <img
                className="author-avatar"
                src={blogData.author_avatar.url}
                alt={blogData.author_name}
              />
              <p className="author-name">
                Escrito por: <br />
                <strong>{blogData.author_name}</strong>
              </p>
            </div>
          </div>
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blogData.content.html }}
        />
      </section>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostQuery($id: String) {
    prismicBlogPost(id: { eq: $id }) {
      data {
        title
        summary
        header_img {
          gatsbyImageData
        }
        category
        publish_date
        author_avatar {
          url
        }
        author_name
        content {
          html
        }
        reading_time
      }
    }
  }
`
