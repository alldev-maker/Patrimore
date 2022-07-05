import React from "react"
import styled from "styled-components"

const typoAssets = {
  headline: {
    size: 84,
    component: "h1",
    weight: 700,
    height: 89,
    spacing: -0.03,
    color: "#172635",
  },
  title: {
    size: 48,
    component: "h1",
    weight: 600,
    height: 72,
    spacing: -0.03,
    color: "#172635",
  },
  caption: {
    size: 32,
    component: "h2",
    weight: 600,
    height: 48,
    spacing: -0.04,
    color: "#172635",
  },
  subtitle: {
    size: 20,
    component: "h3",
    weight: 600,
    height: 24,
    spacing: -0.0066,
    color: "#172635",
  },
  text: {
    size: 16,
    component: "p",
    weight: 400,
    height: 28,
    color: "#2C506B",
  },
  kicker: {
    size: 20,
    component: "p",
    weight: 600,
    height: 34,
    color: "#8E24AA",
  },
  span: {
    component: "span",
  },
}

export const Typography = ({
  variant = "text",
  size,
  weight,
  height,
  family,
  color,
  align = "left",
  spacing = 0,
  children,
  ...props
}) => {
  return (
    <StyledTypography
      variant={variant}
      size={size}
      weight={weight}
      height={height}
      color={color}
      align={align}
      family={family}
      as={typoAssets[variant].component}
      {...props}
    >
      {children}
    </StyledTypography>
  )
}

const StyledTypography = styled.div`
  font-size: ${({ size, variant }) => size ?? typoAssets[variant].size}px;
  color: ${({ color, variant }) => color ?? typoAssets[variant].color};
  font-weight: ${({ weight, variant }) => weight ?? typoAssets[variant].weight};
  font-family: ${({ family, variant }) => family ?? typoAssets[variant].family};
  line-height: ${({ height, variant }) =>
    height ?? typoAssets[variant].height}px;
  text-align: ${({ align, variant }) => align ?? typoAssets[variant].align};
  letter-spacing: ${({ spacing, variant }) =>
    spacing ?? typoAssets[variant].spacing}em;
`
