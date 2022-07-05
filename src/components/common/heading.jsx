import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Typography } from "../styled"

const Wrapper = styled.div`
  .kicker {
    margin-bottom: 5px;
  }

  ${down("sm")} {
    h1 {
      font-size: 26px;
      line-height: 36px;
    }
    p {
      font-size: 12px;
      line-height: 18px;
    }
  }
`

const Heading = ({
  title,
  content,
  kicker,
  center1 = "left",
  center2 = "left",
}) => {
  return (
    <Wrapper className="heading">
      <Typography className="kicker" variant="kicker" align={center1}>
        {kicker}
      </Typography>
      <Typography className="title" variant="title" align={center2}>
        {title}
      </Typography>
      {content && <Typography className="content">{content}</Typography>}
    </Wrapper>
  )
}

export default Heading
