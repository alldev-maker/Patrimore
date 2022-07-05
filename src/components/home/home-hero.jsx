import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { HeroCircle, Traveller } from "../../utils/imgImport"
import Heading from "../common/heading"

const HeroSection = styled.section`
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 446px;
    height: 797px;
    background-image: url(${HeroCircle});
    background-repeat: no-repeat;
  }
`
const LeftSide = styled.div`
  max-width: 488px;
  .kicker {
    margin-bottom: 12px;
  }
  .title {
    font-weight: 700;
    font-size: 84px;
    line-height: 89px;
  }
  .content {
    font-size: 20px;
    line-height: 34px;
    letter-spacing: -0.0066em;
  }
  .btn-groups {
    margin-top: 32px;
  }
`
const WatchButton = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    border-top: 7.5px solid transparent;
    border-bottom: 7.5px solid transparent;
    border-left: 11.6px solid white;
  }
  &::after {
    content: "Ver video";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -97px;
    white-space: pre;
    font-size: 18px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.text};
  }
`

const HomeHero = () => (
  <HeroSection>
    <div className="container">
      <div className="d-flex align-items-center ">
        <LeftSide>
          <Heading
            kicker="Asesores financieros de verdad"
            title="Un plan para lograr tus suheños"
            content="Nuestro equipo creará un plan financiero en base a tu realidad financiera y tus sueños. Un asesor financiero te ayudará a implementarlo, acompañándote en cada paso."
          />
          <div className="btn-groups d-flex align-items-center">
            <Link className="btn-start me-4" to="/">
              Empezar
            </Link>
            <WatchButton></WatchButton>
          </div>
        </LeftSide>
        <div className="text-center">
          <img className="w-100" src={Traveller} alt="traveller" />
        </div>
      </div>
    </div>
  </HeroSection>
)

export default HomeHero
