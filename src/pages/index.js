import * as React from "react"
import Benefits from "../components/home/benefits"
import HomeHero from "../components/home/home-hero"
import HowWork from "../components/home/how-work"
import Services from "../components/home/services"
import Testimonial from "../components/home/testimonial"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <Services />
    <HowWork />
    <Benefits />
    <Testimonial />
  </Layout>
)

export default IndexPage
