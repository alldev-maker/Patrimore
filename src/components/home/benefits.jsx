import { Link } from "gatsby"
import React from "react"
import Heading from "../common/heading"
import { benefits } from "../../utils/staticData"

const Benefits = () => (
  <section className="benefit-section container">
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
            <h2 className="caption">{item.title}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
          <Link className="btn-purple" to="/pricing">
            Quiero mi plan
          </Link>
        </div>
        <div className="col-md-6">
          <img className="w-100" src={item.img} alt="graph" />
        </div>
      </div>
    ))}
  </section>
)

export default Benefits
