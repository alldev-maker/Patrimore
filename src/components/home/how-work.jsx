import React from "react"
import styled from "styled-components"
import { Line1, Line2 } from "../../utils/imgImport"
import { work_flow } from "../../utils/staticData"
import Heading from "../common/heading"

const Section = styled.section`
  .work-item__icon {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      background-image: url(${Line1});
      background-repeat: no-repeat;
      width: 162px;
      height: 32px;
      top: 5px;
      right: -85px;
    }
    &.item-1 {
      &::after {
        background-image: url(${Line2});
        top: 45px;
      }
    }
    &.item-3 {
      &::after {
        background-image: none;
      }
    }
  }
`

const WorkItem = styled.div`
  max-width: 285px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  .content {
    p {
      color: #5e6282;
    }
    strong {
      color: #181e4b;
    }
  }
`

const HowWork = () => (
  <Section className="container">
    <Heading kicker="Así de fácil" title="¿Cómo funciona?" />
    <div className="row py-5">
      {work_flow.map((item, idx) => (
        <div className="col-md-3 col-sm-6" key={idx}>
          <WorkItem>
            <div className={`work-item__icon item-${idx}`}>
              <img className="mb-5 pb-3" src={item.icon} alt="service icon" />
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </WorkItem>
        </div>
      ))}
    </div>
  </Section>
)

export default HowWork
