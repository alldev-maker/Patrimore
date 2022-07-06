import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogItem from "../components/common/blog-item"
import formatDate from "../utils/formatDate"

const BlogPage = ({ data }) => {
  const blogList = data.allPrismicBlogPost.nodes

  return (
    <Layout>
      <Seo title="Blog Page" />
      <section className="blogs-section container">
        <div className="row align-items-center top-blog">
          <div className="col-md-6">
            <GatsbyImage
              className="blog-item__image"
              image={getImage(blogList[0].data.header_img)}
              alt={blogList[0].data.title}
            />
          </div>
          <div className="col-md-6">
            <p className="kicker">{blogList[0].data.category}</p>
            <Link className="blog-item__title" to={blogList[0].url}>
              <h2>{blogList[0].data.title}</h2>
            </Link>
            <p className="blog-item__content">{blogList[0].data.summary}</p>
            <p className="blog-item__date">
              {formatDate(blogList[0].data.publish_date)}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Lo último ✨</h2>
          <input
            className="blog-search"
            type="text"
            placeholder="¿Qué estás buscando?..."
          />
        </div>
        <div className="my-5 row">
          {blogList.map((item, idx) => (
            <div className="col-md-4 col-sm-6" key={idx}>
              <BlogItem blog={item} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query Blogs {
    allPrismicBlogPost {
      nodes {
        data {
          title
          summary
          header_img {
            gatsbyImageData
          }
          category
          publish_date
        }
        url
      }
    }
  }
`
