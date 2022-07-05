import React from "react"
import { Link } from "gatsby"
import { Traveller } from "../../utils/imgImport"

const HomeHero = () => (
  <section className="home-hero">
    <div className="container">
      <div className="d-flex align-items-center ">
        <div className="left-side">
          <div className="heading">
            <p className="kicker">Asesores financieros de verdad</p>
            <h1 className="title">Un plan para lograr tus suheños</h1>
            <p className="content">
              Nuestro equipo creará un plan financiero en base a tu realidad
              financiera y tus sueños. Un asesor financiero te ayudará a
              implementarlo, acompañándote en cada paso.
            </p>
          </div>
          <div className="btn-groups d-flex align-items-center">
            <Link className="btn-start me-4" to="/">
              Empezar
            </Link>
            <button className="btn-watch">{""}</button>
          </div>
        </div>
        <div className="text-center">
          <img className="w-100" src={Traveller} alt="traveller" />
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero
