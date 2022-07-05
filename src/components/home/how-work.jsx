import React from "react"
import { work_flow } from "../../utils/staticData"
import Heading from "../common/heading"

const HowWork = () => (
  <section className="how-work-section container">
    <Heading kicker="Así de fácil" title="¿Cómo funciona?" />
    <div className="row py-5">
      {work_flow.map((item, idx) => (
        <div className="col-md-3 col-sm-6" key={idx}>
          <div className="work-item">
            <div className={`work-item__icon item-${idx}`}>
              <img className="mb-5 pb-3" src={item.icon} alt="service icon" />
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default HowWork
