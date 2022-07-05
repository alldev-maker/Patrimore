import React from "react"
import styled from "styled-components"
import StarRatings from "react-star-ratings"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Navigation } from "swiper"

import Heading from "../common/heading"
import NextIcon from "../icons/next-icon"
import PrevIcon from "../icons/prev-icon"
import { testimonials } from "../../utils/staticData"
import { Typography } from "../styled"

const Section = styled.section`
  .swiper-slide {
    width: 453px !important;
  }
  .arrow-btns {
    display: flex;
    align-items: center;
  }
`
const TestimonialItem = styled.div`
  padding: 32px;
  .client-avatar {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }
`

const Testimonial = () => {
  return (
    <Section className="container">
      <div className="d-flex justify-content-between align-items-center">
        <Heading
          kicker="Tú también puedes serlo"
          title="Miles de clientes felices"
        />
        <div className="arrow-btns">
          <PrevIcon />
          <NextIcon />
        </div>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
        grabCursor={true}
        navigation={{
          prevEl: ".btn-prev",
          nextEl: ".btn-next",
        }}
        // loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialItem>
              <div className="d-flex align-items-center">
                <img className="client-avatar" src={item.avatar} alt="avatar" />
                <Typography
                  className="ms-4"
                  variant="subtitle"
                  weight={700}
                  height={30}
                >
                  {item.name}
                </Typography>
              </div>
              <Typography
                className="my-4"
                size={20}
                height={34}
                spacing={-0.66}
              >
                {item.feedback}
              </Typography>
              <StarRatings
                rating={item.rating}
                starSpacing="6.5px"
                starRatedColor="#FBB040"
                starEmptyColor="#e2dfdf"
                starDimension="24px"
                // svgIconPath="M12.4003 18.26L5.3473 22.208L6.92231 14.28L0.987305 8.792L9.01431 7.84L12.4003 0.5L15.7863 7.84L23.8133 8.792L17.8783 14.28L19.4533 22.208L12.4003 18.26Z"
              />
            </TestimonialItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}

export default Testimonial
