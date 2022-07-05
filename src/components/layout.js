import * as React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./styled/theme"
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
