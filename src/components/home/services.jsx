import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Heading from "../common/heading"

import { Typography } from "../styled"
import { services } from "../../utils/staticData"

const Section = styled.section`
  .heading {
    max-width: 572px;
    margin-left: auto;
    margin-right: auto;
  }
`
const ServiceItem = styled.div`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  .title {
    margin: 12px 0;
  }
`
const StyledLink = styled(Link)`
  padding: 10px 50px;
  border: 1px solid #8e24aa;
  border-radius: 100px;
  color: #8e24aa;
  &:hover {
    background-color: #8e24aa;
    color: white;
    transition: all ease-in 0.35s;
  }
`

const Services = () => (
  <Section className="container">
    <Heading
      kicker="Un servicio único en Chile"
      title="Un asesor financiero que trabajará por tus sueños"
      center1="center"
      center2="center"
    />
    <div className="row my-5">
      {services.map(item => (
        <div className="col-md-3 col-sm-6" key={item.title}>
          <ServiceItem>
            <img src={item.icon} alt="service icon" />
            <Typography
              className="title"
              variant="subtitle"
              weight={500}
              size={20}
              height={30}
              align="center"
            >
              {item.title}
            </Typography>
            <Typography weight={500} size={18} height={26} align="center">
              {item.content}
            </Typography>
          </ServiceItem>
        </div>
      ))}
    </div>
    <div className="text-center pt-4">
      <StyledLink to="/">Comienza hoy mismo</StyledLink>
    </div>
  </Section>
)

export default Services
