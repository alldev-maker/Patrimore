import React from "react"
import styled from "styled-components"

export const Button = ({ type = "primary", children, ...props }) => {
  if (type === "primary")
    return <ButtonPrimary {...props}>{children}</ButtonPrimary>
  if (type === "second")
    return <ButtonSecond {...props}>{children}</ButtonSecond>
}

export const ArrowButton = ({ children, ...props }) => {
  return <ArrowIcon {...props}>{children}</ArrowIcon>
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

const ArrowIcon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2.5px solid #a9bfd1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  &:hover {
    border-color: #8e24aa;
    svg {
      path {
        fill: #8e24aa;
        transition: all ease-in 0.3s;
      }
    }
  }
`
