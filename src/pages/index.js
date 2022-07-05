import * as React from "react"
import HomeHero from "../components/home/home-hero"
import HowWork from "../components/home/how-work"
import Services from "../components/home/services"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <Services />
    <HowWork />
  </Layout>
)

export default IndexPage
