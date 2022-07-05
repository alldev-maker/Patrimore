import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { PlusGroup } from "../../utils/imgImport"
import { benefits } from "../../utils/staticData"
import Heading from "../common/heading"
import { Typography } from "../styled"

const Section = styled.section`
  padding-top: 70px;
  padding-top: 70px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-image: url(${PlusGroup});
    background-repeat: no-repeat;
    width: 153px;
    height: 166px;
    left: -50px;
    top: 0px;
  }
  .heading {
    max-width: 646px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 45px;
  }
  .content {
    margin: 32px 0;
    p {
      color: #2c506b;
      font-size: 20px;
      line-height: 34px;
      letter-spacing: -0.0066em;
    }
    strong {
      color: #172635;
      font-weight: 600;
    }
  }
`
const StyledLink = styled(Link)`
  padding: 10px 24px;
  background: #8e24aa;
  border: 1px solid #8e24aa;
  border-radius: 100px;
  color: white;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`

const Benefits = () => (
  <Section className="container">
    <Heading
      kicker="Algunos beneficios de contratar un asesor"
      title="¿Qué obtendrás con nuestro servicio?"
      center1="center"
      center2="center"
    />
    {benefits.map((item, idx) => (
      <div
        className={`row align-items-center py-3 ${
          (idx + 1) % 2 === 0 ? "flex-row-reverse" : ""
        }`}
        key={idx}
      >
        <div className="col-md-6">
          <div style={{ maxWidth: "488px" }}>
            <Typography variant="caption" size={48} height={60} spacing={-1.45}>
              {item.title}
            </Typography>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
          <StyledLink to="/pricing">Quiero mi plan</StyledLink>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={item.img} alt="graph" />
        </div>
      </div>
    ))}
  </Section>
)

export default Benefits
