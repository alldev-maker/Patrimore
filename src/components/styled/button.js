import React from "react"
import styled from "styled-components"

export const Button = ({ type = "primary", children, ...props }) => {
  if (type === "primary")
    return <ButtonPrimary {...props}>{children}</ButtonPrimary>
  if (type === "second")
    return <ButtonSecond {...props}>{children}</ButtonSecond>
}

const ButtonPrimary = styled.button`
  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  &:hover {
    background-color: white;
    border-color: ${({ theme }) => theme.colors.green};
    box-shadow: none;
    color: black;
  }
`

const ButtonSecond = styled.button`
  background-color: black;
  color: white;
`
