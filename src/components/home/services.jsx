import React from "react"
import { Link } from "gatsby"
import Heading from "../common/heading"

import { services } from "../../utils/staticData"

const Services = () => (
  <section className="service-section container">
    <Heading
      kicker="Un servicio único en Chile"
      title="Un asesor financiero que trabajará por tus sueños"
      center1="center"
      center2="center"
    />
    <div className="row my-5">
      {services.map(item => (
        <div className="col-md-3 col-sm-6" key={item.title}>
          <div className="service-item">
            <img src={item.icon} alt="service icon" />
            <h3 className="title" variant="subtitle">
              {item.title}
            </h3>
            <p className="content">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center pt-4">
      <Link className="btn-primary__outline" to="/">
        Comienza hoy mismo
      </Link>
    </div>
  </section>
)

export default Services
