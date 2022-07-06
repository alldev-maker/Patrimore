import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogItem from "../components/common/blog-item"

const filters = [
  "Cursos online",
  "Finanzas personales",
  "Inversión",
  "Emprendimiento",
  "Jubilación",
]

const BlogCategory = ({ data }) => {
  const blogList = data.allPrismicBlogPost.nodes
  const [filteredBlogs, filterBlog] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    filterBlog(blogList.filter(item => item.data.category === filter))
  }, [filter, blogList])

  return (
    <Layout>
      <Seo title="Blog Category" />
      <section className="blogs-section container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="filter-list">
            {filters.map((item, idx) => (
              <button
                key={idx}
                className={`filter-item ${item === filter ? "active" : ""}`}
                onClick={() => {
                  setFilter(item)
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <input
            className="blog-search"
            type="text"
            placeholder="¿Qué estás buscando?..."
          />
        </div>
        <div className="my-5 row">
          {filter !== ""
            ? filteredBlogs.map((item, idx) => (
                <div className="col-md-4 col-sm-6" key={idx}>
                  <BlogItem blog={item} />
                </div>
              ))
            : blogList.map((item, idx) => (
                <div className="col-md-4 col-sm-6" key={idx}>
                  <BlogItem blog={item} />
                </div>
              ))}
        </div>
      </section>
    </Layout>
  )
}

export default BlogCategory

export const query = graphql`
  query BlogCategory {
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
